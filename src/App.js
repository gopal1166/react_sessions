import React, { Component } from 'react';
import './App.css';
import { ArrowFun2 } from './components/FirstComponent';

import MyFunComponent from './components/FirstComponent';

import MyFirstClassComponent from './components/ClassComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        Hello world
          <MyFunComponent />
        <ArrowFun2 />
        <MyFirstClassComponent />
      </div>
    );
  }
}

export default App;
