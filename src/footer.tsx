import React from 'react';
import './landing-page.css';
import {Button, Col, Row} from "antd";
import {SocialIcon} from "react-social-icons";
import {BsDiscord, BsLinkedin, BsTelegram, BsTwitter} from "react-icons/bs";

function Footer() {
    return (
        <div className="footer">
            <Row justify={"center"} align={"middle"} style={{padding: '50px 0'}}>
                <Col span={9}>
                    <Row justify={"space-around"} align={"middle"}>
                        <a href="https://veace.xyz/">
                            <p className="footer-menu">Marketplace</p>
                        </a>
                        <p className="footer-menu">Story</p>
                        <Row align={"middle"}>
                            <a href="https://www.theclassnow.com/index.html">
                                <p className="footer-menu">ClassNow</p>
                            </a>
                            <a href="https://www.linkedin.com/company/classnow/">
                                <BsLinkedin className="footer-linkedin"/>
                            </a>
                        </Row>
                    </Row>
                </Col>
                <Col span={5} offset={3}>
                    <Row justify={"end"} align={"middle"}>
                        <p className="footer-sentence">Chat with Eager Emu</p>
                        <a href="https://discord.gg/pGhp3BjQ">
                            <BsDiscord className="footer-social-icon"/>
                        </a>
                    </Row>
                    <Row justify={"end"} align={"middle"}>
                        <p className="footer-sentence">Keep up with Eager Emu</p>
                        <a href="https://twitter.com/_classnow_">
                            <BsTwitter className="footer-social-icon"/>
                        </a>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default Footer;
