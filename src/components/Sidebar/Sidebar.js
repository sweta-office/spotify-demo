import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { GoHomeFill } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { BiLibrary } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import MainTitle from "../Title/MainTitle";
import SidebarStyled from "./SidebarStyled";
import Title from "../Title/Title";
import Description from "../Title/Description";
import RoundButton from "../Button/RoundButton";
import BlackButton from "../Button/BlackButton";
const Sidebar = ({ cssSidebar, styleSidebar }) => {
    return (
        <SidebarStyled>
            <div className={cssSidebar} style={styleSidebar}>
                <Container>
                    <Container className="background">
                        <Row className="textHeight">
                            <Col sm={2}><GoHomeFill size={30} color="#fff" />
                            </Col>
                            <Col>

                                <Title title={"Home"} />
                            </Col>
                        </Row>

                        <Row className="textHeight">
                            <Col sm={2}><FiSearch size={30} color="#fff" />
                            </Col>
                            <Col>

                                <Title title={"Search"} />
                            </Col>
                        </Row>
                    </Container>

                    <Container className="background mt-2">
                        <Row className="textHeight">
                            <Col sm={2}><BiLibrary size={30} color="#fff" />
                            </Col>
                            <Col>

                                <MainTitle mainTitle={"Your Library"} />
                            </Col>
                            <Col sm={2}>
                                <AiOutlinePlus size={30} color="#fff" />
                            </Col>
                        </Row>


<div className="scroll">


                        <Container className="background2">
                            <Row className="m-1">

                                <Description description={"Create your first playlist"} />
                                <h6 className="Text mt-2">It's easy, we'll help you</h6>
                                <RoundButton buttonText={"Create Playlist"} />
                            </Row>
                        </Container>

                        <Container className="background2">
                            <Row className="m-1">

                                <Description description={"Let's find some podcasts to follow"} />
                                <h6 className="Text mt-2">We'll keep you updated on new episodes</h6>
                                <RoundButton buttonText={"Browse podcasts"} />
                            </Row>
                        </Container>
</div>
                        <Container className="mt-5">
                            <Row>
                                <Col>  <a className="aTag" href="https://www.spotify.com/in-en/legal/end-user-agreement/">
                                    Legal
                                </a></Col>
                                <Col>  <a className="aTag" href="https://www.spotify.com/in-en/privacy">
                                    Privacy Center
                                </a></Col>
                                <Col>  <a className="aTag" href="https://www.spotify.com/in-en/legal/privacy-policy/">
                                    Privacy Policy
                                </a></Col>
                            </Row>
                            <Row>
                                <Col>
                                    <a className="aTag" href="https://www.spotify.com/in-en/legal/cookies-policy/">
                                        Cookies
                                    </a>
                                </Col>
                                <Col>  <a className="aTag" href="https://www.spotify.com/in-en/legal/privacy-policy/#s3">
                                    About Ads
                                </a></Col>
                                <Col>  <a className="aTag" href="https://www.spotify.com/in-en/accessibility">
                                    Accessibility
                                </a></Col>
                            </Row>
                            <Row>
                                <Col>
                                    <a className="aTag" href="https://www.spotify.com/in-en/legal/cookies-policy/" target="_blank">
                                        Cookies
                                    </a>
                                </Col>
                            </Row>
                            <div className="mt-5">

                            <BlackButton buttonText={"English"}/>
                            </div>
                        </Container>
                    </Container>
                </Container>
            </div>
        </SidebarStyled>
    );
};

export default Sidebar;