import React from 'react';
import './landing-page.css';
import {Button, Row} from "antd";
import {SocialIcon} from "react-social-icons";
import {BsDiscord, BsTelegram, BsTwitter} from "react-icons/bs";

function Navbar() {
    return (
        <div className="navbar">
            <div className="left-menu">
                <div className="logo-wrapper">
                    <Row align={"middle"}>
                        <p className="logo-name" style={{margin: '0'}}>Eager</p>
                        <SocialIcon className="logo" url="https://twitter.com/_classnow_" fgColor="#ffffff"
                                    bgColor="#05090e"/>
                        <p className="logo-name" style={{margin: '0'}}>Emu</p>
                    </Row>
                </div>
                <div className="left-menu-item">
                    <Button className="menu-button">HOME</Button>
                    <Button className="menu-button">MARKETPLACE</Button>
                    <Button className="menu-button">STORY</Button>
                </div>
            </div>
            <div className="right-menu">
                <div className="right-menu-item">
                    <Button className="social-link-item" size={"large"}
                            href="https://twitter.com/_classnow_"
                            icon={<BsTwitter/>}/>
                    <Button className="social-link-item" size={"large"}
                            href="https://discord.gg/pGhp3BjQ"
                            icon={<BsDiscord/>}/>
                    <Button className="social-link-item" size={"large"} href="https://telegram.org/"
                            icon={<BsTelegram/>}/>
                </div>
                <div className="right-menu-item">
                    <Button className="connect-button" size="large"> CONNECT TO VEACE</Button>
                </div>
            </div>
        </div>
    )
        ;
}

export default Navbar;
