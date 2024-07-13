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
                <h6>Tailored deals</h6>
                <p className={css.description}>Our algorithm customizes deals to match your unique preferences and purchasing behavior, ensuring every offer resonates with your interests and maximizes your savings potential.</p>
            </div>
        </div>
    )
}
