import React from 'react'
import s from './SubscribePanel.module.css'


export const SubscribePanel = () => {
    return (
        <div className={s.SubscribePanel}>
            <div className={s.info_container}>
                <div className={s.date}>
                    <div className={s.date_title}>Дата</div>
                    <div className={s.date_text}>26 мая</div>
                </div>
                <div className={s.single_line}>
                    <svg width="3" height="56" viewBox="0 0 3 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" width="2" height="56" rx="1" fill="#E6E6E6" />
                    </svg>
                </div>
                <div className={s.date}>
                    <div className={s.date_title}>Время</div>
                    <div className={s.date_text}>18.30</div>
                </div>
            </div>
            <div className={s.button}>ЗАПИСАТЬСЯ НА БЕСПЛАТНУЮ ВСТРЕЧУ</div>
        </div>
    )
}
