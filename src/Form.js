import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export default class LearnForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { platforms: ["Piazza"], selected: "Select a Platform" };

        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        const platform = e.target.innerText;
        const list = this.state.platforms.concat(platform);
        this.setState({
            platforms: list,
            selected: platform
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
                        <Dropdown.Item onClick={this.onClick}>Piazza</Dropdown.Item>
                        <Dropdown.Item onClick={this.onClick}>Canvas</Dropdown.Item>
                        <Dropdown.Item onClick={this.onClick}>OH</Dropdown.Item>
                    </DropdownButton>
                </Card.Body>
            </Card>
        )
    }
}