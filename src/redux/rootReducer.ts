import { moviesReducer } from './homeImageStore/reducers'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  moviesReducer,
})

export default rootReducer
