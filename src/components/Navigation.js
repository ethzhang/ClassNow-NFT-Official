import React from 'react';
import '../styles/landing-page.css';
import {Button, Row} from "antd";
import {SocialIcon} from "react-social-icons";
import {BsDiscord, BsTwitter} from "react-icons/bs";

const Navigation = () => {
    return (
        <div className="navbar">
            <Row justify="space-between" align={"middle"}>
                <div className="left-menu">
                    <div className="logo-wrapper">
                        <Row align={"middle"}>
                            <p className="logo-name" style={{margin: '0'}}>Eager</p>
                            <SocialIcon className="logo" fgColor="#ffffff" bgColor="#05090e"/>
                            <p className="logo-name" style={{margin: '0'}}>Emu</p>
                        </Row>
                    </div>

                    <div className="middle-menu">
                        <a href="/">
                            <span className="middle-menu-item">HOME</span>
                        </a>
                        <a href="https://veace.xyz/">
                            <span className="middle-menu-item">MARKETPLACE</span>
                        </a>
                        {/*<span className="middle-menu-item">STORY</span>*/}
                    </div>
                </div>

                <div className="right-menu">
                    <div className="right-menu-item">
                        <a href="https://twitter.com/_classnow_">
                            <BsTwitter className="social-link-item"/>
                        </a>
                        <a href="https://discord.gg/pGhp3BjQ">
                            <BsDiscord className="social-link-item"/>
                        </a>
                    </div>
                    <div className="right-menu-item">
                        <Button className="connect-button" size="large" href="https://veace.xyz/">CONNECT</Button>
                    </div>
                </div>
            </Row>
        </div>
    );
}

export default Navigation;
