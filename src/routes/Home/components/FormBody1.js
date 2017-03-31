import React, { PropTypes } from 'react'
import FormInput from 'components/Form/FormInput'
import FormBody from 'components/Form/FormBody'
import { prepareInputLabel, checkReg, onChangeValue, nextClickHandler } from 'helpers/formHelpers'

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
      // password: /^.{6,}$/,
      confirmPassword: /^.{1,}$/
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

    invalidState[propName] = this.checkReg(propName, val)

    switch (propName) {
      case 'confirmPassword':
        if (invalidState[propName]) break
        invalidState[propName] = profile.password !== val ? ' doesn\'t match' : null
        break
      case 'password':
        if (profile.confirmPassword.length) {
          invalidState['confirmPassword'] = profile.confirmPassword !== val ? ' doesn\'t match' : null
        }

        if (val.length === 0) {
          invalidState[propName] = ' is required'
          break
        }
        if (val.length < 6) {
          invalidState[propName] = ' should be minimum 6 characters long'
          break
        }

        break
    }

    return invalidState
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
