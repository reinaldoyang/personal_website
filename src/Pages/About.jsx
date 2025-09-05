import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Chip from "@mui/material/Chip";
import "../about.css";

export function About() {
  const skills = [
    "Python",
    "C++",
    "HTML",
    "CSS",
    "ReactJS",
    "React-Native (Prior experience)",
    "SQL",
    "ROS2",
    "Computer Vision",
    "Deep Learning",
  ];
  return (
    <div className="center-card">
        <Card className="custom-card">
            <Card.Header>
              <h3>Education</h3>
            </Card.Header>
            <Card.Body>
                <h5>National ChengKung University</h5>
                <p>Master of Science in Computer Science Department Artificial Intelligence Program<br/>
                Advised by Prof. Wei Ta Chu | MMCV Lab</p>
                <h5>National Taiwan University of Science and Technology, Taipei, Taiwan</h5>
                <p>Bachelor of Science in Mechanical Engineering<br/>
                Advised by Prof. Chyi Yeu Lin | Robotics lab</p>
            </Card.Body>
        </Card>
        <Card className="custom-card">
          <Card.Header>
              <h3>Skills</h3>
          </Card.Header>
          <Card.Body>
            {skills.map((skill, index) => (
              <Chip key={index} label={skill} style={{ marginRight: "8px" }} />
            ))}
          </Card.Body>
        </Card>
        <Card className="custom-card">
          <Card.Header>
              <h3>Work Experience</h3>
          </Card.Header>
          <Card.Body>
                <h6>HTC VIVE | Mechanical Engineer</h6>
                <h6>Young Optics  | Mechanical Engineer Intern</h6>
                <h6>Jiayi CNC  | Mechanical Engineer Intern</h6>
            </Card.Body>
        </Card>
    </div>
  );
}
