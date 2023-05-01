import { homeImageReducer } from './homeImageStore/reducers'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  homeImageReducer,
})

export default rootReducer
