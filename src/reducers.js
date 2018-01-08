import { combineReducers } from 'redux'
import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters,
  ADD_LOCATION,
  GET_WEATHER,
  RECEIVE_WEATHER
} from './actions'
const { SHOW_ALL } = VisibilityFilters

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    default:
      return state
  }
}

function locations(state = [], action) {
  switch (action.type) {
    case ADD_LOCATION:
      return [
        ...state,
        {
          coords: action.coords,
          id: action.id
        }
      ]
    default:
      return state
  }
}
function weather(
  state = {
    isFetching: false,
    items: []
  },
  action
  ) {
  switch(action.type) {
      case GET_WEATHER:
        return Object.assign({}, state, {isFetching: true})
      case RECEIVE_WEATHER:
        return Object.assign({}, state, {
          isFetching: false,
          items: action.data,
          lastUpdated:action.receivedAt,
          id: action.id
        })
      default:
      return state
  }
}
function weatherByLocation(state = {}, action) {
  switch(action.type) {
    case GET_WEATHER:
    case RECEIVE_WEATHER:
      return Object.assign({}, state, {
        [action.coords]: weather(state[action.coords], action)
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  visibilityFilter,
  todos,
  locations,
  weather,
  weatherByLocation
})

export default rootReducer
/*
const todoApp = combineReducers({
  visibilityFilter,
  todos,
  locations,
  weather,
  weatherByLocation
})

export default todoApp*/