import { combineReducers } from 'redux'
import {
  ADD_LOCATION,
  GET_WEATHER,
  RECEIVE_WEATHER,
  SELECT_LOCATION,
  WEATHER_FETCH_SUCCEEDED,
  WEATHER_FETCH_REQUEST,
  WEATHER_FETCH_FAILED,
  EVENT_FETCH_REQUEST,
  EVENT_FETCH_REQUEST_SUCCESS
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
  },
  action
  ) {
  switch(action.type) {
      case WEATHER_FETCH_REQUEST:
        return [...state, {
          isFetching: true,
          items: [],
          location: '',
          lastUpdated:'',
          id: 0
        }]
      case WEATHER_FETCH_SUCCEEDED:
        return [...state,
          {
            isFetching: false,
            items: action.response.weather,
            location: action.response.location,
            lastUpdated:action.response.receivedAt,
            id: action.response.id,
            invalid: false
          }
        ]
      case WEATHER_FETCH_FAILED:
        return [...state,
        {
          isFetching: false,
          invalid: true
        }]
      default:
        return state
  }
}

function events (state = {isFetching: false}, action) {
  switch(action.type) {
    case EVENT_FETCH_REQUEST:
      return(state, {
        isFetching: true,
        events: []
      })
    
    case EVENT_FETCH_REQUEST_SUCCESS:
      return(state,{
        isFetching: false,
        events: action.events
      })
    
    default:
      return state
  }
}

const defaultWeather = () => {
  isFetching: true;
  lastUpdated: undefined
}

function weatherByLocation(state = {}, action) {
  switch(action.type) {
    case GET_WEATHER:
    case RECEIVE_WEATHER:
      return [Object.assign({}, state, {
        [action.location]: weather(state[action.location], action) ? weather(state[action.location], action) : defaultWeather
      })]
    default:
      return state
  }
}

const rootReducer = combineReducers({
  weatherByLocation,
  selectedLocation,
  locations,
  weather,
  events
})

export default rootReducer