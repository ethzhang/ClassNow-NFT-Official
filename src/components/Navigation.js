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
                {/*<Col*/}
                {/*    xs={{span: 24}}*/}
                {/*    sm={{span: 24}}*/}
                {/*    md={{span: 24}}*/}
                {/*    lg={{span: 24}}*/}
                {/*    xl={{span: 24}}*/}
                {/*    xxl={{span: 24}}*/}
                {/*    // className="left-menu"*/}
                {/*>*/}
                {/*    <Row>*/}
                <Col
                    xs={{span: 4}}
                    sm={{span: 4}}
                    md={{span: 4}}
                    lg={{span: 4}}
                    xl={{span: 4}}
                    xxl={{span: 4}}
                    // className="logo-wrapper"
                >
                    <Row justify="space-between" align={"middle"}>
                        <Col
                            xs={{span: 8}}
                            sm={{span: 8}}
                            md={{span: 8}}
                            lg={{span: 8}}
                            xl={{span: 8}}
                            xxl={{span: 8}}>
                            <Row justify={"end"} align={"middle"}>
                                <p className="logo-name" style={{margin: '0'}}>Eager</p>
                            </Row>
                        </Col>
                        <Col
                            xs={{span: 8}}
                            sm={{span: 8}}
                            md={{span: 8}}
                            lg={{span: 8}}
                            xl={{span: 8}}
                            xxl={{span: 8}}
                        >
                            <Row justify={"center"} align={"middle"}>
                                <img className="logo" src={logoNav} alt="logo"/>
                            </Row>
                        </Col>
                        <Col
                            xs={{span: 6}}
                            sm={{span: 6}}
                            md={{span: 6}}
                            lg={{span: 6}}
                            xl={{span: 6}}
                            xxl={{span: 6}}>
                            <Row justify={"start"} align={"middle"}>
                                <p className="logo-name" style={{margin: '0'}}>Emu</p>
                            </Row>
                        </Col>
                    </Row>
                </Col>

                <Col
                    xs={{span: 6}}
                    sm={{span: 6}}
                    md={{span: 6}}
                    lg={{span: 6}}
                    xl={{span: 6}}
                    xxl={{span: 6}}
                    // className="middle-menu"
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
                {/*</Col>*/}

                <Col
                    // xs={{span: 12}}
                    //  sm={{span: 12}}
                    //  md={{span: 12}}
                    //  lg={{span: 8}}
                    xl={{span: 2}}
                    xxl={{span: 2}}
                    className="right-menu-item">
                    <a href="https://twitter.com/_classnow_">
                        <BsTwitter className="social-link-item"/>
                    </a>
                    <a href="https://discord.gg/pGhp3BjQ">
                        <BsDiscord className="social-link-item"/>
                    </a>
                </Col>

                <Col
                    // xs={{span: 12}}
                    //  sm={{span: 12}}
                    //  md={{span: 12}}
                    //  lg={{span: 8}}
                    xl={{span: 2}}
                    xxl={{span: 2}}
                    className="right-menu">
                    <Row justify={"end"} align={"middle"}>
                        <Col
                            className="right-menu-item">
                            <Button className="connect-button" size="large"
                                    href="https://veace.xyz/">CONNECT</Button>
                        </Col>
                    </Row>
                </Col>
                {/*    </Row>*/}
                {/*</Col>*/}
            </Row>
        </div>
    );
}

export default Navigation;
