import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const Todo = () => (
  <div>
      <h1>Hello World</h1>
  </div>
)

export default withRouter(connect()(Todo))