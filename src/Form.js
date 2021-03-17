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

const PLATFORMS = ["Check Piazza", "Watch Lecture Video", "Attend office hours", "Start homework"];

export default class LearnForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { platforms: [], selected: "Select a Platform", suggestion: "" };

        this.onClick = this.onClick.bind(this);
        this.onDragEnd = this.onDragEnd.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.findImprovement = this.findImprovement.bind(this);
    }

    onClick(e) {
        const platform = e.target.innerText;
        const list = this.state.platforms.concat(platform);
        this.setState({
            platforms: list,
            selected: platform
        });
    }

    onDragEnd(result) {
        console.log('Drag ended');
        if (!result.destination) {
            return;
        }

        const new_platforms = Array.from(this.state.platforms);
        const [removed] = new_platforms.splice(result.source.index, 1);
        new_platforms.splice(result.destination.index, 0, removed);

        this.setState({
            platforms: new_platforms
        });
    }

    findImprovement(trajectory) {
        const ideal = ["canvas", "oh", "codio", "piazza"];

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

    onSubmit() {
        const platforms = this.state.platforms;
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
    }

    render() {
        return (
            <Card>
                <Card.Header>Fill out this form!</Card.Header>
                <Card.Body>
                    <DragDropContext onDragEnd={this.onDragEnd}>
                        <Droppable droppableId="droppable">
                            {(provided, snapshot) => (
                                <ListGroup
                                    ref={provided.innerRef}
                                    className={classNames('list', snapshot.isDraggingOver && 'draggingOver')}
                                    {...provided.droppableProps}
                                >
                                    {this.state.platforms.map((platform, index) => (
                                        <PlatformItem name={platform} index={index} />
                                    ))}
                                    {provided.placeholder}
                                </ListGroup>
                            )}

                        </Droppable>
                    </DragDropContext>
                    <DropdownButton variant="outline-primary" as={ButtonGroup} id="dropdown-basic-button" title={this.state.selected}>
                        {PLATFORMS.map(p => (
                            <Dropdown.Item onClick={this.onClick}>{p}</Dropdown.Item>
                        ))}
                    </DropdownButton> {' '}
                    <Button variant="outline-primary" as={ButtonGroup} onClick={this.onSubmit}>Submit</Button>
                    <p>{this.state.suggestion}</p>
                </Card.Body>
            </Card>
        )
    }
}