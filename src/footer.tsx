import React from 'react';
import './landing-page.css';
import {Button, Col, Row} from "antd";
import {SocialIcon} from "react-social-icons";
import {BsDiscord, BsTelegram, BsTwitter} from "react-icons/bs";

function Footer() {
    return (
        <div className="footer">
            <Row align={"middle"} style={{padding: '50px 0'}}>
                <Col span={9} offset={3}>
                    <Row justify={"space-around"}>
                        <a href="https://veace.xyz/">
                            <span className="footer-menu">MARKETPLACE</span>
                        </a>
                        <a href="https://www.theclassnow.com/index.html">
                            <span className="footer-menu">ClassNow</span>
                        </a>
                        <span className="footer-menu">Story</span>
                    </Row>
                </Col>
                <Col span={9}>
                    <Row justify={"center"}>
                        <p className="footer-menu">Keep up with Hungry Emu</p>
                    </Row>
                    <Row justify={"center"}>
                        <a href="https://twitter.com/_classnow_">
                            <BsTwitter className="social-link-item"/>
                        </a>
                        <a href="https://discord.gg/pGhp3BjQ">
                            <BsDiscord className="social-link-item"/>
                        </a>
                        <a href="https://telegram.org/">
                            <BsTelegram className="social-link-item"/>
                        </a>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default Footer;
