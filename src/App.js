import React from 'react';
import LearnForm from './Form';
import Graph from './Graphs';
import About from './About';
import FAQ from './FAQ';
import ShowTraj from './ShowTraj';
import ShowAdvice from './ShowAdvice';
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
    this.state = { trajectory: [], home: <div /> }

    this.showTraj = this.showTraj.bind(this);
    this.showAdvice = this.showAdvice.bind(this);
  }

  componentDidMount() {
    this.setState({
      home: <LearnForm showTraj={this.showTraj} />
    });
  }

  showTraj(traj) {
    this.setState({
      trajectory: traj,
      home: <ShowTraj traj={traj} next={this.showAdvice} />
    });
  }

  showAdvice() {
    this.setState({
      home: <ShowAdvice traj={this.state.trajectory} />
    })
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
              <Nav.Link href="/">Get Feedback</Nav.Link>
              <Nav.Link href="/graphs">Graphs</Nav.Link>
              <Nav.Link href="/faq">FAQ</Nav.Link>
              <Nav.Link href="/about">About Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={() => this.state.home}
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
            <Route
              exact
              path="/faq"
              render={() => <FAQ />}
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