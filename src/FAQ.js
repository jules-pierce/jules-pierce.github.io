import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";

export default class FAQ extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Accordion>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Click here
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body> graphs here</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            Click here 2
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body> graphs here 2</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        )
    }
}