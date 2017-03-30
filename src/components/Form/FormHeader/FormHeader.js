import React, { PropTypes } from 'react'
import './FormHeader.scss'

const FormHeader = ({ text }) => {
  return (
    <div className='form-header'>{text}</div>
  )
}

FormHeader.propTypes = {
  text: PropTypes.string.isRequired
}

export default FormHeader
