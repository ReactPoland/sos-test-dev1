import React, { PropTypes } from 'react'
import FormInput from 'components/Form/FormInput'
import FormBody from 'components/Form/FormBody'

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

  onChangeValue = (propName) => (ev) => {
    let newState = {
      profile: {
        ...this.state.profile,
        [propName]: ev.target.value
      }
    }

    if (this.state.clickedNext) {
      newState['invalid'] = { ...this.state.invalid }
      newState['invalid'][propName] = !this.regExp[propName].test(ev.target.value) ? ' is required' : null
    }

    this.setState(newState)
  }

  nextClickHandler = (ev) => {
    ev.preventDefault()
    let invalidStates = {}
    let isValidFrom = true
    Object.keys(this.state.profile).map(fieldName => {
      const fieldValue = this.state.profile[fieldName].trim()
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

  prepareInputLabel = (isInvalid, text) => {
    let label = {
      text
    }
    if (isInvalid) {
      label.text = text + isInvalid
      label.color = '#da3340'
    }
    return label
  }

  render () {
    // const { profile } = this.props
    const { invalid } = this.state
    return (
      <FormBody
        nextClick={this.nextClickHandler} >
        <div className='home-form-body' >
          <FormInput
            onChange={this.onChangeValue('email')}
            value={this.state.profile.email}
            label={this.prepareInputLabel(invalid.email, 'Email')} />
          <FormInput
            type='password'
            onChange={this.onChangeValue('password')}
            value={this.state.profile.password}
            label={this.prepareInputLabel(invalid.password, 'Password')} />
          <FormInput
            type='password'
            onChange={this.onChangeValue('confirmPassword')}
            value={this.state.profile.confirmPassword}
            label={this.prepareInputLabel(invalid.confirmPassword, 'Confirm password')} />
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
