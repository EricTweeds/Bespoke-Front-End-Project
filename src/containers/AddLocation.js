import React from 'react'
import { connect } from 'react-redux'
import { addLocation, fetchWeather } from '../actions'


let AddLocation = ({ dispatch }) => {
  let lat
  let long

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!lat.value.trim() || !long.value.trim()) {
            return
          }
          dispatch(addLocation({lat:lat.value, long:long.value}))
          dispatch(fetchWeather({lat:lat.value, long:long.value}))
          lat.value = ''
          long.value = ''
        }}
      >
        <input
          ref={node => {
            lat = node
          }}
        />
        <input
          ref={node => {
            long = node
          }}
        />
        <button type="submit">
          Add Location
        </button>
      </form>
    </div>
  )
}
AddLocation = connect()(AddLocation)

export default AddLocation