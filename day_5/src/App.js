import React from 'react'
import { Provider } from 'react-redux'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Loader from './Components/Loader'
import NavBar from './Components/NavBar'
import LoginContainer from './container/LoginContainer'
import SignUpContainer from './container/SignUpContainer'
import TodoContainer from './container/TodoContainer'
import { store } from './redux/store'

function App(props) {
  const NavRoute = ({ exact, path, component: Component }) => (
    <Route
      exact={exact}
      path={path}
      render={(props) => (
        <div>
          <NavBar />
          <Component {...props} />
        </div>
      )}
    />
  )

  return (
    <HashRouter basename="/">
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={Loader}></Route>
          <Route exact path="/login" component={LoginContainer}></Route>
          <Route exact path="/signup" component={SignUpContainer}></Route>
          <NavRoute exact path="/todos" component={TodoContainer}></NavRoute>
        </Switch>
      </Provider>
    </HashRouter>
  )
}

export default App
