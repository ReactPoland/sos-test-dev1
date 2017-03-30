import React, { PropTypes } from 'react'

const FormGender = () => {
  return (
    <div className='form-block-step2-item'>
      <div
        className='form-block-birth-label' >
        Gender
      </div>
      <div className='form-block-birth-container'>
        <button className='form-block-gend-but form-block-gend-but-active'>male</button>
        <button className='form-block-gend-but'>female</button>
        <button className='form-block-gend-but'>unspecified</button>
      </div>

    </div>
  )
}

export default FormGender
