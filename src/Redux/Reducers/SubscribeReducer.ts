import { subStateType } from './SubscribeReducerTypes';
import { subConsts } from "../Constants/SubscribeConsts"
import { Subscribe_t } from '../Actions/SubscribeActionsTypes'

//------------------/ INITIAL STATE
const initialState: subStateType = {
    people: [{  ///////////////// people array
        id: 'cdjs13',
        name: 'Имя',
        consultDuration: '40', //minutes
        img: 'https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg',
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
        name: 'Елена Шпаковская',
        consultDuration: '50', //minutes
        img: 'https://avada.theme-fusion.com/wp-content/uploads/2019/07/person_sample_2.jpg',
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
    },
    {
        id: 'fed4rff',
        name: 'Роман Тищук',
        consultDuration: '5', //minutes
        img: 'https://github.com/tisukRoman/my-resume/blob/main/profile.jpg?raw=true',
        consultDates: [
            { id: 'fgbit7r9', dayWeek: 'Пт', dayDate: '1', month: 'март' },
            { id: 'y0jv9fmp', dayWeek: 'Сб', dayDate: '2', month: 'март' },
            { id: 't9hfdoivm', dayWeek: 'Пн', dayDate: '3', month: 'март' },
            { id: 't8h9jfd4m', dayWeek: 'Вт', dayDate: '4', month: 'март' },
            { id: 'freiih97f', dayWeek: 'Ср', dayDate: '6', month: 'март' },
            { id: '0568gkf;df', dayWeek: 'Чт', dayDate: '7', month: 'март' },
        ],
        consultSchedule: [
            { id: '4568gfyss', time: '12.00' },
            { id: 'rehf98h44', time: '13.00' },
            { id: '937gh87hf', time: '14.30' },
            { id: 'eu5gh9dri', time: '15.00' },
            { id: '94jyh89jd', time: '15.30' },
            { id: '97guifdls', time: '16.00' },
        ]
    },],
    selectedDate: { // date chosen by User
        id: '...',
        index: 0,
        dayWeek: '...',
        dayDate: '...',
        month: ''
    },
    selectedTime: { // time chosen by User
        id: '...',
        index: 0,
        time: '...'
    },
    currentPage: 0, // index of Ionic-Slider
    isLoading: false
}

//------------------/ REDUCER
export const SubscribeReducer = (state: subStateType = initialState, action: Subscribe_t): subStateType => {
    switch (action.type) {
        case subConsts.SET_SELECTED_DATE:
            return {
                ...JSON.parse(JSON.stringify(state)), // Deep copy
                selectedDate: {
                    id: action.payload.id,
                    index: findSavedItem(state.people[state.currentPage].consultDates, action.payload.id),
                    dayWeek: action.payload.dayWeek,
                    dayDate: action.payload.dayDate,
                    month: action.payload.month,
                }
            }
        case subConsts.SET_SELECTED_TIME:
            return {
                ...JSON.parse(JSON.stringify(state)),
                selectedTime: action.payload
            }
        case subConsts.CLEAR_SELECTED_DATA:
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
        case subConsts.SET_CURRENT_PAGE:
            return {
                ...JSON.parse(JSON.stringify(state)),
                currentPage: action.payload
            }
        case subConsts.SET_SAVED_PAGE_INDEX:
            return {
                ...JSON.parse(JSON.stringify(state)),
                currentPage: findSavedItem(state.people, action.id),
            }
        case subConsts.SET_SAVED_DATE:
            const dateObj = findSavedDate(state.people[state.currentPage].consultDates, action.id);
            return {
                ...JSON.parse(JSON.stringify(state)),
                selectedDate: {
                    id: dateObj.id,
                    index: findSavedItem(state.people[state.currentPage].consultDates, action.id),
                    dayWeek: dateObj.dayWeek,
                    dayDate: dateObj.dayDate,
                    month: dateObj.month,
                }
            }
        case subConsts.SET_SAVED_TIME:
            const timeObj = findSavedTime(state.people[state.currentPage].consultSchedule, action.id);
            return {
                ...JSON.parse(JSON.stringify(state)),
                selectedTime: {
                    id: timeObj.id,
                    index: findSavedItem(state.people[state.currentPage].consultSchedule, action.id),
                    time: timeObj.time,
                }
            }
        case subConsts.TOGGLE_LOADING:
            return {
                ...JSON.parse(JSON.stringify(state)),
                isLoading: action.payload
            }
        default:
            return state
    }
}


//------------------/ ADITIONAL FUNCTIONS
function findSavedItem(items: Array<any>, savedId: string) { // returns page index of doctor with this id
    for (let i = 0; i < items.length; i++) {
        if (items[i].id === savedId) return i;
    }
}
function findSavedDate(date: Array<any>, savedId: string) { // returns object of saved date
    for (let i = 0; i < date.length; i++) {
        if (date[i].id === savedId) return date[i];
    }
}
function findSavedTime(time: Array<any>, savedId: string) { // returns object of saved time
    for (let i = 0; i < time.length; i++) {
        if (time[i].id === savedId) return time[i];
    }
}