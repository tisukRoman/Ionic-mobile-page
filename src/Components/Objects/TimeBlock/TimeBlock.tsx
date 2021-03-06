import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedTime } from '../../../Redux/Actions/SubscribeActions';
import { AppState } from '../../../Redux/store';
import s from './TimeBlock.module.css'


type propsType = { // Types
    time: string
    id: string
}
export const TimeBlock: React.FC<propsType> = ({ time, id }) => {

    const dispatch = useDispatch();
    const selectedTime: propsType | undefined = useSelector((state: AppState) => state.SubscribeReducer.selectedTime);
    const pressHadle = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => { // User selects time 
        dispatch(setSelectedTime({ time, id }))
    }

    //---------------/ IF SELECTED
    if (id === selectedTime?.id) {
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
