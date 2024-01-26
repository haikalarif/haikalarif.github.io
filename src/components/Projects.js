import React from "react";
import { Col, Container,Nav, Row, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import rcma from "../assets/img/rcma.png";
import tkb from "../assets/img/tkb.png";
import docman from "../assets/img/docman.png";
import ticket from "../assets/img/ticket.png";
import LMSCorp from "../assets/img/lms-corporate.png";
import eFlight from "../assets/img/e-flight.png";
import rba from "../assets/img/rba.png";
import carRental from "../assets/img/car-rental.png";
import olshop from "../assets/img/olshop.png";
import school from "../assets/img/school.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Projects = () => {
    const projects = [
        {
            title: "Learning Management System",
            description: "LMS & WEB Application",
            categories: "Team",
            imgUrl: LMSCorp,
        },
        {
            title: "Risk Culture Maturity Assessment",
            description: "WEB Application",
            categories: "Team",
            imgUrl: rcma,
        },
        {
            title: "Aplikasi Tingkat Kesehatan",
            description: "WEB Application",
            categories: "Team",
            imgUrl: tkb,
        },
        {
            title: "Support Ticketing",
            description: "WEB Application",
            categories: "Team",
            imgUrl: ticket,
        },
        {
            title: "E-Flight Ticket Platform",
            description: "WEB Application",
            categories: "Team",
            imgUrl: eFlight,
        },
        {
            title: "Document Management",
            description: "WEB Application",
            categories: "Team",
            imgUrl: docman,
        },
    ];

    const projects2 = [
        {
            title: "Risk Based Audit",
            description: "WEB Application",
            categories: "Team",
            imgUrl: rba,
        },
        {
            title: "Car Rental Platform",
            description: "WEB Application & Landing Page",
            categories: "Individual",
            imgUrl: carRental,
        },
        {
            title: "Online Shop",
            description: "Platform & WEB Application",
            categories: "Individual",
            imgUrl: olshop,
        },
        {
            title: "Platform Akademik Sekolah",
            description: "WEB Application & Landing Page",
            categories: "Individual",
            imgUrl: school,
        }
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
                        {({ isVisible }) => 
                        <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                        <h2>Projects</h2>
                        <p>I have experience in several application projects, both as a team and individually. Here are some of the projects that I have worked on:</p>
                        </div>}
                        </TrackVisibility>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project, index) => {
                                            return (
                                                <ProjectCard 
                                                    key={index}
                                                    {...project}
                                                />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Row>
                                    {
                                        projects2.map((project, index) => {
                                            return (
                                                <ProjectCard 
                                                    key={index}
                                                    {...project}
                                                />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} />
        </section>
    )
}

export default Projects;