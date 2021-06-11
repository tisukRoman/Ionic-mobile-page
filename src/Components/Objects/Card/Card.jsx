import React from 'react'
import s from './Card.module.css'

export const Card = () => {
    return (
        <div className={s.card_container}>
            <div className={s.name_container}>
                <h3 className={s.name_text}>Имя</h3>
            </div>

            <div  className={s.flex_container}>
                <div className={s.flex_media}>
                    <div className={s.photo_container}>
                        Photo
                    </div>
                    <div className={s.text_container}>
                        <div className={s.title_text}>Длительность консультации</div>
                        <div className={s.time_text}>50 минут</div>
                    </div>
                </div>
            </div>

        </div>
    )
}
