import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import {createStore,applyMiddleware,compose} from 'redux'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import {Provider} from 'react-redux'
import 'antd-mobile/dist/antd-mobile.css'
import reducers from './reducers'
import AuthRoute from './components/authroute'
import login from './views/login'
import reg from './views/reg'
const reduxdevToos = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  reduxdevToos
))
function render(){
  ReactDOM.render(
    (
      <Provider store={store}>
        <BrowserRouter>
        {/* <Switch> */}
        <div>
          <AuthRoute></AuthRoute>
          <Route path='/login' component={login}></Route>
          <Route path="/reg" component={reg}></Route>
        </div>
        {/* </Switch> */}
        </BrowserRouter>
      </Provider>
    )
    ,document.getElementById('root')
  )
}

render()
