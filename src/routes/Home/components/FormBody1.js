import React, { PropTypes } from 'react'
import FormInput from 'components/Form/FormInput'
import FormBody from 'components/Form/FormBody'
import { prepareInputLabel } from 'helpers/formHelpers'

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

  // TODO: check validation for confirm password

  onChangeValue = (propName, value) => {
    let newState = {
      profile: {
        ...this.state.profile,
        [propName]: value
      }
    }

    if (this.state.clickedNext) {
      newState['invalid'] = { ...this.state.invalid }
      newState['invalid'][propName] = !this.regExp[propName].test(value) ? ' is required' : null
    }

    this.setState(newState)
  }

  nextClickHandler = (ev) => {
    ev.preventDefault()
    let invalidStates = {}
    let isValidFrom = true
    Object.keys(this.state.profile).map(fieldName => {
      const fieldValue = this.state.profile[fieldName]
      invalidStates[fieldName] = !this.regExp[fieldName].test(fieldValue) ? ' is required' : null
    })

    if (this.state.profile.password !== this.state.profile.confirmPassword) {
      invalidStates['confirmPassword'] = ' doesn\'t match'
    }

    Object.keys(invalidStates).map(fieldName => {
      isValidFrom = isValidFrom && !invalidStates[fieldName]
    })

    this.setState({
      invalid : invalidStates,
      clickedNext: true
    })

    if (isValidFrom) this.props.nextClick(this.state.profile)
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
