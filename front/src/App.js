import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as Actions from './actions';

class App extends Component {
  handleUploadFile = (event) => {
    const reader = new FileReader();
    const file = event.target.files[0];

    reader.addEventListener('load', () => {
      const payload = {
        fileData: reader.result,
        fileName: file.name,
        fileType: file.type,
      };

      Actions.uploadFile(payload);

    }, false);

    reader.readAsDataURL(file);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <input type="file" onChange={this.handleUploadFile} />
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
