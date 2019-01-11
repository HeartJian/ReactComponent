import React, { Component } from 'react';
import './App.css';
import Hello from './pages/Hello';
import {
BrowserRouter as Router,
  Route,
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>
              <Route exact path="/" component={Hello}/>
      </Router>
    );
  }
}

export default App;
