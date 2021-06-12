import React from 'react'
import { IonSlides, IonSlide } from '@ionic/react'
import { Card } from '../Objects/Card/Card'
import s from './PeoplePanel.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { clearSelectedData } from '../../Redux/Actions/SubscribeActions'


const slideOpts = {
    initialSlide: 0,
    speed: 400,
    observer: true
};

export const PeoplePanel = ({ setSlideIndex }) => {

    const dispatch = useDispatch()
    const people = useSelector(state => state.SubscribeReducer.people); // get people array

    const getIndex = async (event) => {
        let index = 0;
        await event.target.getActiveIndex().then((value) => (index = value)); // gets index of slide
        await event.target.update(); // updates slider
        setSlideIndex(index); // sets current slide Index
        dispatch(clearSelectedData())
    }

    return (
        <div>
            <IonSlides options={slideOpts} onIonSlideDidChange={(e) => getIndex(e)}>
                {people?.map((man, i) => (
                    <IonSlide className={s.slide} key={i}>
                        <Card
                            key={i}
                            name={man.name}
                            img={man.img}
                            time={man.consultDuration}
                        />
                    </IonSlide>
                ))}
            </IonSlides>
        </div>
    )
}
