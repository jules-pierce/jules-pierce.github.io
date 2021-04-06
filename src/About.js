import React from "react";
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import img from "./imgs/methodology.png";
import Card from 'react-bootstrap/Card';
import jules from './imgs/jules.jpg';
import dana from './imgs/dana.jpg';
import yash from './imgs/yash.jpg';
import eric from './imgs/eric.jpg';
import CardDeck from 'react-bootstrap/CardDeck';

export default class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container className="mt-4">
                <h4>The Team</h4>
                <CardDeck className="mb-4">
                    <Card style={{ width: '18rem' }}>
                        <Image src={jules} roundedCircle className="m-2" />
                        <Card.Body>
                            <Card.Title>Aarushi Pendharkar</Card.Title>
                            <Card.Text>
                                Aarushi is a student at the University of Pennsylvania,
                                studying Systems Science and Engineering, Mathematics, and Statistics.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Image src={dana} roundedCircle className="m-2" />
                        <Card.Body>
                            <Card.Title>Dana Yi</Card.Title>
                            <Card.Text>
                                Dana is a student at the University of Pennsylvania, studying
                                Computer Engineering.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Image src={eric} roundedCircle className="m-2" />
                        <Card.Body>
                            <Card.Title>Eric Fouh</Card.Title>
                            <Card.Text>
                                Eric is an Assistant Professor of practice at the University of Pennsylvania.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Image src={jules} roundedCircle className="m-2" />
                        <Card.Body>
                            <Card.Title>Jules Pierce</Card.Title>
                            <Card.Text>
                                Jules is a student at the University of Pennsylvania, studying Computer Science.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Image src={yash} roundedCircle className="m-2" />
                        <Card.Body>
                            <Card.Title>Yash Killa</Card.Title>
                            <Card.Text>
                                Yash is a student at University of Pennsylvania, studying Computer Science and
                                Engineering Entrepreneurship.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardDeck>
                <h4>
                    The Study - Learning How To Learn: Identification and categorization
                    of the learning trajectories of students in an introductory programming
                    course
                </h4>
                <p>
                    Through this website, we present the results of a study aiming to analyze
                    students’ learning habits and map them to their performance in an introductory
                    computer science course. Specifically, we have identified common patterns of
                    behavior both in each individual resource as well as across these resources.
                    These resources are Piazza (for Q&A and interactions between students
                    and the teaching staff), Office Hours (for help with concepts and assignments),
                    Panopto recorded videos (for further content beyond lectures), and Codio (for
                    lecture notes and programming class assignments). Using the unique opportunity
                    of an online semester with data that normally is not available in an in-person
                    classroom, we have collected students’ dis-identified learning data and analyzed
                    it to create a model for success in an introductory computer science course.
                </p>
                <h4>Background</h4>
                <p>
                    Computer science, and generally STEM fields, are encouraged as fields of study in
                    college for a well-rounded skill set, post-graduate opportunities, and analytic thinking
                    (Shell & Soh, 2013). However, there are many challenges associated with introductory
                    computer science courses such as lack of prior experience, breadth of skills and concepts
                    covered, and cognitive mastery (Falkner et al., 2014). As such, there has been an interest
                    in the types of behaviors students exhibit when learning computer science, both as a major
                    and as supplemental coursework to another major. Many institutions report a drop rate in
                    the computer science major of 30 to 40%: a statistic that is becoming prevalent among many
                    computer science programs (Beaubouef & Mason, 2005). One major factor identified as
                    contributing to this issue is a lack of feedback provided to students on their progress
                    (Beaubouef & Mason, 2005). Therefore, it is vital that students are able to not only get
                    adequate feedback on their performance but also understand how they can best utilize
                    available resources and learn in a way that maximizes their understanding and mastery
                    of core computer science concepts.
                </p>
                <p>References:</p>
                <ul>
                    <li>
                        Beaubouef, T., & Mason, J. (2005). Why the high attrition rate for computer science
                        students. ACM SIGCSE Bulletin,37(2), 103-106. doi:10.1145/1083431.1083474
                    </li>
                    <li>
                        Falkner, K., Vivian, R., & Falkner, N. J. (2014). Identifying computer science
                        self-regulated learning strategies. Proceedings of the 2014 Conference on Innovation
                        & Technology in Computer Science Education - ITiCSE '14. doi:10.1145/2591708.2591715
                    </li>
                    <li>
                        Shell, D. F., & Soh, L. (2013). Profiles of motivated self-regulation in college
                        computer science courses: Differences in major versus required non-major courses.
                        Journal of Science Education and Technology, 22(6), 899-913.
                        doi:10.1007/s10956-013-9437-9
                    </li>
                </ul>
                <h4> Methodology and Design</h4>
                <Image src={img} fluid />
                <p>
                    The virtual format of the class, resulting from the COVID-19 pandemic, provided us with a unique
                    opportunity to collect and have access to data across multiple learning platforms. We were able to
                    track students’ engagement across the various resources and platforms provided to them. To identify
                    common patterns and map learning trajectories, we developed an algorithm to analyze patterns of learning.
                    Using this algorithm, we were able to determine a set of optimal learning trajectories that can be adapted
                    and suggested to students based on their self-inputted data.
                </p>
                <p>Algorithm Description:</p>
                <ul>
                    <li>
                        Give a data point to each of the four platforms (Piazza, OHQ, Canvas, Codio) for each of the times
                        that they occurred.
                    </li>
                    <li>
                        Only look at data points of the hw if they happened within the timeframe of that specific homework. For
                        example, if a student looks at a piazza post for hw0 while doing hw5, we don’t want that “piazza” point
                        to show up in the hw5 data.
                    </li>
                    <li>
                        To clump together more similar learning trajectories, we “lumped” data points of the same platform within
                        the same day as one point.
                    </li>
                    <li>
                        For example, “piazza, piazza, piazza, codio” is now “piazza, codio” if all three piazza engagements were
                        on the same day.
                    </li>
                    <li>
                        This allows us to have fewer overall trajectories so we can see more of a trend, but have enough unique
                        trajectories that some patterns tend to form (ex. A lot of students check piazza after watching lecture
                        notes/starting assignment/going to OHQ and tend to check piazza daily until the assignment is due).
                    </li>
                </ul>
                <h4>Next Steps</h4>
                <p>
                    For the past three semesters (Spring 2020, Fall 2021, and Spring 2021), the university implemented a policy, in
                    which students could choose to take any course (major requirement elective, etc.) for pass/fail grading. This was
                    implemented to help alleviate the stress and pressures that have been magnified throughout the COVID-19 pandemic.
                    Since, under the university policy, data on which students are taking courses under pass/fail grading is not provided
                    to professors and teaching assistants, we do not have access to whether or not a student is taking the introductory
                    computer science course in question for pass/fail grading. Therefore, we were not able to study the effects of pass/fail
                    grading on student performance as a covariate. After the pandemic ends, it would be interesting to compare learning
                    trajectories of normal grading versus learning trajectories of pass/fail grading if we are able to get this retroactive
                    information.
                </p>
                <p>
                    Furthemore, given that we had access to a fairly small sample of data (only the Fall 2021 semester was completely online
                    at the time we began data collection), the learning trajectories we found through our analysis would likely become more robust,
                    in both accuracy and representation of the student population, with much more data. Thus, with more semesters of data, we would
                    like to conduct big data analytics to pinpoint the optimal learning trajectories in a large sample set.
                </p>
                <p>
                    Disclaimer: Our goal here was to analyze data and provide optimal learning trajectories based on the data we have. This is in no
                    way all-inclusive or a definitive solution to getting a better grade. We hope that researchers continue our work and refine our
                    methods to develop algorithms based on much more data than we had access to, as this is an important project to us, and we sincerely
                    believe in its benefit to students.
                </p>
            </Container>
        )
    }
}