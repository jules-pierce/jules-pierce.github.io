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
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { trajectory: [], home: <div /> }

    this.showTraj = this.showTraj.bind(this);
    this.showAdvice = this.showAdvice.bind(this);
    this.showForm = this.showForm.bind(this);
  }

  componentDidMount() {
    this.setState({
      home: <LearnForm showTraj={this.showTraj} />
    });
  }

  showForm() {
    this.setState({
      home: <LearnForm showTraj={this.showTraj} />
    });
  }

  showTraj(traj) {
    this.setState({
      trajectory: traj,
      home: <ShowTraj traj={traj} next={this.showAdvice} back={this.showForm} />
    });
  }

  showAdvice() {
    this.setState({
      home: <ShowAdvice traj={this.state.trajectory} back={this.showTraj} />
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
              <Nav.Link href="/">Optimize my Learning</Nav.Link>
              <Nav.Link href="/graphs">Graphs</Nav.Link>
              <Nav.Link href="/faq">FAQ</Nav.Link>
              <NavDropdown title="About Us" id="basic-nav-dropdown">
                <NavDropdown.Item href="/about#team">The Team</NavDropdown.Item>
                <NavDropdown.Item href="/about#study">The Study</NavDropdown.Item>
                <NavDropdown.Item href="/about#background">Background</NavDropdown.Item>
                <NavDropdown.Item href="/about#design">Methodology and Design</NavDropdown.Item>
                <NavDropdown.Item href="/about#next">Next Steps</NavDropdown.Item>
              </NavDropdown>
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
}