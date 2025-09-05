import { Card, Button } from "react-bootstrap";
import "../projects.css"
function ProjectCard({title, imageUrl, description, github, demo}){
    return (
        <Card className="project-card">
            {/* Only render the image if imageUrl exists */}
            {imageUrl && <Card.Img variant="top" src={imageUrl} alt={title} className="project-card-img"/>}
            <Card.Body className="project-card-body">
                <div>
                    <Card.Title className="card-title">
                        {title}
                    </Card.Title>
                    <Card.Text className="project-card-text">
                        {description}
                    </Card.Text>
                </div>
                <div className="project-links">
                    {github && (
                        <a href={github} target="_blank" rel="noopener noreferrer" className="project-link">
                        GitHub
                        </a>
                    )}
                    {demo && (
                        <a href={demo} target="_blank" rel="noopener noreferrer" className="project-link">
                        Demo
                        </a>
                    )}
                </div>
            </Card.Body>
        </Card>
    )
}
export default ProjectCard