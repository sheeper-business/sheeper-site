import React, { ReactNode } from 'react'
import css from './PairIconText.module.css'

interface IProps {
    icon: ReactNode;
    title: string;
    description: string;
}

export const PairIconText = ({ icon, title, description }: IProps) => {
    return (
        <div className={css.container}>
            <div className={css.iconContainer}>{icon}</div>
            <div className={css.textContainer}>
                <span className={css.title}>{title}</span>
                <p className={css.description}>{description}</p>
            </div>
        </div>
    )
}
