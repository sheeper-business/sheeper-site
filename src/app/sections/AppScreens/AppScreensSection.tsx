import React from 'react'
import css from './AppScreensSection.module.css'
import Image from 'next/image'

export const AppScreensSection = () => {
    return (
        <div className={css.container}>
            <h5 style={{ textAlign: 'center', width: '80%', fontSize: "3rem" }}>Dive into our app friendly UI for a seamless experience like never before</h5>
            <Image src="/app-screens.png" alt="app-screens" width={1132} height={686} />
        </div>
    )
}
