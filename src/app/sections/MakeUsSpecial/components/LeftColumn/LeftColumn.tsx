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
                    src="/MakeUsSpecial1.png"
                    alt="example1"
                    width={281}
                    height={469}
                    className={css.image}
                />
                <div style={{ height: '25%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignContent: 'flex-end', alignItems: 'flex-end' }}>
                    <div className={css.secondBaloon} />


                </div>
            </div>
            <div className={css.column}>
                <Image
                    src="/MakeUsSpecial2.png"
                    alt="example2"
                    width={314}
                    height={506}
                    className={css.image}
                />
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignContent: 'flex-end', alignItems: 'flex-end' }}>
                    <div className={css.firstBaloon} />


                </div>

                <Image
                    src="/MakeUsSpecial3.png"
                    alt="example3"
                    width={280}
                    height={242}
                    className={css.image}
                />

            </div>
        </div>
    )
}
