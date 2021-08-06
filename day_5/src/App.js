import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';
import AddTodo from './Components/AddTodo';
import Login from './Components/Login';
import NavBar from './Components/NavBar';
import SignUp from './Components/Signup';
import Todos from './Components/Todos';
import Loader from './Components/Loader';
import { store } from './redux/store';

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
  );

  return (
    <HashRouter basename="/">
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={Loader}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/signup" component={SignUp}></Route>
          <NavRoute exact path="/todos" component={Todos}></NavRoute>
          <NavRoute exact path="/addTodo" component={AddTodo}></NavRoute>
        </Switch>
      </Provider>
    </HashRouter>
  );
}

export default App;
