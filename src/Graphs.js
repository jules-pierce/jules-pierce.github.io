import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const HOMEWORKS = ["hw0", "hw1", "hw2", "hw3", "hw4", "hw5", "hw6", "hw7", "hw8", "hw9"];
const PLATFORMS = ["codio", "oh", "canvas", "piazza", "trajectories"];

export default class Graph extends React.Component {
    constructor(props) {
        super(props);
        this.state = { images: [] };
        this.filterImagesHw = this.filterImagesHw.bind(this);
        this.filterImagesPlatform = this.filterImagesPlatform.bind(this);

    }

    filterImagesHw(event) {

        var curr_images = this.state.images;
        var hw_prefix = event.target.id;


        if (event.target.checked) {
            PLATFORMS.forEach(platform => (
                curr_images = curr_images.concat(hw_prefix + "-" + platform + ".jpg")
            ));
        } else {
            curr_images = [];
            for (var i = 0; i < this.state.images.length; i++) {
                var img = this.state.images[i];
                if (!img.includes(hw_prefix)) {
                    curr_images = curr_images.concat(img)
                }
            }
        }
        this.setState({
            images: curr_images
        });
    }

    filterImagesPlatform(event) {
        var curr_images = this.state.images;
        var platform_suffix = event.target.id;

        if (event.target.checked) {
            HOMEWORKS.forEach(assignment => (
                curr_images = curr_images.concat(assignment + "-" + platform_suffix + ".jpg")
            ));
        } else {
            curr_images = []
            for (var i = 0; i < this.state.images.length; i++) {
                var img = this.state.images[i];
                if (!img.includes(platform_suffix)) {
                    curr_images = curr_images.concat(img);
                }
            }
        }

        console.log(curr_images);
        this.setState({
            images: curr_images
        });
    }

    render() {
        return (
            <Container className="mt-4">
                <Row className="justify-content-md-center">
                    <Col>
                        <h4>Take a look at our research!</h4>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col>
                        <p>Filter by the homework assignment and/or platform you'd like to see.</p>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">

                    <Col>
                        <h5>Assignment</h5>
                        <Form>
                            {HOMEWORKS.map((assignment, i) => (
                                < Form.Check
                                    type="checkbox"
                                    label={assignment}
                                    onChange={this.filterImagesHw}
                                    id={assignment}
                                />
                            ))}
                        </Form>
                    </Col>
                    <Col>
                        <h5>Platforms</h5>
                        <Form>
                            {PLATFORMS.map((platform, index) => (
                                <Form.Check
                                    type="checkbox"
                                    label={platform}
                                    onChange={this.filterImagesPlatform}
                                    id={platform}
                                />
                            ))}
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}