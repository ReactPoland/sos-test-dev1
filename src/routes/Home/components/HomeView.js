import React from 'react'
import FormHeader from 'components/Form/FormHeader'
import ProgressTrip from 'components/ProgressTrip'
// import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'
import Form from 'components/Form'
import FormBody1 from './FormBody1'
import FormBody2 from './FormBody2'
import FormBody3 from './FormBody3'

export const HomeView = ({ signupform, signupChangePage }) => {
  const formBody = [
    <FormBody1
      nextClick={(ev) => {
        ev.preventDefault()
        signupChangePage(1)
      }} />,
    <FormBody2
      backClick={(ev) => {
        ev.preventDefault()
        signupChangePage(0)
      }}
      nextClick={(ev) => {
        ev.preventDefault()
        signupChangePage(2)
      }} />,
    <FormBody3
      onDoneClick={(ev) => {
        ev.preventDefault()
        console.log(signupform.fields)
      }} />
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

HomeView.propTypes = {
  signupform: React.PropTypes.object.isRequired,
  signupChangePage: React.PropTypes.func.isRequired
}

export default HomeView
