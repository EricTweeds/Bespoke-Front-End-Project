import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addLocation, weatherRequest } from '../actions'
import { bindActionCreators } from 'redux';

const inputStyle = {
  margin: '10px'
}
const buttonStyle = {
  margin: '10px',
  borderRadius: '100%',
  padding: '10px'
}
class AddLocation extends Component {
  render() {
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
            this.props.addLocation({city:city.value, country:country.value})
            this.props.weatherRequest({city:city.value, country:country.value})
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
}

export const mapDispatchToProps = dispatch => ({
  weatherRequest: bindActionCreators(weatherRequest, dispatch),
  addLocation: bindActionCreators(addLocation, dispatch)
});

export default connect(
  undefined,
  mapDispatchToProps
)(AddLocation)