import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export default class LearnForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { platforms: ["Piazza"], selected: "Select a Platform" };

        this.onPiazzaClick = this.onPiazzaClick.bind(this);
        this.onCanvasClick = this.onCanvasClick.bind(this);
        this.onOHClick = this.onOHClick.bind(this);
    }

    onPiazzaClick() {
        console.log("piazza clicked");
        const list = this.state.platforms.concat("Piazza");
        this.setState({
            platforms: list,
            selected: "Piazza"
        });
    }

    onCanvasClick() {
        console.log("canvas clicked");
        const list = this.state.platforms.concat("Canvas");
        this.setState({
            platforms: list,
            selected: "Canvas"
        });
    }

    onOHClick() {
        console.log("oh clicked");
        const list = this.state.platforms.concat("OH");
        this.setState({
            platforms: list,
            selected: "OH"
        });
    }

    render() {
        return (
            <Card>
                <Card.Header>Fill out this form!</Card.Header>
                <Card.Body>
                    <ListGroup>
                        {this.state.platforms.map((platform) => (
                            <ListGroup.Item>{platform}</ListGroup.Item>
                        ))}
                    </ListGroup>
                    <DropdownButton id="dropdown-basic-button" title={this.state.selected}>
                        <Dropdown.Item onClick={this.onPiazzaClick}>Piazza</Dropdown.Item>
                        <Dropdown.Item onClick={this.onCanvasClick}>Canvas</Dropdown.Item>
                        <Dropdown.Item onClick={this.onOHClick}>OH</Dropdown.Item>
                    </DropdownButton>
                </Card.Body>
            </Card>
        )
    }
}