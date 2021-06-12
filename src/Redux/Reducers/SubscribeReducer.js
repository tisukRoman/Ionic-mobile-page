import { sub } from "../Constants/SubscribeConsts"
import shortid from "shortid"

const initialState = {
    people: [{  ///////////////// people array
        id: shortid.generate(),
        name: 'Имя',
        consultDuration: '40', //minutes
        img: 'http://simpleicon.com/wp-content/uploads/user-5.png',
        consultDates: [
            { id: shortid.generate(), dayWeek: 'Ср', dayDate: '26', month: 'май' },
            { id: shortid.generate(), dayWeek: 'Чт', dayDate: '27', month: 'май' },
            { id: shortid.generate(), dayWeek: 'Пт', dayDate: '28', month: 'май' },
            { id: shortid.generate(), dayWeek: 'Сб', dayDate: '29', month: 'май' },
            { id: shortid.generate(), dayWeek: 'Пн', dayDate: '30', month: 'май' },
            { id: shortid.generate(), dayWeek: 'Вт', dayDate: '31', month: 'май' },
        ],
        consultSchedule: [
            { id: shortid.generate(), time: '18.00' },
            { id: shortid.generate(), time: '18.30' },
            { id: shortid.generate(), time: '19.00' },
            { id: shortid.generate(), time: '19.30' },
            { id: shortid.generate(), time: '20.00' },
            { id: shortid.generate(), time: '20.30' },
        ]
    },
    {
        id: shortid.generate(),
        name: 'Елена Шимановская',
        consultDuration: '50', //minutes
        img: 'https://www.vhv.rs/dpng/d/421-4212919_female-user-female-user-icon-png-transparent-png.png',
        consultDates: [
            { id: shortid.generate(), dayWeek: 'Ср', dayDate: '1', month: 'июнь' },
            { id: shortid.generate(), dayWeek: 'Чт', dayDate: '2', month: 'июнь' },
            { id: shortid.generate(), dayWeek: 'Пт', dayDate: '3', month: 'июнь' },
            { id: shortid.generate(), dayWeek: 'Сб', dayDate: '4', month: 'июнь' },
            { id: shortid.generate(), dayWeek: 'Пн', dayDate: '6', month: 'июнь' },
            { id: shortid.generate(), dayWeek: 'Вт', dayDate: '7', month: 'июнь' },
        ],
        consultSchedule: [
            { id: shortid.generate(), time: '09.00' },
            { id: shortid.generate(), time: '10.00' },
            { id: shortid.generate(), time: '10.30' },
            { id: shortid.generate(), time: '11.00' },
            { id: shortid.generate(), time: '11.30' },
            { id: shortid.generate(), time: '12.30' },
        ]
    }],
    selectedDate: { // date chosen by User
        id: '...',
        dayWeek: '...',
        dayDate: '...',
        month: ''
    },
    selectedTime: { // time chosen by User
        id: '...',
        time: '...'
    }
}

export const SubscribeReducer = (state = initialState, action) => {
    switch (action.type) {
        case sub.SET_SELECTED_DATE:
            return {
                ...state,
                selectedDate: action.payload
            }
        case sub.SET_SELECTED_TIME:
            return {
                ...state,
                selectedTime: action.payload
            }
        case sub.CLEAR_SELECTED_DATA:
            return {
                ...state,
                selectedDate: { // date chosen by User
                    id: '...',
                    dayWeek: '...',
                    dayDate: '...',
                    month: ''
                },
                selectedTime: { // time chosen by User
                    id: '...',
                    time: '...'
                }
            }
        default:
            return state
    }
}

