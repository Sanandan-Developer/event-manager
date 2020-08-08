import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css'

import Front from './Front.js'
import LogIn from './component/Login.js'
import Register from './component/register.js'
import Admin from './Admin.js'
import User1 from './component/user1.js'
const routing = (
  <Router>
    <div>
      <Route path="/" exact component={Front} />
      <Route path="/login" component= {LogIn} />
      <Route path="/register" component= {Register} />
      <Route path="/Admin" component={Admin} />
      <Route path="/User/:_id" component={User1}/>
    </div>
  </Router>
)


ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
