import React from 'react'
import { IonSlides, IonSlide } from '@ionic/react'
import { Card } from '../Objects/Card/Card'
import s from './PeoplePanel.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { clearSelectedData, setCurrentPage } from '../../Redux/Actions/SubscribeActions'


export const PeoplePanel = () => {

    const slideOpts = {
        initialSlide: 0,
        speed: 400,
        observer: true
    };

    const dispatch = useDispatch()
    const people = useSelector(state => state.SubscribeReducer.people); // get people array

    const getIndex = async (event) => { // get slide`s index
        let index = 0;
        await event.target.getActiveIndex().then((value) => (index = value)); 
        dispatch(setCurrentPage(index)); // set slide`s index
        dispatch(clearSelectedData()); // clear selected data on previous slide
    }

    return (
        <div>
            <IonSlides options={slideOpts} onIonSlideDidChange={(e) => getIndex(e)}>
                {people?.map((man, i) => (
                    <IonSlide className={s.slide} key={i}>
                        <Card
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
