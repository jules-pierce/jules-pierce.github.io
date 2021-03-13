import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Draggable } from 'react-beautiful-dnd';
import * as classNames from 'classnames';

export default class PlatformItem extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Draggable
                key={this.props.name}
                draggableId={`${this.props.name}-id`}
                index={this.props.index}>
                {(provided, snapshot) => (
                    <ListGroup.Item
                        className={classNames('item', snapshot.isDragging && 'dragging')}
                        style={provided.draggableProps.style}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        {this.props.name}
                    </ListGroup.Item>
                )}
            </Draggable>
        )
    }
}