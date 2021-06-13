import { sub } from "../Constants/SubscribeConsts"
import shortid from "shortid"

const initialState = {
    people: [{  ///////////////// people array
        id: '1fe898',
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
        id: '24f9jds',
        name: 'Елена Шимановская',
        consultDuration: '50', //minutes
        img: 'https://www.vhv.rs/dpng/d/421-4212919_female-user-female-user-icon-png-transparent-png.png',
        consultDates: [
            { id: shortid.generate(), dayWeek: 'Ср', dayDate: '1', month: 'июнь' },
            { id: shortid.generate(), dayWeek: 'Чт', dayDate: '2', month: 'июнь' },
            { id: 'siubds1', dayWeek: 'Пт', dayDate: '3', month: 'июнь' },
            { id: shortid.generate(), dayWeek: 'Сб', dayDate: '4', month: 'июнь' },
            { id: shortid.generate(), dayWeek: 'Пн', dayDate: '6', month: 'июнь' },
            { id: shortid.generate(), dayWeek: 'Вт', dayDate: '7', month: 'июнь' },
        ],
        consultSchedule: [
            { id: shortid.generate(), time: '09.00' },
            { id: shortid.generate(), time: '10.00' },
            { id: '7b8cd9', time: '10.30' },
            { id: shortid.generate(), time: '11.00' },
            { id: shortid.generate(), time: '11.30' },
            { id: shortid.generate(), time: '01.00' },
        ]
    }],
    currentPage: 0, // index of Ionic-Slider
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
                ...JSON.parse(JSON.stringify(state)), // Deep copy
                selectedDate: action.payload
            }
        case sub.SET_SELECTED_TIME:
            return {
                ...JSON.parse(JSON.stringify(state)),
                selectedTime: action.payload
            }
        case sub.CLEAR_SELECTED_DATA:
            return {
                ...JSON.parse(JSON.stringify(state)),
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
        case sub.SETS_CURRENT_PAGE:
            return {
                ...JSON.parse(JSON.stringify(state)),
                currentPage: action.payload
            }
        case sub.SET_SAVED_PAGE:
            return {
                ...JSON.parse(JSON.stringify(state)),
                currentPage: findSavedPage(state.people, action.id),
            }
        case sub.SET_SAVED_DATE:
            return {
                ...JSON.parse(JSON.stringify(state)),
                selectedDate: findSavedDate(state.people[state.currentPage].consultDates, action.id)
            }
        case sub.SET_SAVED_TIME:
            return {
                ...JSON.parse(JSON.stringify(state)),
                selectedTime: findSavedTime(state.people[state.currentPage].consultSchedule, action.id)
            }
        default:
            return state
    }
}

//------------------/ ADITIONAL FUNCTIONS

function findSavedPage(people, savedId) { // returns page of doctor with this id
    for (let i = 0; i < people.length; i++) {
        if (people[i].id === savedId) return i;
    }
}

function findSavedDate(date, savedId) { // returns object of saved date
    for (let i = 0; i < date.length; i++) {
        if (date[i].id === savedId) return date[i];
    }
}

function findSavedTime(time, savedId){ // returns object of saved time
    for (let i = 0; i < time.length; i++) {
        if (time[i].id === savedId) return time[i];
    }
}