import { sub } from "../Constants/SubscribeConsts"

export const setSelectedDate = payload => ({ // User chooses consult Date
    type: sub.SET_SELECTED_DATE,
    payload
})

export const setSelectedTime = payload => ({ // User chooses consult Time
    type: sub.SET_SELECTED_TIME,
    payload
})

export const clearSelectedData = () => ({ // Must be called after scrolling 'people' array
    type: sub.CLEAR_SELECTED_DATA
})

export const setCurrentPage = payload => ({ // User scrolls cards of doctors
    type: sub.SETS_CURRENT_PAGE,
    payload
})


// ------------// Functions below must set data from firebase
export const setFetchedDoctor = (id) => ({
    type: sub.SETS_CURRENT_PAGE,
    id
})
export const setFetchedDate = (id) => ({
    type: sub.SETS_CURRENT_PAGE,
    id
})
export const setFetchedTime = (id) => ({
    type: sub.SETS_CURRENT_PAGE,
    id
})