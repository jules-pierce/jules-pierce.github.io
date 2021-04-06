import React from "react";
import { Accordion, Card, Button, Image } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class FAQ extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Accordion>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            I’m feeling really overwhelmed. I don’t know how to use all the
                            resources or what I should do to maximize my learning and time.
                            What should I do first?
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            It’s absolutely normal to feel overwhelmed by CIS homeworks and concepts in the beginning.
                            You have access to many resources, and we will help you figure out what a step in the
                            right direction could look like. Please use the <a href="/">‘Optimize my Learning’</a> page
                            to find what that step would look like. Using past data, we have also identified learning
                            trajectories (order of using resources) that have worked well in the past for students who
                            were once in the same place as you are in now. For tons of details on how students have used
                            the available resources, and what has worked in the past, please visit the <a href="/graphs">
                                Graphs </a>page on this website.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            How do I start/go about finishing a homework assignment?
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            Based on our analysis of optimal resource utilization, we have found that there are a few learning
                            trajectories that have led to better student success. Of course, nothing is a sure proof of success,
                            but the following graph shows us which trajectories tend to lead to a higher average grade. The
                            graph shows the trajectories by increasing grade (left to right) for a given homework.
                            <Image src="/imgs/all-trajectories.png" fluid />
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="2">
                            Is it true that the earlier I start homework the better?
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>
                            Yes and No?! Our data has shown that students who start earlier tend to get better grades.
                            This could be because of better availability of resources like OHQ or just more time to debug
                            your code. However there have been instances where people who started the assignment 5 days
                            before the due date have done better than those who started 6 days before the due date. So maybe
                            take a day’s break after submitting your previous homework before starting the next one.
                            <Container fluid>
                                <Row>
                                    <Col>
                                        <Image src="/imgs/hw3-codio.png" fluid />
                                    </Col>
                                    <Col>
                                        <Image src="/imgs/hw7-codio.png" fluid />
                                    </Col>
                                </Row>
                            </Container>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="3">
                            How much should I engage with Piazza?
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                        <Card.Body>
                            Piazza is one of the most important resources available to you - it has been found to be really
                            helpful in getting a high grade for a homework assignment. You should actively use Piazza to
                            ask questions and search for answers when you’re stuck. Piazza could also help you pre-determine
                            and overcome some common speed bumps during the course of the homework assignment. However,
                            there should be a limit to how much time you are spending on Piazza. Our data shows that those
                            (few) students who spend too much time on Piazza and engage with upwards of 300 or 350 posts per
                            homework tend to start losing out on actual problem solving and coding time and thus receive a
                            lower average grade - a textbook example of the law of diminishing returns.
                            <Image src="/imgs/hw3-piazza.png" fluid />
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="4">
                            Is it good to watch the lecture videos before starting homework?
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="4">
                        <Card.Body>
                            Yes absolutely! Reviewing course content and lecture videos before starting the homework has
                            definitely proven to have a positive effect on students’ average grades across the board.
                            It never hurts to get a fresh understanding on topics like arrays, recursion, and objects that
                            are closely tied to homework assignments.
                            <Image src="/imgs/hw4-trajectories.png" fluid />
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="5">
                            When should I start watching/revising course content through videos before starting the homework?
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="5">
                        <Card.Body>
                            It’s good to go over course content through watching posted lecture videos before starting a
                            homework assignment. This way, the concepts relevant to the homework will not be totally foreign
                            to you as you begin working through the assignment. It’s also beneficial to reinforce concepts
                            by watching the videos as you see fit while working on the assignment; having a background
                            understanding before starting and then reviewing specific concepts as you work through the
                            assignment will help you to really understand both the material and its applications during your
                            homework assignment. Here’s a graph showing student performance based on how many days before
                            starting an assignment they watched the videos. As shown, many time points correspond with a good
                            grade; from our analysis, the best times to watch videos are before starting a homework and
                            towards the end, but it’s important to review course concepts whenever you feel a doubt coming on
                            or you just want to get a deeper understanding of the material.
                            <Image src="/imgs/hw4-canvas.png" fluid />
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="6">
                            When should I go to Office Hours?
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="6">
                        <Card.Body>
                            Of course everyone should visit Office Hours when they’ve been trying but haven’t been able to
                            solve a part of the homework assignment - whether it be for concept clarification or debugging.
                            However, we found something really interesting - students who went to OH before starting to code
                            had a higher average grade than other students. Such students would discuss high level concepts
                            and strategies related to the homework assignment with the TA, and that generally tended to help
                            them and give them clarity towards completing the homework and thoroughly understanding the
                            concepts.
                            <Image src="/imgs/hw7-trajectories.png" fluid />
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        )
    }
}