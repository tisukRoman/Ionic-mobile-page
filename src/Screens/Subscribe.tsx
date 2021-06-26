import React from 'react'
import { PeoplePanel } from '../Components/Panels/PeoplePanel'
import { DatePanel } from '../Components/Panels/DatePanel'
import { TimePanel } from '../Components/Panels/TimePanel'
import { SubscribePanel } from '../Components/Panels/SubscribePanel'
import s from './Subscribe.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { getDataFromDb } from '../Redux/Actions/SubscribeActions'
import { AppState } from '../Redux/store'
import { IonSpinner } from '@ionic/react'

export const Subscribe: React.FC = React.memo(() => {

    const currentPage = useSelector((state: AppState) => state.SubscribeReducer.currentPage); // get slide index
    const isLoading = useSelector((state: AppState) => state.SubscribeReducer.isLoading); // loading info
    const dispatch = useDispatch();

    React.useEffect(() => {  
        dispatch(getDataFromDb()); // Fetch data from firebase db and set into Redux State
    }, [dispatch]);


    if (isLoading) {
        return (
            <div className={s.containerLoader}>
                <div><IonSpinner className={s.loader} /></div>
            </div>
        )
    }
    return (
        <div className={s.container}>
            <PeoplePanel currentPage={currentPage} />
            <DatePanel currentPage={currentPage} />
            <TimePanel currentPage={currentPage} />
            <SubscribePanel currentPage={currentPage} />
        </div>
    )
})

