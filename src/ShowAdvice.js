import React from "react";
import { Card } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const IDEAL = {
    1: ["Co", 'Co', 'O', 'P', 'P'],
    2: ['Co', 'P', 'P', 'P', 'P', 'P', 'P'],
    3: ['Ca', 'Co', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    4: ['Co', 'O', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    5: ['Ca', 'Co', 'O', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    6: ['Co', 'O', 'P', 'P', 'P', 'P', 'P', 'P'],
    7: ['Ca', 'Co', 'O', 'P', 'P', 'P', 'P', 'P', 'P'],
};

const EXAMPLES = {
    1: "An example implementation for this learning trajectory is to start out by trying the homework on Saturday, \
    take a break and try the homework again on Monday, and then attend office hours on Monday to get help, and after \
    office hours look on Piazza a little bit for a new problem you encounter. Then on Tuesday, maybe you're wondering \
    something so you come back and look at Piazza a little more.",
    2: "An example implementation for this learning trajectory is to start out by trying the homework on Saturday \
    and looking at Piazza for guidance, and then keeping an eye on Piazza over the next 5 days to see if anything important \
    is announced.",
    3: "An example implementation for this learning trajectory is to start out by watching the lecture videos on Saturday, \
    then start the homework on Sunday and look at Piazza for guidance, and then keeping an eye on Piazza over the next 6 days \
    to see if anything important is announced.",
    4: "An example implementation of this learning trajectory is to start out by attempting the homework on Monday, and go to \
    Office Hours and read Piazza to get some help starting it out. Then keep an eye on Piazza over the next 6 days to see if anything\
    important is announced.",
    5: "An example implementation of this learning trajectory is to start out by watching lecture videos on Sunday, then begin the \
    homework on Monday and go to office hours and read piazza for help, and then keep an eye on Piazza over the next few days for \
    any important announcements.",
    6: "An example implementation of this learning trajectory is to start trying the homework on Sunday, but get stuck and head to \
    office hours on Monday for help. On Monday you might also look up some of your questions on piazza, and then keep an eye on Piazza \
    over the next few days for any important announcements.",
    7: "An example implementation of this learning trajectory is to start out by watching lecture videos on Saturday, then start the homework\
    on Sunday, but maybe you get stuck and go to office hours on Monday. On Monday you can also take a look at Piazza to answer some of \
    your questions and then keep an eye on Piazza over the next few days for any important announcements."
}

export default class ShowAdvice extends React.Component {
    constructor(props) {
        super(props);

        var res = [];
        const platforms = this.props.traj;
        for (var i = 0; i < platforms.length; i++) {
            if (platforms[i] == "Check Piazza") {
                res = res.concat("P");
            } else if (platforms[i] == "Watch Lecture Video") {
                res = res.concat("Ca");
            } else if (platforms[i] == "Attend office hours") {
                res = res.concat("O");
            } else if (platforms[i] == "Homework") {
                res = res.concat("Co");
            }
        }

        var min = [];
        var minVal = Infinity;
        var example = "";

        for (let k in IDEAL) {
            var v = this.calculateDistance(res, IDEAL[k], 0, 0, 0);
            if (v < minVal) {
                minVal = v;
                min = IDEAL[k];
                example = EXAMPLES[k];
            }
        }

        var ideal = [];
        for (var i = 0; i < min.length; i++) {
            if (min[i] == "P") {
                ideal = ideal.concat("Check Piazza");
            } else if (min[i] == "Ca") {
                ideal = ideal.concat("Watch Lecture Video");
            } else if (min[i] == "O") {
                ideal = ideal.concat("Attend office hours");
            } else if (min[i] == "Co") {
                ideal = ideal.concat("Homework");
            }
        }


        this.state = {
            ideal: ideal,
            example: example
        };

        this.goBack = this.goBack.bind(this);
    }

    calculateDistance(traj, ideal, trajIndex, idealIndex, swaps) {
        if (trajIndex >= traj.length && idealIndex >= ideal.length) {
            return swaps;
        }
        if (trajIndex >= traj.length) {
            return this.calculateDistance(traj, ideal, trajIndex, idealIndex + 1, swaps + 1);
        } else if (idealIndex >= ideal.length) {
            return this.calculateDistance(traj, ideal, trajIndex + 1, idealIndex, swaps + 1);
        } else if (traj[trajIndex] == ideal[idealIndex]) {
            return this.calculateDistance(traj, ideal, trajIndex + 1, idealIndex + 1, swaps);
        }

        var increaseIdeal = this.calculateDistance(traj, ideal, trajIndex, idealIndex + 1, swaps + 1);
        var increaseTraj = this.calculateDistance(traj, ideal, trajIndex + 1, idealIndex, swaps + 1);
        var inPlace = this.calculateDistance(traj, ideal, trajIndex + 1, idealIndex + 1, swaps + 1);

        return Math.min(increaseIdeal, increaseTraj, inPlace);
    }

    goBack() {
        this.props.back(this.props.traj);
    }

    render() {
        return (
            <Container className="mt-5">
                <Row className="justify-content-md-center">
                    <Col>
                        <Card className="text-center">
                            <Card.Header as="h5">Here is our advice!</Card.Header>
                            <Card.Body>
                                <Container fluid>
                                    <Row className="justify-content-md-center">
                                        <Col>
                                            <p>
                                                Here is the closest ideal trajectory we found for you! The order given below is an absolute ordering -
                                                if you choose to try it, feel free to break it up into days as you see fit. Click the button at the bottom
                                                if you'd like to see more of our research!
                                            </p>
                                            <p className="text-muted">
                                                Note: if a platform occurs twice, that means the ideal trajectory would do that thing twice, on
                                                different days.
                                            </p>
                                            {<ListGroup className="pb-2">
                                                {this.state.ideal.map((p, i) => (
                                                    <ListGroup.Item>{p}</ListGroup.Item>
                                                ))}
                                            </ListGroup>}
                                        </Col>
                                    </Row>
                                    <Row className="justify-content-md-center">
                                        <Col>
                                            <p>{this.state.example}</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Button className="float-left" variant="outline-primary" onClick={this.goBack}>Back</Button>
                                        </Col>
                                        <Col>
                                            <Button className="float-right" variant="outline-primary" href="/#/graphs">How will changing my trajectory help me?</Button>
                                        </Col>
                                    </Row>
                                </Container>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}