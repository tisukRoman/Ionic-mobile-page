import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedDate } from '../../../Redux/Actions/SubscribeActions';
import { AppState } from '../../../Redux/store';
import s from './DateBlock.module.css'


type propsType = { // Types
    dayWeek: string
    dayDate: string
    id: string
    month: string
}
export const DateBlock: React.FC<propsType> = ({ dayWeek, dayDate, id, month }) => {

    const dispatch = useDispatch();
    const selectedDate = useSelector((state: AppState) => state.SubscribeReducer.selectedDate);
    const pressHandle = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => { // User selects Date
        dispatch(setSelectedDate({ id, dayWeek, dayDate, month }));
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
