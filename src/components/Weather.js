import React from 'react'
import PropTypes from 'prop-types'

const Weather = ({json}) => (
	<li>
		{json.items}
	</li>
)

export default Location