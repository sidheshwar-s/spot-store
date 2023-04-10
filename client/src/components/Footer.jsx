import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import spotLogo from "../images/spotlogo.png";

const Footer = () => {
    return (
        <div className="footer_container">
            <Container>
                <Row>
                    <Col md={6} xs={12}>
                        <div className="footer_logo_container">
                            <h4 className="footer_logo">
                                <span>
                                    <img src={spotLogo} alt="spot logo" />
                                </span>
                            </h4>
                            <p className="footer_description">
                                Spot Store provides you a platform to buy and
                                sell second hand goods online
                            </p>
                        </div>
                    </Col>
                    <Col md={3} xs={4}>
                        <h5 className="about_us_heading">About Us</h5>
                        <ul className="navlinks">
                            <li className="navlink">
                                <a href="#/">Home</a>
                            </li>
                            <li className="navlink">
                                <a href="#/">Services</a>
                            </li>
                            <li className="navlink">
                                <a href="#/">Online Booking</a>
                            </li>
                            <li className="navlink">
                                <a href="#/">About</a>
                            </li>
                            <li className="navlink">
                                <a href="#/">Blog</a>
                            </li>
                            <li className="navlink">
                                <a href="#/">Contact</a>
                            </li>
                        </ul>
                    </Col>
                    <Col md={3} xs={8}>
                        <h5 className="about_us_heading">About Us</h5>
                        <ul className="navlinks">
                            <li className="nav_li">
                                <p className="navlink">+91 9876543210</p>
                            </li>
                            <li className="nav_li">
                                <p className="navlink">
                                    We are a team of 3 developers.
                                    <br /> 1) Sidheshwar
                                    <br /> 2) Arun Kumar
                                    <br /> 3) Sunil Kumar
                                </p>
                            </li>
                            <li className="nav_li">
                                <p className="navlink">spotstore@gmail.com</p>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;
