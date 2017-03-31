import React, { PropTypes } from 'react'

const FormSelect = ({ onChange, value, label }) => {
  const onChangeHandler = (ev) => onChange(ev.target.value)
  const selectClickHandler = (ev) => {
    ev.preventDefault()
    console.log(ev.target)
  }

  return (
    <div className='form-block-step2-item' >
      {label && (
        <div className='form-block-birth-label' style={{ color: label.color }} >{label.text}</div>
      )}
      <div className='form-block-about-select-wrap' >
        <i className='material-icons form-block-about-select-ic-arrow'
          onClick={selectClickHandler} >keyboard_arrow_down</i>
        <select value={value} onChange={onChangeHandler} className='form-block-about-select'>
          <option value='null' />
          <option value='val1'>option1</option>
          <option value='val2'>option2</option>
          <option value='val3'>option3</option>
        </select>
      </div>

    </div>
  )
}

FormSelect.propTypes = {
  label: PropTypes.shape({
    text: PropTypes.string.isRequired,
    color: PropTypes.string
  }),
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

FormSelect.defaultProps = {
  label: {
    text: 'label',
    color: '#5c5e64'
  }
}

export default FormSelect
