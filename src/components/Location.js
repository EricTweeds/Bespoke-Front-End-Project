import React from 'react'
import PropTypes from 'prop-types'

const Location = ({ coords }) => (
	<li>
		{coords.lat}, {coords.long}
	</li>
)

Location.propTypes = {
  coords: PropTypes.shape({
      lat: PropTypes.string.isRequired,
      long: PropTypes.string.isRequired
    }).isRequired, 
}

export default Location