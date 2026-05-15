import React from 'react';
import { Button as MuiButton, ButtonProps, Button } from '@mui/material';
import css from './AppButton.module.css';

interface AppButtonProps extends ButtonProps {
  isLoading?: boolean;
  fullWidth?: boolean;
  // Add any additional props you want to pass to the Button component
}

export const AppButton = ({
  variant = 'contained',
  size = 'medium',
  children,
  isLoading,
  fullWidth = false,
  ...props
}: AppButtonProps) => {
  return (
    <Button
      className={`${css.button} ${fullWidth ? css.fullWidth : ''} ${
        variant === 'contained' ? css.contained : ''
      }`}
      size={size}
      {...props}
    >
      {isLoading ? <div className={css.spinner}></div> : children}
    </Button>
  );
};
