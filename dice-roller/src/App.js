import React, { Component, Fragment } from 'react';
import './App.css';
import HomepageComponent from './components/Homepage';
import { CssBaseline } from '@material-ui/core';

class App extends Component {
  render() {
    return (
      <div>
        <CssBaseline />
        <HomepageComponent />
      </div>
    );
  }
}

export default App;
