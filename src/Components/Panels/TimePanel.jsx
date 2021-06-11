import React from 'react'
import { IonSlides, IonSlide } from '@ionic/react'
import s from './TimePanel.module.css'
import { TimeBlock } from '../Objects/TimeBlock/TimeBlock'

const slideOpts = {
    initialSlide: 1,
    slidesPerView: 3,
    spaceBetween: 10
  };


export const TimePanel = () => {
    return (
        <div className={s.timePanel_container}>

            <div className={s.time_title}>
                Свободное время
            </div>

            <IonSlides options={slideOpts}>
                <IonSlide >
                    <TimeBlock />
                </IonSlide>
                <IonSlide >
                    <TimeBlock />
                </IonSlide>
                <IonSlide >
                    <TimeBlock />
                </IonSlide>
                <IonSlide >
                    <TimeBlock />
                </IonSlide>
                <IonSlide >
                    <TimeBlock />
                </IonSlide>
                <IonSlide >
                    <TimeBlock />
                </IonSlide>
            </IonSlides>
        </div>
    )
}
