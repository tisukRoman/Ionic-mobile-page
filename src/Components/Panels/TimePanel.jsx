import React from 'react'
import { IonSlides, IonSlide, IonItem } from '@ionic/react'
import s from './TimePanel.module.css'
import { TimeBlock } from '../Objects/TimeBlock/TimeBlock'
import { useSelector } from 'react-redux';


export const TimePanel = ({ currentPage }) => {

    const slideOpts = {
        initialSlide: 0,
        slidesPerView: 3,
        spaceBetween: 10,
        observer:true
    };

    const times = useSelector(state => state.SubscribeReducer.people[currentPage]?.consultSchedule);

    return (
        <div className={s.timePanel_container}>

            <div className={s.time_title}>
                Свободное время
            </div>

            <IonSlides options={slideOpts}>
                {times?.map((time, i) => (
                    <IonSlide key={i}>
                        <TimeBlock time={time.time} id={time.id}/>
                    </IonSlide>
                ))}
            </IonSlides>
        </div>
    )
}
