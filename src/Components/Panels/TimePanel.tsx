import React from 'react'
import { IonSlides, IonSlide } from '@ionic/react'
import s from './TimePanel.module.css'
import { TimeBlock } from '../Objects/TimeBlock/TimeBlock'
import { useSelector } from 'react-redux';
import { AppState } from '../../Redux/store';

type propsType = { // Types
    currentPage: number
}
type slideOptsType = {
    initialSlide: number,
    slidesPerView: number,
    spaceBetween: number,
    observer: boolean
}

export const TimePanel: React.FC<propsType> = ({ currentPage }) => {

    const slideOpts: slideOptsType = {
        initialSlide: 0,
        slidesPerView: 3,
        spaceBetween: 10,
        observer: true
    };

    const times = useSelector((state: AppState) => state.SubscribeReducer.people[currentPage]?.consultSchedule);
    let slider = React.useRef<HTMLIonSlidesElement | null>(null);
    const index = useSelector((state: AppState) => state.SubscribeReducer.selectedTime.index); // index of slide

    //--------------------------// Setting Slider on Saved Slide 
    React.useEffect(() => {
        const move = (): void => {
            if (index !== undefined) {
                const sliderElem: HTMLIonSlidesElement | null = slider.current;
                if (sliderElem !== null) {
                    sliderElem.slideTo(index, 1000);
                }
            }
        };
        move();
    }, [slider, index]);
    //--------------------------\\

    return (
        <div className={s.timePanel_container}>
            <div className={s.time_title}>
                Свободное время
            </div>
            <IonSlides options={slideOpts} ref={(instance) => slider.current = instance}>
                {times?.map((time, i) => (
                    <IonSlide key={i}>
                        <TimeBlock time={time.time} id={time.id} />
                    </IonSlide>
                ))}
            </IonSlides>
        </div>
    )
}
