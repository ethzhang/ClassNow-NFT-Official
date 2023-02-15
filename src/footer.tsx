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
                        <Button className="footer-menu" type="default">Marketplace</Button>
                        <Button className="footer-menu" type="default">ClassNow</Button>
                        <Button className="footer-menu" type="default">Story</Button>
                    </Row>
                </Col>
                <Col span={9}>
                    <Row justify={"center"}>
                        <p className="footer-menu">Keep up with Eager Emu</p>
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
