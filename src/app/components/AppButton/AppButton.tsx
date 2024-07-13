import React from 'react'
import { Button, ButtonProps } from '@mui/material'
import css from './AppButton.module.css'

interface AppButtonProps extends ButtonProps {
    isLoading?: boolean
    // Add any additional props you want to pass to the Button component
}

export const AppButton = ({
    variant = 'contained',
    size = 'medium',
    children,
    isLoading,
    className,
    ...props
}: AppButtonProps) => {
    return (
        <Button variant={variant} size={size} fullWidth className={`${css.buttonContainer} ${className}`} {...props}>
            {isLoading ? <div className={css.spinner} /> : children}
        </Button>
    )
}
