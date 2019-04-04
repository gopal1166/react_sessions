import React, { Component } from 'react';
import './App.css';
import FuncComponent from './components/FuncComponent';
import { SecComponent } from './components/FuncComponent';
import ClassComponent from './containers/ClassComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FuncComponent />
        <SecComponent />
        
        <ClassComponent />
      </div>
    );
  }
}

export default App;
