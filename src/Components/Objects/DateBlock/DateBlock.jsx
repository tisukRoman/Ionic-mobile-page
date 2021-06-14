import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedDate } from '../../../Redux/Actions/SubscribeActions';
import s from './DateBlock.module.css'

export const DateBlock = ({ dayWeek, dayDate, id, month }) => {

    const dispatch = useDispatch();
    const selectedDate = useSelector(state => state.SubscribeReducer.selectedDate); 
    const pressHandle = () => { // User selects Date
        dispatch(setSelectedDate({id, dayWeek, dayDate, month}));
    }

    if (id === selectedDate?.id) { // if selected
        return <>
            <div className={s.DateBlock_container_active}>
                <div className={s.day_of_week_active}>
                    {dayWeek}
                </div>
                <div className={s.day_of_date_active}>
                    {dayDate}
                </div>
            </div>
        </>
    }
    // if not selected
    return <> 
        <div className={s.DateBlock_container} onClick={pressHandle}>
            <div className={s.day_of_week}>
                {dayWeek}
            </div>
            <div className={s.day_of_date}>
                {dayDate}
            </div>
        </div>
    </>
}
