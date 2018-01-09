import { combineReducers } from 'redux'
import {
  ADD_LOCATION,
  GET_WEATHER,
  RECEIVE_WEATHER,
  SELECT_LOCATION
} from './actions'

function locations(state = [], action) {
  switch (action.type) {
    case ADD_LOCATION:
      return [
        ...state,
        {
          location: action.location,
        }
      ]
    default:
      return state
  }
}

function selectedLocation(state= {}, action) {
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
    //items: []
  },
  action
  ) {
  switch(action.type) {
      case GET_WEATHER:
        return [...state, {
          isFetching: true,
          items: [],
          location: '',
          lastUpdated:'',
          id: 0
        }]
      case RECEIVE_WEATHER:
        return [...state,
          {
            isFetching: false,
            items: action.data,
            location: action.location,
            lastUpdated:action.receivedAt,
            id: action.id
          }
        ]
      default:
        return state
  }
}
function weatherByLocation(state = {}, action) {
  switch(action.type) {
    case GET_WEATHER:
    case RECEIVE_WEATHER:
      return [Object.assign({}, state, {
        [action.location]: weather(state[action.location], action)
      })]
    default:
      return state
  }
}

const rootReducer = combineReducers({
  weatherByLocation,
  selectedLocation,
  locations,
  weather
})

export default rootReducer