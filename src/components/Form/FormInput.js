import React, { PropTypes } from 'react'

const FormInput = ({ label }) => {
  return (
    <div className='form-block-input-wrap' >
      { label && (
        <div
          className='form-block-input-label'
          style={{ color: label.color }}>{label.text}</div>
      )}
      <input
        className='form-block-input'
        type='string' />
    </div>
  )
}

FormInput.propTypes = {
  label: PropTypes.shape({
    text: PropTypes.string.isRequired,
    color: PropTypes.string
  })
}

FormInput.defaultProps = {
  label: {
    text: 'label',
    color: '#5c5e64'
  }
}

export default FormInput
