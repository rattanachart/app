import { combineReducers } from 'redux'

// import HeaderReducer from './HeaderReducer'


const appReducer = combineReducers({
//   header: HeaderReducer,
})

const rootReducer = (state, action) => {

  return appReducer(state, action)
}

export default rootReducer
