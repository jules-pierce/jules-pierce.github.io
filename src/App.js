import React from 'react';
import './App.css';
import Form from './Form';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Improve your Study Skills!
          </p>
        </header>
        <Form />
      </div>
    );
  }
}