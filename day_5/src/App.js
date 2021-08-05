import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import AddTodo from './Components/AddTodo';
import NavBar from './Components/NavBar';
import Todos from './Components/Todos';
import EditTodo from './Components/EditTodo';
import { store } from './redux/store';

function App(props) {
  return (
    <HashRouter basename="/">
      <Provider store={store}>
        <NavBar />
        <Route exact path="/" component={Todos}></Route>
        <Route exact path="/todo" component={AddTodo}></Route>
        <Route exact path="/edit/:id" component={EditTodo}></Route>
      </Provider>
    </HashRouter>
  );
}

export default App;