import { moviesReducer } from './moviesImageStore/reducers'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  moviesReducer,
})

export default rootReducer
