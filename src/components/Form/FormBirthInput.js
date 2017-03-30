import React, { PropTypes } from 'react'

const FormBody = () => {
  return (
    <div className='form-block-step2-item form-block-paddTop25'>
      <div
        className='form-block-birth-label' >
        Date of birth
      </div>
      <div className='form-block-birth-container'>
        <input
          placeholder='DD'
          className='form-block-birth'
          type='text' />
        <input
          placeholder='MM'
          className='form-block-birth'
          type='text' />
        <input
          placeholder='YYYY'
          className='form-block-birth'
          type='text' />
      </div>

    </div>
  )
}

export default FormBody
