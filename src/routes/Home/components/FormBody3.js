import React, { PropTypes } from 'react'
import FormBody from 'components/Form/FormBody'
import okImage from '../assets/ok.png'

const FormBody3 = ({ onDoneClick }) => {
  return (
    <FormBody >
      <div className='home-form-body' >
        <img className='home-done-img' src={okImage} />
        <a className='home-done-link' onClick={onDoneClick} href='#'>Go to Dashboard
            <i className='material-icons home-done-link-ic'>arrow_forward</i>
        </a>
      </div>
    </FormBody>
  )
}

FormBody3.propTypes = {
  onDoneClick: PropTypes.func.isRequired
}

export default FormBody3
