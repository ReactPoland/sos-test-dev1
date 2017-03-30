// ------------------------------------
// Constants
// ------------------------------------
export const SIGNUP_FORM_CHANGE_PAGE = 'SIGNUP_FORM_CHANGE_PAGE'
export const SIGNUP_FORM_UPDATE_PROFILE = 'SIGNUP_FORM_UPDATE_PROFILE'
// export const COUNTER_DOUBLE_ASYNC = 'COUNTER_DOUBLE_ASYNC'

// ------------------------------------
// Actions
// ------------------------------------
export function signupChangePage (value) {
  return {
    type    : SIGNUP_FORM_CHANGE_PAGE,
    payload : value
  }
}

export function signupUpdateProfile (value) {
  return {
    type    : SIGNUP_FORM_UPDATE_PROFILE,
    payload : value
  }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const actions = {
  signupChangePage
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SIGNUP_FORM_CHANGE_PAGE] : (state, action) => ({
    ...state,
    navPage: action.payload
  }),
  [SIGNUP_FORM_UPDATE_PROFILE] : (state, action) => {
    const { fields } = state
    const { payload } = action

    Object.keys(payload).map(fieldName => {
      fields[fieldName] = payload[fieldName]
    })

    return {
      ...state,
      fields
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  navPage: 0,
  fields: {
    email: '',
    password: '',
    confirmPassword: '',
    gender: 'male',
    day: '',
    month: '',
    year: '',
    hearFrom: ''
  }
}
export default function signupReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
