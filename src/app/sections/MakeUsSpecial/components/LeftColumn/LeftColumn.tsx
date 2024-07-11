import Image from 'next/image'
import React from 'react'
import css from './LeftColumn.module.css'

export const LeftColumn = () => {
    return (
        <div className={css.container}>
            <div className={css.column}>
                <div style={{ height: '25%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignContent: 'flex-end', alignItems: 'flex-end' }}>
                    <div className={css.firstBaloon} />


                </div>

                <Image
                    src="/about1.png"
                    alt="homepage"
                    width={314}
                    height={506}
                    className={css.image}
                />
                <div style={{ height: '25%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignContent: 'flex-end', alignItems: 'flex-end' }}>
                    <div className={css.secondBaloon} />


                </div>
            </div>
            <div className={css.column}>
                <Image
                    src="/about1.png"
                    alt="homepage"
                    width={281}
                    height={468}
                    className={css.image}
                />
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignContent: 'flex-end', alignItems: 'flex-end' }}>
                    <div className={css.firstBaloon} />


                </div>

                <Image
                    src="/about1.png"
                    alt="homepage"
                    width={280}
                    height={242}
                    className={css.image}
                />

            </div>
        </div>
    )
}
