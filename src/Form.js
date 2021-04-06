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
                        <h4>Please enter the order in which you use resources.</h4>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col>
                        <p>
                            A "learning trajectory" is the order in which you use resources to achieve your eventual goal -
                            for most CS classes, that goal is a homework assignment or project. Learning trajectories are
                            specific to individuals, and what works well for one person might not work well for another. However,
                            we have identified a few learning trajectories that have appeared to be ideal, and this website will
                            analyze your current learning trajectory and point you towards an ideal learning trajectory which you
                            are closest to.
                        </p>
                        <p>
                            On this page, start by inputting your typical process of tackling a homework. If you use a resource multiple
                            times in a day, base the order on the first time you use that resource in a day. In the blocks below, use the
                            drop down menus to choose which platforms to add. You can drag them around to re-arrange them if you need. When
                            you're done, click the Submit button to see what we suggest for you!
                        </p>
                    </Col>
                </Row>
                <Row md={2} className="justify-content-md-center">
                    {DAYS.map((day, index) => (
                        <Col className="mt-2">
                            <Day setTraj={this.setTraj} index={index} getTraj={this.getTraj} day={DAYS[index]} />
                        </Col>
                    ))}
                </Row>
                <Row>
                    <Col className="mt-2">
                        <Button className="float-right" variant="outline-primary" as={ButtonGroup} onClick={this.onSubmit}>Submit</Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}