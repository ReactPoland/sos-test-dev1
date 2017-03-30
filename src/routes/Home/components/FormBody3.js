import React, { PropTypes } from 'react'
import FormBody from 'components/Form/FormBody'
import okImage from '../assets/ok.png'

const FormBody3 = ({ backClick, nextClick, onDoneClick }) => {
  return (
    <FormBody
      backClick={backClick}
      nextClick={nextClick} >
      <div className='home-form-body' >
        <img className='home-done-img' src={okImage} />
        <a className='home-done-link' onClick={onDoneClick} href='#'>Go to dashboard</a>
      </div>
    </FormBody>
  )
}

FormBody3.propTypes = {
  backClick: PropTypes.func,
  nextClick: PropTypes.func,
  onDoneClick: PropTypes.func.isRequired
}

export default FormBody3
