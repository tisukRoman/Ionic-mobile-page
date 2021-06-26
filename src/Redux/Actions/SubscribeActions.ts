import { setCurrentPage_t, setFetchedDoctor_t, toggleLoading_t } from './SubscribeActionsTypes';
import { subConsts } from "../Constants/SubscribeConsts"
import { clearSelectedData_t, saveDataToFB_t, setFetchedDate_t, setFetchedTime_t, setSelectedDate_t, setSelectedTime_t } from './SubscribeActionsTypes'
import { fetchSavedDate } from '../../API/API'
import { Dispatch } from 'redux';
import { ActionType } from './ActionType';
//--------------------/ SUBSCRIBE ACTIONS

// User chooses consult Date
export const setSelectedDate = (payload: setSelectedDate_t["payload"]): setSelectedDate_t => ({
    type: subConsts.SET_SELECTED_DATE,
    payload
})

// User chooses consult Time
export const setSelectedTime = (payload: setSelectedTime_t["payload"]): setSelectedTime_t => ({
    type: subConsts.SET_SELECTED_TIME,
    payload
})

// Must be called after scrolling 'people' array
export const clearSelectedData = (): clearSelectedData_t => ({
    type: subConsts.CLEAR_SELECTED_DATA
})

// User scrolls cards of doctors
export const setCurrentPage = (payload: number): setCurrentPage_t => ({
    type: subConsts.SET_CURRENT_PAGE,
    payload
})

// Save selected data on Firestore
export const saveDataToFB = (doctorId: string, dateId: string, timeId: string): saveDataToFB_t => ({
    type: subConsts.SAVE_DATA_ON_FB,
    doctorId, dateId, timeId
})

// Toggles Loading property showing or hiding preloader
export const toggleLoading = (payload: toggleLoading_t["payload"]): toggleLoading_t => ({
    type: subConsts.TOGGLE_LOADING,
    payload
})


// ------------// Functions below must get data from firebase
export const setFetchedDoctor = (id: string): setFetchedDoctor_t => ({
    type: subConsts.SET_SAVED_PAGE_INDEX,
    id
})
export const setFetchedDate = (id: string): setFetchedDate_t => ({
    type: subConsts.SET_SAVED_DATE,
    id
})
export const setFetchedTime = (id: string): setFetchedTime_t => ({
    type: subConsts.SET_SAVED_TIME,
    id
})


//-----------// Thunks
type dataType = {
    doctorId: string
    dateId: string
    timeId: string
}
export const getDataFromDb = () => async (dispatch: Dispatch<ActionType>) => {
    dispatch(toggleLoading(true));
    try {
        const data: dataType = await fetchSavedDate();
        const { doctorId, dateId, timeId } = data;
        dispatch(setFetchedDoctor(doctorId));
        setTimeout(() => {
            dispatch(setFetchedDate(dateId));
            dispatch(setFetchedTime(timeId));
        }, 0);
    } catch (e) {
        console.log(e.message)
    } finally {
        dispatch(toggleLoading(false));
    }
}