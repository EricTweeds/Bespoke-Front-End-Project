import React from 'react'
import { connect } from 'react-redux'
import { addLocation, fetchWeather } from '../actions'


let AddLocation = ({ dispatch }) => {
  let city
  let country

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!city.value.trim() || !country.value.trim()) {
            return
          }
          dispatch(addLocation({city:city.value, country:country.value}))
          dispatch(fetchWeather({city:city.value, country:country.value}))
          city.value = ''
          country.value = ''
        }}
      >
        <input
          ref={node => {
            city = node
          }}
        />
        <input
          ref={node => {
            country = node
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