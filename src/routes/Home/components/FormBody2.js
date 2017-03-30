import React, { PropTypes } from 'react'
import FormBirthInput from 'components/Form/FormBirthInput'
import FormGenderInput from 'components/Form/FormGenderInput'
import FormAboutSelect from 'components/Form/FormAboutSelect'
import FormBody from 'components/Form/FormBody'

const FormBody2 = ({ backClick, nextClick }) => {
  return (
    <FormBody
      backClick={backClick}
      nextClick={nextClick} >
      <div className='home-form-body' >
        <FormBirthInput />
        <FormGenderInput />
        <FormAboutSelect />
      </div>
    </FormBody>
  )
}

FormBody2.propTypes = {
  backClick: PropTypes.func,
  nextClick: PropTypes.func
}

export default FormBody2
