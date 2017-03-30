import React, { PropTypes } from 'react'

const FormNav = ({ nextClick, backClick, height }) => {
  return (
    <div className='form-block-nav' style={{ height }} >
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
  backClick: PropTypes.func,
  height: PropTypes.number.isRequired
}

export default FormNav
