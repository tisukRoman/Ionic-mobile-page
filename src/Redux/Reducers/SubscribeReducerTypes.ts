
export interface subStateType { // SUBSCRIBE STATE INTERFACE 
    people: Array<{
        id: string
        name: string
        consultDuration: string
        img: string
        consultDates: Array<{ id: string, dayWeek: string, dayDate: string, month: string }>
        consultSchedule: Array<{ id: string, time: string }>
    }>
    selectedDate: { id: string, dayWeek: string, dayDate: string, month: string }
    selectedTime: { id: string, time: string }
    currentPage: number | null
}


