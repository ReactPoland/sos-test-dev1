import { connect } from 'react-redux'
import { signupChangePage } from 'store/signupform'

import HomeView from '../components/HomeView'

const mapDispatchToProps = {
  signupChangePage
}

const mapStateToProps = (state) => ({
  signupform : state.signupform
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
