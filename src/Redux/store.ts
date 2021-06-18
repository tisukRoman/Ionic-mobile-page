import { createStore, combineReducers } from 'redux'
import { SubscribeReducer } from './Reducers/SubscribeReducer'

const root = combineReducers({
    SubscribeReducer
})

type rootType = typeof root
export type globalState_t = ReturnType<rootType>

export const store = createStore(root)