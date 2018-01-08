let nextTodoId = 0
let nextLocationId = 0
export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}
export const addLocation = coords => {
  return {
    type:'ADD_LOCATION',
    id: nextLocationId ++,
    location
  }
}