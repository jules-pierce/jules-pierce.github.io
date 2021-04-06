import React from "react";
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'

export default class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container className="mt-4">
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
                <Image src={"./imgs/methodology.png"} fluid />
            </Container>
        )
    }
}