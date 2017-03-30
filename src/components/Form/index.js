import React, { PropTypes } from 'react'
import './Form.scss'

const Form = ({ children }) => {
  return (
    <div className='form-block'>
      {children}
    </div>
  )
}

Form.propTypes = {
  children: PropTypes.any
}

export default Form
