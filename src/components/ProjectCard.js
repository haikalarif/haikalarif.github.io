import React from "react";
import { Col } from "react-bootstrap";

const ProjectCard = ({ title, description, categories, imgUrl }) => {
    return (
        <Col sm={6} md={4} className="d-flex justify-content-center">
            <div className="proj-imgbx">
                <img src={imgUrl} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <br />
                    <span>({categories})</span>
                </div>
            </div>
        </Col>
    )
}

export default ProjectCard;