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
import './index.css'
import reducers from './reducers'
import AuthRoute from './components/authroute'
import Dashboard from './components/Dashboard'
import Login from './views/login'
import reg from './views/reg'
import BossInfo from './views/BossInfo'
import GeniusInfo from './views/GeniusInfo'
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
          {/* Switch作用:只会命中第一个匹配的路由 */}
          <Switch>
          <Route path="/bossinfo" component={BossInfo}></Route>
          <Route path="/geniusinfo" component={GeniusInfo}></Route>
          <Route path='/login' component={Login}></Route>
          <Route path="/reg" component={reg}></Route>
          {/* 没有加path的就是前面的都没有匹配的情况下就会命中 */}
          <Route component={Dashboard}/> 
          </Switch>
        </div>
        {/* </Switch> */}
        </BrowserRouter>
      </Provider>
    )
    ,document.getElementById('root')
  )
}

render()
