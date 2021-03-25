import React from 'react';
import LearnForm from './Form';
import Graph from './Graphs';
import About from './About';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { JournalCode } from 'react-bootstrap-icons';
import { Nav } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

export default class App extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>
            <JournalCode /> {' '}
             Improve your Study Skills!
           </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/form">Get Feedback</Nav.Link>
              <Nav.Link href="/graphs">Graphs</Nav.Link>
              <Nav.Link href="/about">About Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <LearnForm />}
            />
            <Route
              exact
              path="/form"
              render={() => <LearnForm />}
            />
            <Route
              exact
              path="/graphs"
              render={() => <Graph />}
            />
            <Route
              exact
              path="/about"
              render={() => <About />}
            />
          </Switch>
        </Router>
      </div>
    )
  }
  // render() {
  //   return (
  //     <div className="App">
  //       <Navbar bg="dark" variant="dark">
  //         <Navbar.Brand>
  //           <JournalCode /> {' '}
  //           Improve your Study Skills!
  //         </Navbar.Brand>
  //         <Navbar.Collapse id="basic-navbar-nav">
  //           <Nav className="mr-auto">
  //             <Nav.Link>Test</Nav.Link>
  //           </Nav>
  //         </Navbar.Collapse>
  //       </Navbar>
  //       <LearnForm />
  //     </div>
  //   );
  // }
}