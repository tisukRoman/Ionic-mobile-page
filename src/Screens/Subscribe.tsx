import React from 'react'
import { PeoplePanel } from '../Components/Panels/PeoplePanel'
import { DatePanel } from '../Components/Panels/DatePanel'
import { TimePanel } from '../Components/Panels/TimePanel'
import { SubscribePanel } from '../Components/Panels/SubscribePanel'
import s from './Subscribe.module.css'
import { useDispatch, useSelector } from 'react-redux'
import db from '../firebase'
import { setFetchedDate, setFetchedDoctor, setFetchedTime } from '../Redux/Actions/SubscribeActions'
import { globalState_t } from '../Redux/store'


export const Subscribe: React.FC = React.memo(() => {

    const [savedData, setSavedData] = React.useState<Array<any>>([]); // Here we have data from firebase DB
    const currentPage = useSelector((state: globalState_t) => state.SubscribeReducer.currentPage); // get slide index
    const dispatch = useDispatch();

    React.useEffect(() => { // Fetch data from firebase db and set into Redux State 
        const fetchSavedDate = async () => { // gets data from firebase
            const response = db.collection('consultInfo'); // gets our collection
            const data = await response.get(); // gets data from collection
            const arr: Array<any> = [];
            data.docs.forEach(item => {
                arr.push(item.data());
            });
            setSavedData(arr);
        }
        fetchSavedDate();
    }, []);

    React.useEffect(() => {
        if (savedData.length) {
            dispatch(setFetchedDoctor(savedData[0].doctorId));
        }
    }, [dispatch, savedData]);

    React.useEffect(() => {
        if (currentPage !== null) {
            dispatch(setFetchedDate(savedData[0].dateId));
            dispatch(setFetchedTime(savedData[0].timeId));
        }
    }, [dispatch, currentPage, savedData]);

    console.log(savedData[0], currentPage);

    if (currentPage === null) {
        return (
            <div className={s.container}>
                Loading...
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
