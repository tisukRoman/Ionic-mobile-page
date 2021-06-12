import { createStore, combineReducers } from 'redux'
import { SubscribeReducer } from './Reducers/SubscribeReducer'

const root = combineReducers({
    SubscribeReducer
})

export const store = createStore(root);