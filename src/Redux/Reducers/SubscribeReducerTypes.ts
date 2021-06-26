
export interface subStateType { // SUBSCRIBE STATE INTERFACE 
    people: Array<{
        id: string
        name: string
        consultDuration: string
        img: string
        consultDates: Array<{ id: string, dayWeek: string, dayDate: string, month: string }>
        consultSchedule: Array<{ id: string, time: string }>
    }>
    selectedDate: { id: string, index: number, dayWeek: string, dayDate: string, month: string }
    selectedTime: { id: string, index: number, time: string }
    currentPage: number
    isLoading: boolean
}


