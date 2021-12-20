import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import Skills from './components/skills';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Home></Home>
      <Skills></Skills>
    </div>
  );
}

export default App;
