const weather = (
  state = {
    isFetching: false,
    items: []
  },
  action
  ) => {
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

export default weathers