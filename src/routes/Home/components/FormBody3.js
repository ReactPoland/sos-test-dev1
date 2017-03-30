import React, { PropTypes } from 'react'
import FormInput from 'components/Form/FormInput'
import FormBody from 'components/Form/FormBody'

const FormBody3 = ({ backClick, nextClick }) => {
  return (
    <FormBody
      backClick={backClick}
      nextClick={nextClick} >
      <div style={{ width: '100%' }} >
        <FormInput label={{ text: 'Email' }} />
        <FormInput label={{ text: 'Password' }} />
        <FormInput label={{ text: 'Confirm password' }} />
      </div>
    </FormBody>
  )
}

FormBody3.propTypes = {
  backClick: PropTypes.func,
  nextClick: PropTypes.func
}

export default FormBody3
