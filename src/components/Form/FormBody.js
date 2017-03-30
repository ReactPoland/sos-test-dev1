import React, { PropTypes } from 'react'
import FormNav from './FormNav'

const FormBody = ({ children, backClick, nextClick }) => {
  const withNav = backClick || nextClick
  const formNavHeight = 58
  let formHeight = 350

  if (!withNav) formHeight += formNavHeight

  return (
    <div>
      <div className='form-block-body' style={{ height: formHeight }} >
        {children}
      </div>
      { withNav && (
        <FormNav height={formNavHeight} backClick={backClick} nextClick={nextClick} />
      ) }
    </div>
  )
}

FormBody.propTypes = {
  children: PropTypes.any,
  backClick: PropTypes.func,
  nextClick: PropTypes.func
}

export default FormBody
