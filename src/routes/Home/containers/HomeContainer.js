import { connect } from 'react-redux'
import { signupChangePage, signupUpdateProfile } from 'store/signupform'

import HomeView from '../components/HomeView'

const mapDispatchToProps = {
  signupChangePage,
  signupUpdateProfile
}

const mapStateToProps = (state) => ({
  signupform : state.signupform
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
