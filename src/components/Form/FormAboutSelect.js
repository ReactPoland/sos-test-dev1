import React, { PropTypes } from 'react'

const FormSelect = () => {
  return (
    <div className='form-block-step2-item' >
      <div
        className='form-block-birth-label' >
        Where did you hear about us?
      </div>
      <select className='form-block-about-select'>
        <option value='null' />
        <option value='val1'>option1</option>
        <option value='val2'>option2</option>
        <option value='val3'>option3</option>
      </select>
    </div>
  )
}

export default FormSelect
