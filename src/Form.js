import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

export default class LearnForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card>
                <Card.Header>Fill out this form!</Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Label Placeholder</Form.Label>
                            <Form.Control type="text" placeholder="placeholder" />
                            <Form.Text className="text-muted"> text stuff</Form.Text>
                        </Form.Group>
                    </Form>
                    <Button variant="outline-primary"> Click here! </Button>
                </Card.Body>
            </Card>
        )
    }
}