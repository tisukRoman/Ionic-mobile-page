import { subConsts } from "../Constants/SubscribeConsts"

// TYPESCRIPT //
//------------------/ SUBSCRIBE ACTION TYPES

export interface setSelectedDate_t { // set Date
    type: subConsts.SET_SELECTED_DATE
    payload: { id: string, dayWeek: string, dayDate: string, month: string }
}

export interface setSelectedTime_t { // set Time
    type: subConsts.SET_SELECTED_TIME
    payload: { id: string, time: string }
}

export interface clearSelectedData_t { // clear Data
    type: subConsts.CLEAR_SELECTED_DATA
}

export interface setCurrentPage_t { // set current Page
    type: subConsts.SET_CURRENT_PAGE
    payload: number
}

export interface saveDataToFB_t { // save Data to 'Firestore' DB
    type: subConsts.SAVE_DATA_ON_FB
    doctorId: string
    dateId: string
    timeId: string
}

export interface setFetchedDoctor_t { // set Doctor from 'Firestore'
    type: subConsts.SET_SAVED_PAGE
    id: string
}

export interface setFetchedDate_t { //  set Date from 'Firestore'
    type: subConsts.SET_SAVED_DATE
    id: string
}

export interface setFetchedTime_t { // set Time from 'Firestore'
    type: subConsts.SET_SAVED_TIME
    id: string
}

export interface toggleLoading_t {
    type: subConsts.TOGGLE_LOADING
    payload: boolean
}


// General action type

export type Subscribe_t = setSelectedDate_t |
    setSelectedTime_t | clearSelectedData_t |
    setCurrentPage_t | saveDataToFB_t |
    setFetchedDoctor_t | setFetchedDate_t |
    setFetchedTime_t | toggleLoading_t