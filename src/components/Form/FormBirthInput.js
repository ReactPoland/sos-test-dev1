import React, { PropTypes } from 'react'

const FormBody = ({ values, onChange, label }) => {

  return (
    <div className='form-block-step2-item form-block-paddTop25'>
      { label && (
        <div
          className='form-block-birth-label' style={{ color: label.color }} >{label.text}</div>
      ) }
      <div className='form-block-birth-container'>
        <input
          onChange={onChange('day')}
          value={values.day}
          placeholder='DD'
          className='form-block-birth'
          type='text' />
        <input
          onChange={onChange('month')}
          value={values.month}
          placeholder='MM'
          className='form-block-birth'
          type='text' />
        <input
          onChange={onChange('year')}
          value={values.year}
          placeholder='YYYY'
          className='form-block-birth'
          type='text' />
      </div>

    </div>
  )
}

FormBody.propTypes = {
  label: PropTypes.shape({
    text: PropTypes.string.isRequired,
    color: PropTypes.string
  }),
  values: PropTypes.shape({
    day: PropTypes.string.isRequired,
    month: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired
  }).isRequired,
  onChange: PropTypes.func.isRequired
}

FormBody.defaultProps = {
  label: {
    text: 'label',
    color: '#5c5e64'
  }
}

export default FormBody
