'use client';

import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { AppButton } from '@/app/components/AppButton/AppButton';
import { postWalletClaim } from '@/lib/sheeper/client';
import { setWalletSession, type WalletProfile } from '@/lib/sheeper/session';
import { ENABLE_SOCIAL_SIGN_IN } from '@/lib/sheeper/config';
import { SocialSignIn } from './SocialSignIn';
import css from './loyalty-cards.module.css';

const schema = yup.object({
  first_name: yup.string().trim().min(1).max(100).required(),
  last_name: yup.string().trim().min(1).max(100).required(),
  email: yup.string().trim().email().max(320).required(),
});

type FormValues = yup.InferType<typeof schema>;

type Labels = {
  title: string;
  lead: string;
  firstName: string;
  lastName: string;
  email: string;
  submit: string;
  error: string;
  google?: string;
  apple?: string;
  orContinue?: string;
  oauthError?: string;
};

type Props = {
  labels: Labels;
  onAuthenticated: (token: string, profile: WalletProfile) => void;
  compact?: boolean;
};

export function WalletAccessGate({ labels, onAuthenticated, compact }: Props) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: { first_name: '', last_name: '', email: '' },
  });

  const completeAuth = useCallback(
    (token: string, profile: WalletProfile) => {
      setWalletSession(token, profile);
      onAuthenticated(token, profile);
    },
    [onAuthenticated]
  );

  const onSubmit = async (data: FormValues) => {
    setStatus('loading');
    setErrorMessage(null);
    try {
      const token = await postWalletClaim(data);
      completeAuth(token, data);
    } catch (e) {
      setStatus('error');
      setErrorMessage(e instanceof Error ? e.message : labels.error);
    }
  };

  return (
    <section className={compact ? `${css.gate} ${css.gateCompact}` : css.gate}>
      <h2 className={compact ? `${css.gateTitle} ${css.gateTitleCompact}` : css.gateTitle}>
        {labels.title}
      </h2>
      <p className={compact ? `${css.lead} ${css.leadCompact}` : css.lead}>{labels.lead}</p>

      {ENABLE_SOCIAL_SIGN_IN ? (
        <SocialSignIn
          labels={{
            google: labels.google ?? '',
            apple: labels.apple ?? '',
            orContinue: labels.orContinue ?? '',
            error: labels.oauthError ?? labels.error,
          }}
          disabled={status === 'loading'}
          onSuccess={(token, profile) => {
            setErrorMessage(null);
            completeAuth(token, profile);
          }}
          onError={setErrorMessage}
        />
      ) : null}

      <form
        className={compact ? `${css.gateForm} ${css.gateFormCompact}` : css.gateForm}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div className={css.gateRow}>
          <NameFields labels={labels} register={register} errors={errors} />
        </div>

        <div className={css.field}>
          <label htmlFor="access-email">{labels.email}</label>
          <input id="access-email" type="email" autoComplete="email" {...register('email')} />
          {errors.email ? <span className={css.fieldError}>{errors.email.message}</span> : null}
        </div>

        <AppButton type="submit" variant="contained" color="primary" isLoading={status === 'loading'}>
          {labels.submit}
        </AppButton>
      </form>

      {errorMessage ? <p className={css.error}>{errorMessage}</p> : null}
    </section>
  );
}

function NameFields({
  labels,
  register,
  errors,
}: {
  labels: Pick<Labels, 'firstName' | 'lastName'>;
  register: ReturnType<typeof useForm<FormValues>>['register'];
  errors: ReturnType<typeof useForm<FormValues>>['formState']['errors'];
}) {
  return (
    <>
      <div className={css.field}>
        <label htmlFor="access-first-name">{labels.firstName}</label>
        <input id="access-first-name" type="text" autoComplete="given-name" {...register('first_name')} />
        {errors.first_name ? <span className={css.fieldError}>{errors.first_name.message}</span> : null}
      </div>
      <div className={css.field}>
        <label htmlFor="access-last-name">{labels.lastName}</label>
        <input id="access-last-name" type="text" autoComplete="family-name" {...register('last_name')} />
        {errors.last_name ? <span className={css.fieldError}>{errors.last_name.message}</span> : null}
      </div>
    </>
  );
}
