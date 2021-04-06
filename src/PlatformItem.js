import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Draggable } from 'react-beautiful-dnd';
import * as classNames from 'classnames';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { X } from 'react-bootstrap-icons';

export default class PlatformItem extends React.Component {
    constructor(props) {
        super(props);
        this.onRemove = this.onRemove.bind(this);
    }

    onRemove(removeFn, index) {
        this.props.remove(this.props.index);
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
                        <Container fluid>
                            <Row className="justify-content-md-center">
                                <Col sm={1} xl={1}></Col>
                                <Col className="mt-1">{this.props.name}</Col>
                                <Col sm={1} xl={1}>
                                    <Button onClick={this.onRemove} variant="outline-danger" size="sm">
                                        <X />
                                    </Button>
                                </Col>
                            </Row>
                        </Container>
                    </ListGroup.Item>
                )
                }
            </Draggable>
        )
    }
}