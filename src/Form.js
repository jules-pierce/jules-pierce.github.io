import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import PlatformItem from './PlatformItem';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import * as classNames from 'classnames';

const PLATFORMS = ["Piazza", "Canvas", "OH"];

export default class LearnForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { platforms: ["Piazza"], selected: "Select a Platform" };

        this.onClick = this.onClick.bind(this);
        this.onDragEnd = this.onDragEnd.bind(this);
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

        console.log(new_platforms);
        this.setState({
            platforms: new_platforms
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
                    <DropdownButton id="dropdown-basic-button" title={this.state.selected}>
                        {PLATFORMS.map(p => (
                            <Dropdown.Item onClick={this.onClick}>{p}</Dropdown.Item>
                        ))}
                    </DropdownButton>
                </Card.Body>
            </Card>
        )
    }
}