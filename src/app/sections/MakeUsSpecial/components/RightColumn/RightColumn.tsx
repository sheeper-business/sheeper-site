import React from 'react'
import css from '../../MakeUsSpecial.module.css'
import { PairIconText } from '../PairIconText/PairIconText'
import { GroupOutlined, NotificationsOutlined, RedeemOutlined } from '@mui/icons-material'

export const RightColumn = () => {
    return (
        <div className={css.rightColumn}>
            <h1 className={css.title}>What makes us special?</h1>
            <div className={css.grid}>

                <PairIconText icon={<RedeemOutlined style={{ width: 64, height: 64 }} color='primary' />} title="Tailored deals" description="Our algorithm customizes deals to match your unique preferences and purchasing behavior, ensuring every offer resonates with your interests and maximizes your savings potential." />
                <PairIconText icon={<NotificationsOutlined style={{ width: 64, height: 64 }} color='primary' />} title="Location based notifications" description="Receive notifications in real-time based on your current location, ensuring you never miss out on nearby deals. Our system intelligently targets deals near your common locations such as home, workplace, and frequent hangout spots, enhancing convenience and maximizing savings on-the-go." />
                <PairIconText icon={<GroupOutlined style={{ width: 64, height: 64 }} color='primary' />} title="Available to Everyone" description="Dive into a world of endless possibilities across different industries, offering a variety of services and products" />
            </div>

        </div>
    )
}
