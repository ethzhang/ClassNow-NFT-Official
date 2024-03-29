import React from 'react';
import styles from "../styles/Footer.module.css"
import {Col, Row} from "antd";
// import {SocialIcon} from "react-social-icons";
import {BsDiscord, BsLinkedin, BsTwitter} from "react-icons/bs";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <Row justify={"center"} align={"middle"} style={{padding: '50px 0'}}>
                <Col xs={{span: 22}}
                     sm={{span: 18}}
                     md={{span: 16}}
                     lg={{span: 22}}
                     xl={{span: 22}}
                     xxl={{span: 22}}>
                    <Row justify={"space-between"} align={"middle"}>
                        <Col xs={{span: 24}}
                             sm={{span: 24}}
                             md={{span: 24}}
                             lg={{span: 11}}
                             xl={{span: 11}}
                             xxl={{span: 9}}>
                            <Row justify={"space-around"} align={"middle"}>
                                <a href="https://veace.xyz/">
                                    <p className={styles.footer_menu}>Marketplace</p>
                                </a>
                                {/*<p className="footer-menu">Story</p>*/}
                                <Row align={"middle"}>
                                    <a href="https://www.theclassnow.com/index.html">
                                        <p className={styles.footer_menu}>ClassNow</p>
                                    </a>
                                    <a href="https://www.linkedin.com/company/classnow/">
                                        <BsLinkedin className={styles.footer_linkedin}/>
                                    </a>
                                </Row>
                            </Row>
                        </Col>
                        <Col xs={{span: 24}}
                             sm={{span: 24}}
                             md={{span: 24}}
                             lg={{span: 11}}
                             xl={{span: 11}}
                             xxl={{span: 9}}>
                            <Row justify={"end"} align={"middle"}>
                                <p className={styles.footer_sentence}>Chat with Eager Emu</p>
                                <a href="https://discord.gg/pGhp3BjQ">
                                    <BsDiscord className={styles.footer_social_icon}/>
                                </a>
                            </Row>
                            <Row justify={"end"} align={"middle"}>
                                <p className={styles.footer_sentence}>Keep up with Eager Emu</p>
                                <a href="https://twitter.com/_classnow_">
                                    <BsTwitter className={styles.footer_social_icon}/>
                                </a>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default Footer;
