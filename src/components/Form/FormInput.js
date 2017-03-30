import React, { PropTypes } from 'react'

const FormInput = ({ label, value, onChange, type }) => {
  return (
    <div className='form-block-input-wrap' >
      { label && (
        <div
          className='form-block-input-label'
          style={{ color: label.color }}>{label.text}</div>
      )}
      <input
        type={type}
        onChange={onChange}
        value={value}
        className='form-block-input' />
    </div>
  )
}

FormInput.propTypes = {
  label: PropTypes.shape({
    text: PropTypes.string.isRequired,
    color: PropTypes.string
  }),
  value: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string
}

FormInput.defaultProps = {
  label: {
    text: 'label',
    color: '#5c5e64'
  },
  type: 'text'
}

export default FormInput
