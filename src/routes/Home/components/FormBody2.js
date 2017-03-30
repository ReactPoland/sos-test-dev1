import React, { PropTypes } from 'react'
import FormInput from 'components/Form/FormInput'
import FormBody from 'components/Form/FormBody'

const FormBody2 = ({ backClick, nextClick }) => {
  return (
    <FormBody
      backClick={backClick}
      nextClick={nextClick} >
      <div className='home-form-body' >
        <FormInput label={{ text: 'Email' }} />
        <FormInput label={{ text: 'Password' }} />
        <FormInput label={{ text: 'Confirm password' }} />
      </div>
    </FormBody>
  )
}

FormBody2.propTypes = {
  backClick: PropTypes.func,
  nextClick: PropTypes.func
}

export default FormBody2
