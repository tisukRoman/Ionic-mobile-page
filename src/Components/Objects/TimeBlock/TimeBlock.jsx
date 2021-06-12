import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedTime } from '../../../Redux/Actions/SubscribeActions';
import s from './TimeBlock.module.css'

export const TimeBlock = ({ time, id }) => {

    const dispatch = useDispatch();
    const selectedTime = useSelector(state => state.SubscribeReducer.selectedTime);

    const pressHadle = () => {
        dispatch(setSelectedTime({ time, id })) // SET INTO SELECTED
    }

    //---------------/ IF SELECTED
    if (id === selectedTime.id) { 
        return <>
            <div className={s.timeBlockActive}>
                {time}
            </div>
        </>
    }
    //---------------/ IF NOT SELECTED
    return <> 
        <div className={s.timeBlock} onClick={pressHadle}>
            {time}
        </div>
    </>
}
