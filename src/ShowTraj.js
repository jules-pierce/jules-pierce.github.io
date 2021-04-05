import React from "react";
import { Card } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

export default class ShowTraj extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container className="mt-5">
                <Row classname="justify-content-md-center">
                    <Col>
                        <Card className="text-center">
                            <Card.Header as="h5">Great!</Card.Header>
                            <Card.Body>
                                <Container fluid>
                                    <Row className="justify-content-md-center">
                                        <Col>
                                            <Card.Title> Here is your current learning trajectory. </Card.Title>
                                            <ListGroup className="pb-2">
                                                {this.props.traj.map((p, i) => (
                                                    <ListGroup.Item>{p}</ListGroup.Item>
                                                ))}
                                            </ListGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Button className="float-right" variant="outline-primary" onClick={this.props.next}>Next</Button>
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