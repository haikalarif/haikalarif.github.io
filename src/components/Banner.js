import React from 'react';
import { useState, useEffect } from 'react';
import { Button, Container, Col, Modal, Row } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.svg';
import peopleImg from '../assets/img/ikal.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Web Designer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta)

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <>
        <section className='banner' id='home'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({ isVisible }) => 
                        <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                            <span className='tagline'>Welcome to My Portfolio</span>
                            <h1>{`Hi, I'm Haikal `}
                                <br /><span className='wrap'>({text})</span>
                            </h1>
                            <p>I am a web developer who is very enthusiastic in exploring skills in software engineering, especially in web development. I once made a website application using the JavaScript language including Node JS, Express Js and React JS. I have also built a website using PHP with the Laravel Framework.</p>
                            <button onClick={handleShow}>Let's Connect <ArrowRightCircle size={25}/></button>
                        </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={peopleImg} alt="Headder Img" />
                    </Col>
                </Row>
            </Container>
        </section>
        <Modal show={show} onHide={handleClose} animation={true} centered>
            <Modal.Header closeButton className='text-dark'>
                <Modal.Title>Contact Me</Modal.Title>
            </Modal.Header>
            <Modal.Body className='text-dark'>
                <p><b>Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b> : haikal@gmail.com</p>
                <p><b>No. Handphone &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b> : +62 821 1234 5678</p>
                <p><b>Instagram &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b> : @ikalarif</p>
                <p><b>Github &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b> : <a href="https://github.com/haikalarif" target="_blank">haikalarif</a></p>
                <p><b>Linkedin &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b> : <a href="https://www.linkedin.com/in/haikal-arif-45456b1ab" target="_blank">Haikal Arif</a></p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    </>
    )
}

export default Banner;