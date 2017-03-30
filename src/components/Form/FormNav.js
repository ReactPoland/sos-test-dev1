import React, { PropTypes } from 'react'

const FormNav = ({ nextClick, backClick }) => {
  return (
    <div className='form-block-nav' >
      {backClick && (
        <a
          className='form-block-nav-link form-block-nav-back'
          href='#'
          onClick={backClick} >Back</a>
      )}
      {nextClick && (
        <a
          className='form-block-nav-link'
          href='#'
          onClick={nextClick} >Next</a>
      )}
    </div>
  )
}

FormNav.propTypes = {
  nextClick: PropTypes.func,
  backClick: PropTypes.func
}

export default FormNav
