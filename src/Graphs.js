import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Card } from "react-bootstrap";

const HOMEWORKS = ["hw0", "hw1", "hw2", "hw3", "hw4", "hw5", "hw6", "hw7", "hw8", "hw9"];
const PLATFORMS = ["codio", "oh", "canvas", "piazza"];

const TITLES = {
    "/imgs/all-all.png": "Trajectories for All Assignments",
    "/imgs/hw0-codio.png": "Codio for HW0",
    "/imgs/hw0-oh.png": "Office Hours for HW0",
    "/imgs/hw0-piazza.png": "Piazza for HW0",
    "/imgs/hw0-all.png": "Trajectories for HW0",
    "/imgs/hw1-codio.png": "Codio for HW1",
    "/imgs/hw1-oh.png": "Office Hours for HW1",
    "/imgs/hw1-canvas.png": "Lecture Videos for HW1",
    "/imgs/hw1-piazza.png": "Piazza for HW1",
    "/imgs/hw1-all.png": "Trajectories for HW1",
    "/imgs/hw2-codio.png": "Codio for HW2",
    "/imgs/hw2-oh.png": "Office Hours for HW2",
    "/imgs/hw2-canvas.png": "Lecture Videos for HW2",
    "/imgs/hw2-piazza.png": "Piazza for HW2",
    "/imgs/hw2-all.png": "Trajectories for HW2",
    "/imgs/hw3-codio.png": "Codio for HW3",
    "/imgs/hw3-oh.png": "Office Hours for HW3",
    "/imgs/hw3-canvas.png": "Lecture Videos for HW3",
    "/imgs/hw3-piazza.png": "Piazza for HW3",
    "/imgs/hw3-all.png": "Trajectories for HW3",
    "/imgs/hw4-codio.png": "Codio for HW4",
    "/imgs/hw4-oh.png": "Office Hours for HW4",
    "/imgs/hw4-canvas.png": "Lecture Videos for HW4",
    "/imgs/hw4-piazza.png": "Piazza for HW4",
    "/imgs/hw4-all.png": "Trajectories for HW4",
    "/imgs/hw5-codio.png": "Codio for HW5",
    "/imgs/hw5-oh.png": "Office Hours for HW5",
    "/imgs/hw5-canvas.png": "Lecture Videos for HW5",
    "/imgs/hw5-piazza.png": "Piazza for HW5",
    "/imgs/hw5-all.png": "Trajectories for HW5",
    "/imgs/hw6-codio.png": "Codio for HW6",
    "/imgs/hw6-oh.png": "Office Hours for HW6",
    "/imgs/hw6-canvas.png": "Lecture Videos for HW6",
    "/imgs/hw6-piazza.png": "Piazza for HW6",
    "/imgs/hw6-all.png": "Trajectories for HW6",
    "/imgs/hw7-codio.png": "Codio for HW7",
    "/imgs/hw7-oh.png": "Office Hours for HW7",
    "/imgs/hw7-canvas.png": "Lecture Videos for HW7",
    "/imgs/hw7-piazza.png": "Piazza for HW7",
    "/imgs/hw7-all.png": "Trajectories for HW7",
    "/imgs/hw8-codio.png": "Codio for HW8",
    "/imgs/hw8-oh.png": "Office Hours for HW8",
    "/imgs/hw8-canvas.png": "Lecture Videos for HW8",
    "/imgs/hw8-piazza.png": "Piazza for HW8",
    "/imgs/hw8-all.png": "Trajectories for HW8",
    "/imgs/hw9-codio.png": "Codio for HW9",
    "/imgs/hw9-oh.png": "Office Hours for HW9",
    "/imgs/hw9-canvas.png": "Lecture Videos for HW9",
    "/imgs/hw9-piazza.png": "Piazza for HW9",
    "/imgs/hw9-all.png": "Trajectories for HW9",
}

export default class Graph extends React.Component {
    constructor(props) {
        super(props);
        this.state = { images: [], hws: [], platforms: [] };
        this.filterImagesHw = this.filterImagesHw.bind(this);
        this.filterImagesPlatform = this.filterImagesPlatform.bind(this);
        this.filterImages = this.filterImages.bind(this);

    }

    filterImages(hwList, platList) {
        var res = [];
        for (var image in TITLES) {
            var imgName = image.split("/")[2];
            var s = imgName.split("-");
            var assignment = s[0];
            var platform = s[1].split(".")[0];

            if (hwList.includes(assignment) && platList.includes(platform)) {
                res = res.concat(image);
            }
        }

        this.setState({
            images: res
        });
    }

    filterImagesHw(event) {

        var curr_hws = this.state.hws;
        var hw_prefix = event.target.id;


        if (event.target.checked) {
            curr_hws = curr_hws.concat(hw_prefix);
            var containsAll = true;
            for (var hw in HOMEWORKS) {
                if (!curr_hws.includes(HOMEWORKS[hw])) {
                    containsAll = false;
                }
            }
            if (containsAll) {
                curr_hws = curr_hws.concat("all");
            }
        } else {
            var ind = curr_hws.indexOf(hw_prefix);
            curr_hws.splice(ind, 1);
        }
        this.filterImages(curr_hws, this.state.platforms);
        this.setState({
            hws: curr_hws
        });
    }

    filterImagesPlatform(event) {
        var curr_platforms = this.state.platforms;
        var platform_suffix = event.target.id;

        if (event.target.checked) {
            curr_platforms = curr_platforms.concat(platform_suffix);
            var containsAll = true;
            for (var p in PLATFORMS) {
                if (!curr_platforms.includes(PLATFORMS[p])) {
                    console.log("does not include " + p);
                    containsAll = false;
                }
            }
            if (containsAll) {
                curr_platforms = curr_platforms.concat("all");
            }
        } else {
            var ind = curr_platforms.indexOf(platform_suffix);
            curr_platforms.splice(ind, 1);
        }

        this.filterImages(this.state.hws, curr_platforms);
        this.setState({
            platforms: curr_platforms
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
                <Row>
                    {this.state.images.map((image) => (
                        <Card className="mt-2">
                            <Card.Body>
                                <Card.Title as="h3" className="mt-2">{TITLES[image]}</Card.Title>
                            </Card.Body>
                            <Card.Img variant="bottom" src={image} />
                        </Card>
                    ))}
                </Row>
            </Container>
        )
    }
}