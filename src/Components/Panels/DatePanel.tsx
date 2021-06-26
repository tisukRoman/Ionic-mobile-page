import React from 'react'
import { IonSlides, IonSlide } from '@ionic/react'
import s from './DatePanel.module.css'
import { DateBlock } from '../Objects/DateBlock/DateBlock'
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

export const DatePanel: React.FC<propsType> = ({ currentPage }) => {

    const slideOpts: slideOptsType = {
        initialSlide: 0,
        slidesPerView: 3,
        spaceBetween: 10,
        observer: true
    };

    let slider = React.useRef<HTMLIonSlidesElement | null>(null);
    const dates = useSelector((state: AppState) => state.SubscribeReducer.people[currentPage].consultDates);
    const index = useSelector((state: AppState) => state.SubscribeReducer.selectedDate.index); // index of slide

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
        <div className={s.date_panel}>

            <div className={s.flex_panel}>
                <div className={s.title}>
                    Возможная дата
                </div>
                <div className={s.scroll_button}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.61539 19.1429L6.61539 4.85714C6.61539 4.09938 6.93956 3.37265 7.51659 2.83684C8.09363 2.30102 8.87626 2 9.69231 2L14.3077 2C15.1237 2 15.9064 2.30102 16.4834 2.83684C17.0604 3.37265 17.3846 4.09938 17.3846 4.85714L17.3846 19.1429C17.3846 19.9006 17.0604 20.6273 16.4834 21.1632C15.9064 21.699 15.1237 22 14.3077 22L9.69231 22C8.87626 22 8.09363 21.699 7.51659 21.1632C6.93956 20.6273 6.61539 19.9006 6.61539 19.1429ZM8.15385 19.1429C8.15385 19.5217 8.31594 19.8851 8.60445 20.153C8.89297 20.4209 9.28428 20.5714 9.69231 20.5714L14.3077 20.5714C14.7157 20.5714 15.107 20.4209 15.3956 20.153C15.6841 19.8851 15.8462 19.5217 15.8462 19.1429L15.8462 4.85714C15.8462 4.47826 15.6841 4.1149 15.3956 3.84699C15.107 3.57908 14.7157 3.42857 14.3077 3.42857L9.69231 3.42857C9.28428 3.42857 8.89297 3.57908 8.60445 3.84699C8.31594 4.1149 8.15385 4.47826 8.15385 4.85714L8.15385 19.1429ZM2.76923 22C2.56522 22 2.36956 21.9247 2.2253 21.7908C2.08104 21.6568 2 21.4752 2 21.2857L2 2.71428C2 2.52484 2.08104 2.34316 2.2253 2.20921C2.36956 2.07525 2.56522 2 2.76923 2C2.97324 2 3.1689 2.07525 3.31316 2.20921C3.45742 2.34316 3.53846 2.52484 3.53846 2.71428L3.53846 21.2857C3.53846 21.4752 3.45742 21.6568 3.31316 21.7908C3.1689 21.9247 2.97324 22 2.76923 22ZM21.2308 22C21.0268 22 20.8311 21.9247 20.6868 21.7908C20.5426 21.6568 20.4615 21.4752 20.4615 21.2857L20.4615 2.71428C20.4615 2.52484 20.5426 2.34316 20.6868 2.20921C20.8311 2.07525 21.0268 2 21.2308 2C21.4348 2 21.6304 2.07525 21.7747 2.20921C21.919 2.34316 22 2.52484 22 2.71428L22 21.2857C22 21.4752 21.919 21.6568 21.7747 21.7908C21.6304 21.9247 21.4348 22 21.2308 22Z" fill="#33BDE4" />
                    </svg>
                </div>
                <div className={s.table_button}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.81694 2.18306C6.69973 2.06585 6.54076 2 6.375 2C6.20924 2 6.05027 2.06585 5.93306 2.18306C5.81585 2.30027 5.75 2.45924 5.75 2.625V3.25H4.5C3.83696 3.25 3.20107 3.51339 2.73223 3.98223C2.26339 4.45107 2 5.08696 2 5.75V19.5C2 20.163 2.26339 20.7989 2.73223 21.2678C3.20107 21.7366 3.83696 22 4.5 22H19.5C20.163 22 20.7989 21.7366 21.2678 21.2678C21.7366 20.7989 22 20.163 22 19.5V5.75C22 5.08696 21.7366 4.45107 21.2678 3.98223C20.7989 3.51339 20.163 3.25 19.5 3.25H18.25V2.625C18.25 2.45924 18.1842 2.30027 18.0669 2.18306C17.9497 2.06585 17.7908 2 17.625 2C17.4592 2 17.3003 2.06585 17.1831 2.18306C17.0658 2.30027 17 2.45924 17 2.625V3.25H7V2.625C7 2.45924 6.93415 2.30027 6.81694 2.18306ZM3.25 13.25L3.25 7H20.75V19.5C20.75 19.8315 20.6183 20.1495 20.3839 20.3839C20.1495 20.6183 19.8315 20.75 19.5 20.75H4.5C4.16848 20.75 3.85054 20.6183 3.61612 20.3839C3.3817 20.1495 3.25 19.8315 3.25 19.5L3.25 15.75H8.25C8.58152 15.75 8.89946 15.6183 9.13388 15.3839C9.3683 15.1495 9.5 14.8315 9.5 14.5C9.5 14.1685 9.3683 13.8505 9.13388 13.6161C8.89946 13.3817 8.58152 13.25 8.25 13.25H3.25ZM13.6161 9.86612C13.3817 10.1005 13.25 10.4185 13.25 10.75C13.25 11.0815 13.3817 11.3995 13.6161 11.6339C13.8505 11.8683 14.1685 12 14.5 12H20.75V9.5H14.5C14.1685 9.5 13.8505 9.6317 13.6161 9.86612Z" fill="#C1C1C1" />
                    </svg>
                </div>
            </div>

            <IonSlides options={slideOpts} ref={(instance) => slider.current = instance}>
                {dates.map((date, i) => (
                    <IonSlide key={i}>
                        <DateBlock month={date.month} dayWeek={date.dayWeek} dayDate={date.dayDate} id={date.id} />
                    </IonSlide>
                ))}
            </IonSlides>
        </div>
    )
}
