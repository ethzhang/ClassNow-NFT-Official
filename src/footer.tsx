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
                        <Button className="social-link-item" type="default" size={"large"}
                                href="https://twitter.com/_classnow_"
                                icon={<BsTwitter/>}/>
                        <Button className="social-link-item" type="default" size={"large"}
                                href="https://discord.gg/pGhp3BjQ"
                                icon={<BsDiscord/>}/>
                        <Button className="social-link-item" type="default" size={"large"} href="https://telegram.org/"
                                icon={<BsTelegram/>}/>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default Footer;
