import { sub } from "../Constants/SubscribeConsts"

const initialState = {
    people: [{  ///////////////// people array
        id: 'cdjs13',
        name: 'Имя',
        consultDuration: '40', //minutes
        img: 'http://simpleicon.com/wp-content/uploads/user-5.png',
        consultDates: [
            { id: 'e9vh9e', dayWeek: 'Ср', dayDate: '26', month: 'май' },
            { id: 'wre434', dayWeek: 'Чт', dayDate: '27', month: 'май' },
            { id: 'rfe4fe', dayWeek: 'Пт', dayDate: '28', month: 'май' },
            { id: '35tgfd', dayWeek: 'Сб', dayDate: '29', month: 'май' },
            { id: '6hyggf', dayWeek: 'Пн', dayDate: '30', month: 'май' },
            { id: '5jgfjk', dayWeek: 'Вт', dayDate: '31', month: 'май' },
        ],
        consultSchedule: [
            { id: '4hfdbf', time: '18.00' },
            { id: 'regfd5', time: '18.30' },
            { id: 'jngh45', time: '19.00' },
            { id: 'vyrfv5', time: '19.30' },
            { id: '5ujfgv', time: '20.00' },
            { id: '5ubv_x', time: '20.30' },
        ]
    },
    {
        id: 'cdjs12',
        name: 'Елена Шимановская',
        consultDuration: '50', //minutes
        img: 'https://www.vhv.rs/dpng/d/421-4212919_female-user-female-user-icon-png-transparent-png.png',
        consultDates: [
            { id: 'siubds1', dayWeek: 'Ср', dayDate: '1', month: 'июнь' },
            { id: 'fbgvfrf', dayWeek: 'Чт', dayDate: '2', month: 'июнь' },
            { id: '645gutj', dayWeek: 'Пт', dayDate: '3', month: 'июнь' },
            { id: '892c3r9', dayWeek: 'Сб', dayDate: '4', month: 'июнь' },
            { id: '5oi4n9v', dayWeek: 'Пн', dayDate: '6', month: 'июнь' },
            { id: '4hgtv98u', dayWeek: 'Вт', dayDate: '7', month: 'июнь' },
        ],
        consultSchedule: [
            { id: '9th9dfo', time: '09.00' },
            { id: 't9vhd9i', time: '10.00' },
            { id: '060llg_f', time: '10.30' },
            { id: '39rfdip', time: '11.00' },
            { id: '3dmpok9c', time: '11.30' },
            { id: '76gucldo', time: '01.00' },
        ]
    }],
    currentPage: null, // index of Ionic-Slider
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
        case sub.SET_CURRENT_PAGE:
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
        if (people[i].id === savedId) {
            return i;
        }
    }
}

function findSavedDate(date, savedId) { // returns object of saved date
    for (let i = 0; i < date.length; i++) {
        if (date[i].id === savedId) return date[i];
    }
}

function findSavedTime(time, savedId) { // returns object of saved time
    for (let i = 0; i < time.length; i++) {
        if (time[i].id === savedId) return time[i];
    }
}