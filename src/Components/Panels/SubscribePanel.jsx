import React from 'react'
import { useSelector } from 'react-redux'
import s from './SubscribePanel.module.css'
import db from '../../firebase'

export const SubscribePanel = ({ currentPage }) => {

    const selectedDate = useSelector(state => state.SubscribeReducer.selectedDate);
    const selectedTime = useSelector(state => state.SubscribeReducer.selectedTime);
    const doctor = useSelector(state => state.SubscribeReducer.people[currentPage].id);

    const renderMonth = () => { // Set month name in appropriate case (июнь -> июня. март -> марта)
        if (selectedDate) {
            let arrMonth = selectedDate.month.split('');
            let lastLetter = arrMonth.pop();
            if (!lastLetter) return '';
            switch (lastLetter) {
                case 'т':
                    lastLetter = 'та';
                    break;
                default:
                    lastLetter = 'я';
            };
            arrMonth.push(lastLetter);
            return arrMonth.join('');
        } else {
            return '';
        }
    }
    const onSaveSubscribeData = () => { // Save selected Data on firestore
        db.collection('consultInfo').doc('user').set({ doctorId: doctor, dateId: selectedDate.id, timeId: selectedTime.id })
    }

    return (
        <div className={s.SubscribePanel}>
            <div className={s.info_container}>
                <div className={s.date}>
                    <div className={s.date_title}>Дата</div>
                    <div className={s.date_text}>{`${selectedDate ? selectedDate.dayDate : '...'} ${renderMonth()}`}</div>
                </div>
                <div className={s.single_line}>
                    <svg width="3" height="56" viewBox="0 0 3 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" width="2" height="56" rx="1" fill="#E6E6E6" />
                    </svg>
                </div>
                <div className={s.date}>
                    <div className={s.date_title}>Время</div>
                    <div className={s.date_text}>{selectedTime ? selectedTime.time : '...'}</div>
                </div>
            </div>
            <div className={s.button} onClick={onSaveSubscribeData}>
                ЗАПИСАТЬСЯ НА БЕСПЛАТНУЮ ВСТРЕЧУ
            </div>
        </div>
    )
}
