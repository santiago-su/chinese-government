import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './btn-3d.css';
import WebcamCapture from './WebcamCapture';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      start: false
    }
  }

  startCamera() {
    this.setState({ start: true })
  }

  render() {
    return (
      <div className="App">
        {!this.state.start && <button onClick={() => this.startCamera()} className="btn-3d cyan">开始</button>}
        {this.state.start && <WebcamCapture />}
      </div>
    );
  }
}

export default App;
