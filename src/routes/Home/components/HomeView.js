import React from 'react'
import FormHeader from 'components/Form/FormHeader'
import ProgressTrip from 'components/ProgressTrip'
// import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'
import Form from 'components/Form'
import FormInput from 'components/Form/FormInput'
import FormBody from 'components/Form/FormBody'

export const HomeView = (props) => {
  return (
    <div className='home-page-view'>
      <Form>
        <FormHeader text='Signup' />
        <ProgressTrip progress={30} />
        <FormBody
          backClick={() => console.log('back handler')}
          nextClick={() => console.log('next handler')} >
          <div style={{ width: '100%' }} >
            <FormInput label={{ text: 'Email' }} />
            <FormInput label={{ text: 'Password' }} />
            <FormInput label={{ text: 'Confirm password' }} />
          </div>
        </FormBody>
      </Form>
    </div>
  )
}

export default HomeView
