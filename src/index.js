import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import {
  createStore,
  applyMiddleware,
  compose
} from 'redux'
import { Provider } from 'react-redux'
import {
  BrowserRouter,
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom'
import { counter } from './index.redux'
import App from './App';
const reduxdevToos = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// 构建仓库
const store = createStore(counter, compose(
  applyMiddleware(thunk),
  reduxdevToos
))

// 组件
function Page () {
  return <h1>其他页面</h1>
}
function test() {
  return <h1>redirect</h1>
}

// 全局使用store
function render(){
  ReactDOM.render(
    (<Provider store={store}>
      <BrowserRouter>
        <React.Fragment>
          <ul>
            <li>
              <Link to='/'>首页</Link>
            </li>
            <li>
              <Link to='/page'>其他页</Link>
            </li>
          </ul>
          <Switch>
            <Route path='/' exact component={App} />
            <Route path='/page' component={Page} />
            <Route component={test}/>
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    </Provider>),document.getElementById('root')
  );
}

render()