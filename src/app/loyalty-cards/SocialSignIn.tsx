'use client';

import { useCallback, useEffect, useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin, type CredentialResponse } from '@react-oauth/google';
import { FaApple } from 'react-icons/fa';
import { AppButton } from '@/app/components/AppButton/AppButton';
import { postAppleSignIn, postGoogleSignIn } from '@/lib/sheeper/auth-client';
import css from './loyalty-cards.module.css';

declare global {
  interface Window {
    AppleID?: {
      auth: {
        init: (config: Record<string, unknown>) => void;
        signIn: () => Promise<{
          authorization: { id_token: string };
          user?: {
            email?: string;
            name?: { firstName?: string; lastName?: string };
          };
        }>;
      };
    };
  }
}

type Labels = {
  google: string;
  apple: string;
  orContinue: string;
  error: string;
};

type Props = {
  labels: Labels;
  disabled?: boolean;
  onSuccess: (token: string, profile: { first_name: string; last_name: string; email: string }) => void;
  onError: (message: string) => void;
};

const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID?.trim() ?? '';
const APPLE_CLIENT_ID = process.env.NEXT_PUBLIC_APPLE_CLIENT_ID?.trim() ?? '';

function SocialSignInInner({ labels, disabled, onSuccess, onError }: Props) {
  const [appleReady, setAppleReady] = useState(false);
  const [loading, setLoading] = useState<'google' | 'apple' | null>(null);

  useEffect(() => {
    if (!APPLE_CLIENT_ID) return;

    const scriptId = 'apple-signin-sdk';
    const initApple = () => {
      if (!window.AppleID?.auth) return;
      window.AppleID.auth.init({
        clientId: APPLE_CLIENT_ID,
        scope: 'name email',
        redirectURI: typeof window !== 'undefined' ? window.location.origin : '',
        usePopup: true,
      });
      setAppleReady(true);
    };

    if (document.getElementById(scriptId)) {
      initApple();
      return;
    }

    const script = document.createElement('script');
    script.id = scriptId;
    script.src =
      'https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js';
    script.async = true;
    script.onload = initApple;
    document.body.appendChild(script);
  }, []);

  const handleGoogle = useCallback(
    async (response: CredentialResponse) => {
      if (!response.credential) {
        onError(labels.error);
        return;
      }
      setLoading('google');
      try {
        const session = await postGoogleSignIn(response.credential);
        onSuccess(session.token, session.profile);
      } catch (e) {
        onError(e instanceof Error ? e.message : labels.error);
      } finally {
        setLoading(null);
      }
    },
    [labels.error, onError, onSuccess]
  );

  const handleApple = useCallback(async () => {
    if (!window.AppleID?.auth) {
      onError(labels.error);
      return;
    }
    setLoading('apple');
    try {
      const response = await window.AppleID.auth.signIn();
      const session = await postAppleSignIn({
        id_token: response.authorization.id_token,
        first_name: response.user?.name?.firstName ?? null,
        last_name: response.user?.name?.lastName ?? null,
        email: response.user?.email ?? null,
      });
      onSuccess(session.token, session.profile);
    } catch (e) {
      const message = e instanceof Error ? e.message : labels.error;
      if (!message.toLowerCase().includes('popup_closed')) {
        onError(message);
      }
    } finally {
      setLoading(null);
    }
  }, [labels.error, onError, onSuccess]);

  const showGoogle = Boolean(GOOGLE_CLIENT_ID);
  const showApple = Boolean(APPLE_CLIENT_ID);

  if (!showGoogle && !showApple) return null;

  return (
    <div className={css.oauthSection}>
      <div className={css.oauthButtons}>
        {showGoogle ? (
          <div className={css.googleButtonWrap}>
            <GoogleLogin
              onSuccess={handleGoogle}
              onError={() => onError(labels.error)}
              theme="outline"
              size="large"
              text="continue_with"
              shape="pill"
              width={320}
            />
          </div>
        ) : null}

        {showApple ? (
          <AppButton
            type="button"
            variant="outlined"
            color="primary"
            fullWidth
            className={css.oauthButton}
            disabled={disabled || !appleReady || loading !== null}
            isLoading={loading === 'apple'}
            onClick={() => void handleApple()}
            startIcon={<FaApple className={css.oauthIconApple} aria-hidden />}
          >
            {labels.apple}
          </AppButton>
        ) : null}
      </div>

      <p className={css.oauthDivider}>
        <span>{labels.orContinue}</span>
      </p>
    </div>
  );
}

export function SocialSignIn(props: Props) {
  if (!GOOGLE_CLIENT_ID && !APPLE_CLIENT_ID) return null;

  if (GOOGLE_CLIENT_ID) {
    return (
      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        <SocialSignInInner {...props} />
      </GoogleOAuthProvider>
    );
  }

  return <SocialSignInInner {...props} />;
}
