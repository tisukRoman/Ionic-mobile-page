import React from 'react'
import { PeoplePanel } from '../Components/Panels/PeoplePanel'
import { DatePanel } from '../Components/Panels/DatePanel'
import { TimePanel } from '../Components/Panels/TimePanel'
import { SubscribePanel } from '../Components/Panels/SubscribePanel'
import s from './Subscribe.module.css'


export const Subscribe = () => {

    const [slideIndex, setSlideIndex] = React.useState(0); // CURRENT SLIDE INDEX

    return (
        <div className={s.container}>
            <PeoplePanel setSlideIndex={setSlideIndex} />
            <DatePanel slideIndex={slideIndex} />
            <TimePanel slideIndex={slideIndex} />
            <SubscribePanel />
        </div>
    )
}
