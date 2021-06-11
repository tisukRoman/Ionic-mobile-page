import React from 'react'
import { PeoplePanel } from '../Components/Panels/PeoplePanel'
import { DatePanel } from '../Components/Panels/DatePanel'
import { TimePanel } from '../Components/Panels/TimePanel'
import { SubscribePanel } from '../Components/Panels/SubscribePanel'
import s from './Subscribe.module.css'


export const Subscribe = () => {
    return (
        <div className={s.container}>
            <PeoplePanel />
            <DatePanel />
            <TimePanel />
            <SubscribePanel />
        </div>
    )
}
