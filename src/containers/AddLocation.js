import React from 'react'
import { connect } from 'react-redux'
import { addLocation, fetchWeather } from '../actions'

const inputStyle = {
  margin: '10px'
}
const buttonStyle = {
  margin: '10px'
}
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
        <input placeholder = "City" style = {inputStyle}
          ref={node => {
            city = node
          }}
        />
        <input placeholder = "Country" style = {inputStyle}
          ref={node => {
            country = node
          }}
        />
        <button type="submit" style = {buttonStyle}>
          Add Location
        </button>
      </form>
    </div>
  )
}
AddLocation = connect()(AddLocation)

export default AddLocation