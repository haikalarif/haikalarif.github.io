import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/github.svg';

const Footer = () => {
    return (
        <footer className="footer pt-5">
            <Container>
                <Row className="align-items-center">
                    <Col sm={6} className="text-start">
                        <h1 className="logo">Haikal</h1>
                        {/* <img src={logo} alt="Logo" /> */}
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/haikal-arif-45456b1ab" target="_blank"><img src={navIcon1} /></a>
                            <a href="https://github.com/haikalarif" target="_blank"><img src={navIcon4} /></a>
                            <a href="https://www.instagram.com/ikalarif" target="_blank"><img src={navIcon3} /></a>
                        </div>
                        <p>Copyright 2023, All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer