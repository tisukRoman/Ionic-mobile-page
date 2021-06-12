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