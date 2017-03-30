import { combineReducers } from 'redux'
import locationReducer from './location'
import signupformReducer from './signupform'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    signupform: signupformReducer,
    location: locationReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
