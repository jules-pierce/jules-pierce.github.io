import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import PlatformItem from './PlatformItem';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import * as classNames from 'classnames';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class Day extends React.Component {
    constructor(props) {
        super(props);

        this.state = { platforms_remaining: ["Check Piazza", "Watch Lecture Video", "Attend office hours", "Homework"] }

        this.onDragEnd = this.onDragEnd.bind(this);
        this.onClick = this.onClick.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    onClick(e) {
        const platform = e.target.innerText;
        const list = this.props.getTraj(this.props.index).concat(platform);
        const platforms = this.state.platforms_remaining;
        const index = platforms.indexOf(platform);
        platforms.splice(index, 1);
        this.setState({
            platforms_remaining: platforms
        });
        this.props.setTraj(this.props.index, list);
    }

    onDragEnd(result) {
        console.log('Drag ended');
        if (!result.destination) {
            return;
        }

        const new_platforms = Array.from(this.props.getTraj(this.props.index));
        const [removed] = new_platforms.splice(result.source.index, 1);
        new_platforms.splice(result.destination.index, 0, removed);

        this.props.setTraj(this.props.index, new_platforms);
    }

    removeItem(index) {
        console.log("removing " + index);

        const new_platforms = Array.from(this.props.getTraj(this.props.index));
        new_platforms.splice(index, 1);
        this.props.setTraj(this.props.index, new_platforms);
    }

    render() {
        return (
            <Card className="text-center">
                <Card.Header as="h5">{this.props.day}</Card.Header>
                <Card.Body>
                    <Container>
                        <Row className="justify-content-md-center">
                            <Col>
                                <DragDropContext onDragEnd={this.onDragEnd}>
                                    <Droppable droppableId="droppable">
                                        {(provided, snapshot) => (
                                            <ListGroup
                                                ref={provided.innerRef}
                                                className={classNames('list', snapshot.isDraggingOver && 'draggingOver')}
                                                {...provided.droppableProps}
                                            >
                                                {this.props.getTraj(this.props.index).map((platform, index) => (
                                                    <PlatformItem name={platform} index={index} remove={this.removeItem} />
                                                ))}
                                                {provided.placeholder}
                                            </ListGroup>
                                        )}

                                    </Droppable>
                                </DragDropContext>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col>
                                <DropdownButton className="mt-4" variant="outline-primary" as={ButtonGroup} id="dropdown-basic-button" title="Select a Platform" block>
                                    {this.state.platforms_remaining.map(p => (
                                        <Dropdown.Item onClick={this.onClick}>{p}</Dropdown.Item>
                                    ))}
                                </DropdownButton>
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        )
    }
}