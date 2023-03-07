import React from 'react';
import '../styles/Navigation.css';
import {Button, Row, Col} from "antd";
import {SocialIcon} from "react-social-icons";
import {BsDiscord, BsTwitter} from "react-icons/bs";
import logoNav from "../assets/logo-n.png";

const Navigation = () => {
    return (
        <div className="navbar">
            <Row justify="space-between" align={"middle"} className="navbar-wrapper">


                {/*Logo*/}
                <Col
                    xxl={{span: 4}}
                >
                    <Row justify="space-between" align={"middle"}>
                        <Col
                            xxl={{span: 8}}
                        >
                            <Row justify={"end"} align={"middle"}>
                                <p className="logo-name" style={{margin: '0'}}>Eager</p>
                            </Row>
                        </Col>
                        <Col
                            xxl={{span: 8}}
                        >
                            <Row justify={"center"} align={"middle"}>
                                <img className="logo" src={logoNav} alt="logo"/>
                            </Row>
                        </Col>
                        <Col
                            xxl={{span: 6}}
                        >
                            <Row justify={"start"} align={"middle"}>
                                <p className="logo-name" style={{margin: '0'}}>Emu</p>
                            </Row>
                        </Col>
                    </Row>
                </Col>


                {/*Menu Item*/}
                <Col
                    xxl={{span: 6}}
                >
                    <Row justify="space-between" align={"middle"}>
                            <a href="/">
                                <span className="middle-menu-item">HOME</span>
                            </a>
                            <a href="https://veace.xyz/">
                                <span className="middle-menu-item">MARKETPLACE</span>
                            </a>
                    </Row>
                </Col>


                {/*Right*/}
                <Col
                    xxl={{span: 6}}
                >
                    <Row justify="space-between" align={"middle"}>

                        <Col
                            xxl={{span: 12}}
                            className="right-menu-item">
                            <a href="https://twitter.com/_classnow_">
                                <BsTwitter className="social-link-item"/>
                            </a>
                            <a href="https://discord.gg/pGhp3BjQ">
                                <BsDiscord className="social-link-item"/>
                            </a>
                        </Col>

                        <Col
                            xxl={{span: 12}}
                            className="right-menu">
                            <Row justify={"end"} align={"middle"}>
                                <Col
                                    className="right-menu-item">
                                    <Button className="connect-button" size="large"
                                            href="https://veace.xyz/">CONNECT</Button>
                                </Col>
                            </Row>
                        </Col>

                    </Row>
                </Col>


            </Row>
        </div>
    )
        ;
}

export default Navigation;
