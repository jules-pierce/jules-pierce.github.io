import React from 'react';
import LearnForm from './Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { JournalCode } from 'react-bootstrap-icons';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>
            <JournalCode /> {' '}
            Improve your Study Skills!
          </Navbar.Brand>
        </Navbar>
        <LearnForm />
      </div>
    );
  }
}