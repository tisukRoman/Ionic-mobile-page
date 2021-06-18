import React from 'react'
import { IonSlides, IonSlide } from '@ionic/react'
import s from './TimePanel.module.css'
import { TimeBlock } from '../Objects/TimeBlock/TimeBlock'
import { useSelector } from 'react-redux';
import { globalState_t } from '../../Redux/store';

type propsType = { // Types
    currentPage: number 
}
export const TimePanel: React.FC<propsType> = ({ currentPage }) => {

    const slideOpts = {
        initialSlide: 0,
        slidesPerView: 3,
        spaceBetween: 10,
        observer:true
    };

    const times = useSelector((state: globalState_t) => state.SubscribeReducer.people[currentPage]?.consultSchedule);

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
