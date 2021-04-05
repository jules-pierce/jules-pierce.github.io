import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Day from './Day';

const DAYS = ["Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];

export default class LearnForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { traj: [[], [], [], [], [], [], []] };

        this.onSubmit = this.onSubmit.bind(this);
        this.setTraj = this.setTraj.bind(this);
        this.getTraj = this.getTraj.bind(this);
    }

    onSubmit() {
        console.log(this.state.traj);

        var res = [];

        for (var i = 0; i < this.state.traj.length; i++) {
            res = res.concat(this.state.traj[i]);
        }

        this.props.showTraj(res);
    }

    setTraj(day, list) {
        var current = this.state.traj;
        current[day] = list;
        this.setState({ traj: current });
    }

    getTraj(day) {
        return this.state.traj[day];
    }

    render() {
        return (
            <Container className="mt-5">
                <Row className="justify-content-md-center">
                    <Col>
                        <h5>Please enter the order in which you use resources.</h5>
                    </Col>
                </Row>
                <Row>
                    {DAYS.map((day, index) => (
                        <Col className="mt-2">
                            <Day setTraj={this.setTraj} index={index} getTraj={this.getTraj} day={DAYS[index]} />
                        </Col>
                    ))}
                </Row>
                <Row>
                    <Col>

                        <Button className="float-right" variant="outline-primary" as={ButtonGroup} onClick={this.onSubmit}>Submit</Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}