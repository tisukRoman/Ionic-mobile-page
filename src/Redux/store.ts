import { createStore, combineReducers, applyMiddleware } from 'redux'
import { SubscribeReducer } from './Reducers/SubscribeReducer'
import thunk, { ThunkMiddleware } from 'redux-thunk'
import { ActionType } from './Actions/ActionType'

const rootReducer = combineReducers({
    SubscribeReducer
})

export type AppState = ReturnType<typeof rootReducer> // AppState
type Thunk = ThunkMiddleware<AppState, ActionType>;

export const store = createStore(rootReducer, applyMiddleware(thunk as Thunk));