// import {combineReducers} from 'redux'
// import {counter} from './index.redux'
// import {Auth} from './auth.redux'

// export default combineReducers({
//   Counter:counter,
//   AuthRedux:Auth
// })

import {combineReducers} from 'redux'
import {user} from './redux/user.redux'
export default combineReducers({
  user
})