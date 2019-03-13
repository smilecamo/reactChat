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
import App from './App';
import Auth from './Auth';
import reducers from './reducers'
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
          <Switch>
            <Route path='/' exact component={App} />
            <Route path='/auth' component={Auth}/>
          </Switch>
        </BrowserRouter>
      </Provider>
    )
    ,document.getElementById('root')
  )
}

render()
