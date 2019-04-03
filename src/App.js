import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';
import AxiosGet from './components/AxiosGet';

class App extends Component {
  render() {
  
    return (
      <div className="App">
        <AxiosGet />
      </div>
    );
  }
}

export default App;
