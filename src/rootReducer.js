import {combineReducers} from 'redux'
import {ToggleReducer} from './reducer'
import {CounterReducer} from './CounterReducer'
import {moviesReducer} from './Movies/movieReducer'
export const rootReducer = combineReducers(
   { 
       ToggleReducer,
       CounterReducer,
       moviesReducer

   }
)
