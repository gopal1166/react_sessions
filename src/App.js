import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';
import AxiosGet from './components/AxiosGet';
import AxiosGetRepeat from './components/AxiosGetRepeat';

class App extends Component {
  render() {
  
    return (
      <div className="App">
        <AxiosGetRepeat />
      </div>
    );
  }
}

export default App;
