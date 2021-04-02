import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import PlatformItem from './PlatformItem';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import * as classNames from 'classnames';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PLATFORMS = ["Check Piazza", "Watch Lecture Video", "Attend office hours", "Start homework"];

export default class LearnForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selected: "Select a Platform", suggestion: "" };

        this.onClick = this.onClick.bind(this);
        this.onDragEnd = this.onDragEnd.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.findImprovement = this.findImprovement.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    onClick(e) {
        const platform = e.target.innerText;
        const list = this.props.getTraj().concat(platform);
        this.setState({
            selected: platform
        });
        this.props.setTraj(list);
    }

    onDragEnd(result) {
        console.log('Drag ended');
        if (!result.destination) {
            return;
        }

        const new_platforms = Array.from(this.props.getTraj());
        const [removed] = new_platforms.splice(result.source.index, 1);
        new_platforms.splice(result.destination.index, 0, removed);

        this.props.setTraj(new_platforms);
    }

    findImprovement(trajectory) {
        const ideal = ["piazza", "canvas", "codio"];

        // check single relationships
        for (var i = 0; i < ideal.length; i++) {
            if (!trajectory.includes(ideal[i])) {
                return "You should try using " + ideal[i] + " more!";
            }
        }

        // check pairs
        for (var i = 0; i < ideal.length; i++) {
            for (var j = i + 1; j < ideal.length; j++) {
                const p1 = trajectory.indexOf(ideal[i]);
                const p2 = trajectory.indexOf(ideal[j]);
                if (p1 > p2) {
                    return "You should try using " + ideal[i] + " before " + ideal[j] + "!";
                }
            }
        }
    }

    removeItem(index) {
        console.log("removing " + index);

        const new_platforms = Array.from(this.props.getTraj());
        new_platforms.splice(index, 1);
        this.props.setTraj(new_platforms);
    }

    onSubmit() {
        const platforms = this.props.getTraj();
        var res = [];
        const piazzaFound = false;
        const ohFound = false;
        const codioFound = false;
        const canvasIndex = platforms.lastIndexOf("Watch Lecture Video");

        for (var i = 0; i < platforms.length; i++) {
            if (platforms[i] == "Check Piazza" && !piazzaFound) {
                console.log("piazza");
                res = res.concat("piazza");
            } else if (platforms[i] == "Watch Lecture Video" && i == canvasIndex) {
                console.log("canvas");
                res = res.concat("canvas");
            } else if (platforms[i] == "Attend office hours" && !ohFound) {
                console.log("oh");
                res = res.concat("oh");
            } else if (platforms[i] == "Start homework" && !codioFound) {
                console.log("codio");
                res = res.concat("codio");
            }
        }

        console.log(res);
        const suggestion = this.findImprovement(res);
        console.log(suggestion);
        this.setState({
            suggestion: suggestion
        });

        this.props.showTraj();
    }

    render() {
        return (
            <Container className="mt-5">
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <Card className="text-center">
                            <Card.Header as="h5">Please enter the order in which you use resources.</Card.Header>
                            <Card.Body>
                                <Container fluid>
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
                                                            {this.props.getTraj().map((platform, index) => (
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
                                            <DropdownButton className="mt-4" variant="outline-primary" as={ButtonGroup} id="dropdown-basic-button" title={this.state.selected} block>
                                                {PLATFORMS.map(p => (
                                                    <Dropdown.Item onClick={this.onClick}>{p}</Dropdown.Item>
                                                ))}
                                            </DropdownButton>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Button className="float-right" variant="outline-primary" as={ButtonGroup} onClick={this.onSubmit}>Submit</Button>
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