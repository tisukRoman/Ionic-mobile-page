import React from 'react'
import { useSelector } from 'react-redux'
import s from './SubscribePanel.module.css'


export const SubscribePanel = () => {

    const selectedDate = useSelector(state => state.SubscribeReducer.selectedDate);
    const selectedTime = useSelector(state => state.SubscribeReducer.selectedTime);

    return (
        <div className={s.SubscribePanel}>
            <div className={s.info_container}>
                <div className={s.date}>
                    <div className={s.date_title}>Дата</div>
                    <div className={s.date_text}>{`${selectedDate.dayDate} ${selectedDate.month}`}</div>
                </div>
                <div className={s.single_line}>
                    <svg width="3" height="56" viewBox="0 0 3 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" width="2" height="56" rx="1" fill="#E6E6E6" />
                    </svg>
                </div>
                <div className={s.date}>
                    <div className={s.date_title}>Время</div>
                    <div className={s.date_text}>{selectedTime.time}</div>
                </div>
            </div>
            <div className={s.button}>ЗАПИСАТЬСЯ НА БЕСПЛАТНУЮ ВСТРЕЧУ</div>
        </div>
    )
}
