import React from 'react'
import FormHeader from 'components/Form/FormHeader'
import ProgressTrip from 'components/ProgressTrip'
// import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'
import Form from 'components/Form'
import FormBody1 from './FormBody1'
import FormBody2 from './FormBody2'
import FormBody3 from './FormBody3'

export class HomeView extends React.Component {

  formBodyAccept = (pageNumb) => (body) => {
    this.props.signupUpdateProfile(body)
    this.props.signupChangePage(pageNumb)
  }

  backClickHandler = () => {
    this.props.signupChangePage(this.props.signupform.navPage - 1)
  }

  onDoneHandler = () => {
    console.log(this.props.signupform.fields)
  }

  render () {
    const { signupform } = this.props
    const {
      password, confirmPassword, email,
      day, month, year, hearFrom, gender
    } = signupform.fields

    const formBody = [
      <FormBody1
        profile={{
          password, confirmPassword, email
        }}
        nextClick={this.formBodyAccept(1)} />,
      <FormBody2
        profile={{
          day, month, year, hearFrom, gender
        }}
        backClick={this.backClickHandler}
        nextClick={this.formBodyAccept(2)} />,
      <FormBody3
        onDoneClick={this.onDoneHandler} />
    ]

    const formHeader = ['Signup', 'Signup', 'Thank you!']

    const progressValue = [ 33.3, 66.6, 100 ]

    return (
      <div className='home-page-view'>
        <Form>
          <FormHeader text={formHeader[signupform.navPage]} />
          <ProgressTrip progress={progressValue[signupform.navPage]} />
          {formBody[signupform.navPage] }
        </Form>
      </div>
    )
  }
}

HomeView.propTypes = {
  signupform: React.PropTypes.object.isRequired,
  signupChangePage: React.PropTypes.func.isRequired,
  signupUpdateProfile: React.PropTypes.func.isRequired
}

export default HomeView
