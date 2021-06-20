import React from 'react'
import { IonSlides, IonSlide } from '@ionic/react'
import { Card } from '../Objects/Card/Card'
import s from './PeoplePanel.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentPage } from '../../Redux/Actions/SubscribeActions'
import { AppState } from '../../Redux/store'


type propsType = { // Types
    currentPage: number | null
}

export const PeoplePanel: React.FC<propsType> = ({ currentPage }) => {

    const dispatch = useDispatch()
    const people = useSelector((state: AppState) => state.SubscribeReducer.people); // get people array
    let slider = React.useRef<HTMLIonSlidesElement | null>(null);

    const slideOptions = {
        initialSlide: 0,
        speed: 400,
        observer: true
    }

    //--------------------------// Setting Slider on Saved Page 
    React.useEffect(() => {
        const move = () => {
            if (currentPage !== null) {
                setTimeout(() => {
                    const sliderElem: HTMLIonSlidesElement | null = slider.current;
                    if (sliderElem !== null)
                        sliderElem.slideTo(currentPage, 500);
                }, 500);
            }
            return
        };
        move();
    }, [slider, currentPage]);
    //--------------------------\\

    //--------------------------// Getting Index of Active Doctor's Slide
    type getIndexType = (event: Event | null) => { // type
    }
    const getIndex: getIndexType = async (event) => { // get slide`s index
        if (event !== null) {
            let index: number = 0;
            const slider = event.target as HTMLIonSlidesElement;
            index = await slider.getActiveIndex();
            /* index = await promise  */ /* then((value: number) => value); */
            dispatch(setCurrentPage(index)); // set slide`s index
        }
    }
    //--------------------------\\

    return (
        <div>
            <IonSlides
                options={slideOptions}
                onIonSlideDidChange={(e: Event | null) => getIndex(e)}
                ref={(instance) => slider.current = instance}>
                {people.map((man, i) => (
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


