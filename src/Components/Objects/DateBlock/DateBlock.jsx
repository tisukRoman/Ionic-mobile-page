import React from 'react'
import s from './DateBlock.module.css'

export const DateBlock = () => {
    return (
        <div className={s.DateBlock_container}>
            <div className={s.day_of_week}>
                пт
            </div>
            <div className={s.day_of_date}>
                26
            </div>
        </div>
    )
}
