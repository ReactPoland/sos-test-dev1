import React, { PropTypes } from 'react'
import FormBirthInput from 'components/Form/FormBirthInput'
import FormGenderInput from 'components/Form/FormGenderInput'
import FormAboutSelect from 'components/Form/FormAboutSelect'
import FormBody from 'components/Form/FormBody'
import { correctDate, prepareInputLabel, isOlder18, onChangeValue, nextClickHandler, checkReg } from 'helpers/formHelpers'

class FormBody2 extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      profile: { ...this.props.profile },
      invalid: { },
      clickedNext: false
    }

    this.regExp = {
      day: /^[1-9]|[12][0-9]|3[01]{1,}$/,
      month: /^[1-9]|[12][0-9]|3[01]{1,}$/,
      year: /^[0-9]{4}$/,
      gender: /^.{1,}$/
    }
  }

  checkReg = (propName, val) => checkReg.call(this, propName, val)

  onChangeValue = (propName, value) => onChangeValue.call(this, propName, value)

  nextClickHandler = (ev) => nextClickHandler.call(this, ev)

  prepareValidState = (propName, val, customInvalidState) => {
    const { profile } = this.state
    let invalidState
    if (customInvalidState) invalidState = { ...customInvalidState }
    else invalidState = { ...this.state.invalid }

    switch (propName) {
      case 'day':
      case 'month':
      case 'year':
        invalidState['birth'] = this.checkReg(propName, val)
        if (invalidState['birth']) break
        let profDate = {
          ...profile,
          [propName]: val
        }
        if (!isOlder18(profDate.year, profDate.month, profDate.day)) invalidState['birth'] = ' must be 18 year or more'
        if (!correctDate(profDate.year, profDate.month, profDate.day)) invalidState['birth'] = ' is required'
        break
      default:
        invalidState[propName] = this.checkReg(propName, val)
        break
    }

    return invalidState
  }

  onInputChangeHandler = (propName) => (ev) => this.onChangeValue(propName, ev.target.value)
  onGenderChangeHandler = (propName) => (val) => this.onChangeValue(propName, val)

  render () {
    const { backClick } = this.props
    const { profile: { day, month, year, hearFrom, gender }, invalid } = this.state

    return (
      <FormBody
        backClick={backClick}
        nextClick={this.nextClickHandler} >
        <div className='home-form-body' >
          <FormBirthInput
            values={{ day, month, year }}
            label={prepareInputLabel(invalid.birth, 'date of birth')}
            onChange={this.onInputChangeHandler} />
          <FormGenderInput
            value={gender}
            label={prepareInputLabel(invalid.gender, 'gender')}
            options={['male', 'female', 'unspecified']}
            onChange={this.onGenderChangeHandler('gender')} />
          <FormAboutSelect
            value={hearFrom}
            label={prepareInputLabel(invalid.hearFrom, 'where did you hear about us?')}
            onChange={this.onGenderChangeHandler('hearFrom')} />
        </div>
      </FormBody>
    )
  }
}

FormBody2.propTypes = {
  backClick: PropTypes.func,
  nextClick: PropTypes.func,
  profile: PropTypes.object.isRequired
}

export default FormBody2
