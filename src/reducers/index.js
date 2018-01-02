import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import weather from './weather'

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  weather
})

export default todoApp