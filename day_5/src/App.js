import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import AddTodo from './Components/AddTodo';
import NavBar from './Components/NavBar';
import Todos from './Components/Todos';
import { store } from './redux/store';

function App(props) {
  return (
    <HashRouter basename="/">
      <Provider store={store}>
          <Route exact path="/" component={Loader}></Route>
      </Provider>
    </HashRouter>
  );
}

export default App;
