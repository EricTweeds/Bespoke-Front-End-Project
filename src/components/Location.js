import React from 'react'
import PropTypes from 'prop-types'

const Location = ({ location }) => (
	<li>
		{location.city}, {location.country}
	</li>
)

Location.propTypes = {
  coords: PropTypes.shape({
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired
    }).isRequired, 
}

export default Location