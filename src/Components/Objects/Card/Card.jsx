import React from 'react'
import s from './Card.module.css'
import no_img from '../../../Assets/manAva.png'

export const Card = ({ name, time, img }) => {
    return (
        <div className={s.card_container}>
            <div className={s.name_container}>
                <h3 className={s.name_text}>{name}</h3>
            </div>

            <div className={s.flex_container}>
                <div className={s.flex_media}>
                    <div className={s.photo_container}>
                        <img src={img ? img : no_img} alt='man'/>
                    </div>
                    <div className={s.text_container}>
                        <div className={s.title_text}>Длительность консультации</div>
                        <div className={s.time_text}>{time} минут</div>
                    </div>
                </div>
            </div>

        </div>
    )
}
