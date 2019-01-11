import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Hello from './pages/Hello';
import {
  HashRouter as Router,
  //BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
// import About from './pages/About.js';
// import Contact from './pages/Contact.js';

class App extends Component {
  render() {
    return (
      <Router>
      {/* <div>
      <Navbar />
        <Jumbotron title="Welcome" subtitle="Put something witty here!" />
        <Route exact path="/" component={Home}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/about/:id" component={About}/>
        <Route path="/home" component={Home}/>
      <Footer />    
      </div> */}
              <Route exact path="/" component={Hello}/>
      </Router>
    );
  }
}

export default App;
