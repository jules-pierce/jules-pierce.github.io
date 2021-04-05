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
    4: ['Co', 'O', 'P', 'P', 'P', 'P', 'P', 'P', 'P']
};

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

        for (let k in IDEAL) {
            var v = this.calculateDistance(res, IDEAL[k], 0, 0, 0);
            if (v < minVal) {
                minVal = v;
                min = IDEAL[k];
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
            ideal: ideal
        };
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

    render() {
        return (
            <Container className="mt-5">
                <Row className="justify-content-md-center">
                    <Col>
                        <Card className="text-center">
                            <Card.Header as="h5">Great!</Card.Header>
                            <Card.Body>
                                <Container fluid>
                                    <Row className="justify-content-md-center">
                                        <Col>
                                            <Card.Title> Here is an optimal learning trajectory, close to what you currently do. </Card.Title>
                                            {<ListGroup className="pb-2">
                                                {this.state.ideal.map((p, i) => (
                                                    <ListGroup.Item>{p}</ListGroup.Item>
                                                ))}
                                            </ListGroup>}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Button className="float-right" variant="outline-primary">How will changing my trajectory help me?</Button>
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