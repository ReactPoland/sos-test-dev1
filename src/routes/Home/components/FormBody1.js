import React, { PropTypes } from 'react'
import FormInput from 'components/Form/FormInput'
import FormBody from 'components/Form/FormBody'
import { prepareInputLabel, isValidState } from 'helpers/formHelpers'

class FormBody1 extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      profile: { ...this.props.profile },
      invalid: { },
      clickedNext: false
    }

    this.regExp = {
      email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      password: /^.{6,}$/,
      confirmPassword: /^.{6,}$/
    }
  }

  checkReg = (propName, val) => {
    if (this.regExp[propName]) {
      return !this.regExp[propName].test(val) ? ' is required' : null
    }
    return null
  }

  prepareValidState = (propName, val, customInvalidState) => {
    const { profile } = this.state
    let invalidState
    if (customInvalidState) invalidState = { ...customInvalidState }
    else invalidState = { ...this.state.invalid }

    invalidState[propName] = this.checkReg(propName, val)

    if (propName === 'confirmPassword' && profile.password !== val) {
      invalidState[propName] = ' doesn\'t match'
    }

    return invalidState
  }

  onChangeValue = (propName, value) => {
    let newState = {
      profile: {
        ...this.state.profile,
        [propName]: value
      }
    }

    if (this.state.clickedNext) {
      newState['invalid'] = {
        ...this.prepareValidState(propName, value)
      }
    }

    this.setState(newState)
  }

  nextClickHandler = (ev) => {
    const { profile } = this.state
    ev.preventDefault()

    let invalidStates = Object.keys(profile).reduce((acc, fieldName) => {
      acc = this.prepareValidState(fieldName, profile[fieldName], acc)
      return acc
    }, {})

    if (!isValidState(invalidStates)) {
      return this.setState({
        invalid : invalidStates,
        clickedNext: true
      })
    }

    this.props.nextClick(this.state.profile)
  }

  onInputChangeHandler = (prop) => (ev) => this.onChangeValue(prop, ev.target.value)

  render () {
    // const { profile } = this.props
    const { invalid } = this.state
    return (
      <FormBody
        nextClick={this.nextClickHandler} >
        <div className='home-form-body' >
          <FormInput
            onChange={this.onInputChangeHandler('email')}
            value={this.state.profile.email}
            label={prepareInputLabel(invalid.email, 'Email')} />
          <FormInput
            type='password'
            onChange={this.onInputChangeHandler('password')}
            value={this.state.profile.password}
            label={prepareInputLabel(invalid.password, 'Password')} />
          <FormInput
            type='password'
            onChange={this.onInputChangeHandler('confirmPassword')}
            value={this.state.profile.confirmPassword}
            label={prepareInputLabel(invalid.confirmPassword, 'Confirm password')} />
        </div>
      </FormBody>
    )
  }
}

FormBody1.propTypes = {
  nextClick: PropTypes.func,
  profile: PropTypes.object.isRequired
}

export default FormBody1
