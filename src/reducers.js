import { combineReducers } from 'redux'
import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters,
  ADD_LOCATION,
  GET_WEATHER,
  RECEIVE_WEATHER,
  SELECT_LOCATION
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
          location: action.location,
          id: action.id
        }
      ]
    default:
      return state
  }
}

function selectedLocation(state= {city:'Toronto', country:'ca'}, action) {
  switch(action.type) {
    case SELECT_LOCATION:
      return action.location
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
        [action.location]: weather(state[action.location], action)
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
  weatherByLocation,
  selectedLocation
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