import ProjectCard from "../Components/ProjectCard";
import projectsData from "../data/projects.json";
import { Container, Row, Col } from "react-bootstrap";

export function Projects() {
  return (
    <Container className="py-5">
      <Row className="g-4">
        {projectsData.map((project, idx) => {
          // Convert image file name from JSON to proper URL
          const imgUrl = new URL(`../assets/${project.image}`, import.meta.url).href;
          return (
            <Col key={idx} xs={12} md={6} lg={4}>
              <ProjectCard {...project} imageUrl={imgUrl} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
