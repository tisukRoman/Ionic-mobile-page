import React from 'react'
import { IonSlides, IonSlide } from '@ionic/react'
import { Card } from '../Objects/Card/Card'
import s from './PeoplePanel.module.css'

export const PeoplePanel = () => {
    return (
        <div>
            <IonSlides>
                <IonSlide className={s.slide}>
                    <Card />
                </IonSlide>
                <IonSlide>
                    <Card />
                </IonSlide>
                <IonSlide>
                    <Card />
                </IonSlide>
                <IonSlide>
                    <Card />
                </IonSlide>
                <IonSlide>
                    <Card />
                </IonSlide>
            </IonSlides>
        </div>
    )
}
