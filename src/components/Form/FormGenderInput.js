import React, { PropTypes } from 'react'

const FormGender = ({ value, onChange, options, label }) => {
  const clickHanlder = (val) => () => onChange(val)

  return (
    <div className='form-block-step2-item'>
      {label && (
        <div className='form-block-birth-label' style={{ color: label.color }} >{label.text}</div>
      )}
      <div className='form-block-birth-container'>
        {options.map((optionItem, key) => {
          const classes = ['form-block-gend-but']
          if (optionItem === value) classes.push('form-block-gend-but-active')
          return (
            <button key={key} onClick={clickHanlder(optionItem)} className={classes.join(' ')}>{optionItem}</button>
          )
        })}
      </div>

    </div>
  )
}

FormGender.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  label: PropTypes.shape({
    text: PropTypes.string.isRequired,
    color: PropTypes.string
  })
}

FormGender.defaultProps = {
  label: {
    text: 'label',
    color: '#5c5e64'
  }
}

export default FormGender
