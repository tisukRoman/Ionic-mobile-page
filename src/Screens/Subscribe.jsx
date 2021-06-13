import React from 'react'
import { IonSpinner } from '@ionic/react'
import { PeoplePanel } from '../Components/Panels/PeoplePanel'
import { DatePanel } from '../Components/Panels/DatePanel'
import { TimePanel } from '../Components/Panels/TimePanel'
import { SubscribePanel } from '../Components/Panels/SubscribePanel'
import s from './Subscribe.module.css'
import { useDispatch, useSelector } from 'react-redux'
import db from '../firebase'
import { setFetchedDate, setFetchedDoctor, setFetchedTime } from '../Redux/Actions/SubscribeActions'

export const Subscribe = () => {

    const [savedData, setSavedData] = React.useState([]); // Here we have data from firebase DB
    const [loading, setLoading] = React.useState(false); // Loader State
    const currentPage = useSelector(state => state.SubscribeReducer.currentPage); // get slide index
    const dispatch = useDispatch();

    const fetchSavedDate = async () => { // gets data from firebase
        setLoading(true); // loader On
        const response = db.collection('consultInfo'); // gets our collection
        const data = await response.get(); // gets data from collection
        data.docs.forEach(item => {
            setSavedData([...savedData, item.data()]) // sets data in local State
        })
        setLoading(false); // loader Off
    }

    React.useEffect(() => { // Fetch data from firebase db and set into Redux State 
        fetchSavedDate(); 
        if (savedData.length) {
            dispatch(setFetchedDoctor(savedData[0].doctorId));
            dispatch(setFetchedDate(savedData[0].dateId));
            dispatch(setFetchedTime(savedData[0].timeId));
        }
    }, []);

    console.log(savedData[0], currentPage);

    if (loading) {
        return <IonSpinner className={s.preloader}/>
    }
    return (
        <div className={s.container}>
            <PeoplePanel />
            <DatePanel currentPage={currentPage} />
            <TimePanel currentPage={currentPage} />
            <SubscribePanel />
        </div>
    )
}
