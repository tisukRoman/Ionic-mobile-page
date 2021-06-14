import React from 'react'
import { IonSlides, IonSlide } from '@ionic/react'
import { Card } from '../Objects/Card/Card'
import s from './PeoplePanel.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { clearSelectedData, setCurrentPage } from '../../Redux/Actions/SubscribeActions'


export const PeoplePanel = ({ currentPage }) => {

    const dispatch = useDispatch()
    const people = useSelector(state => state.SubscribeReducer.people); // get people array
    let slider = React.useRef();

    const slideOptions = {
        initialSlide: 0,
        speed: 400,
        observer: true
    }

    React.useEffect(() => {
        const move = () => {
            if (slider.current && currentPage) {
                setTimeout(() => slider?.current?.slideTo(currentPage, 500).then(() => console.log('Has moved')), 500);
            } else {
                return;
            }
        };
        move();
    }, [slider, currentPage]);

    const getIndex = async (event) => { // get slide`s index
        let index = 0;
        await event.target.getActiveIndex().then((value) => (index = value));
        dispatch(setCurrentPage(index)); // set slide`s index
    }

    return (
        <div>
            <IonSlides options={slideOptions} onIonSlideDidChange={(e) => getIndex(e)} ref={slider}>
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
