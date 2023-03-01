import React from 'react'
import {Row, Col, Card} from 'antd'
import nft1 from "../../assets/1.png";
import nft2 from "../../assets/2.png";
import nft3 from "../../assets/3.png";
import nft4 from "../../assets/4.png";

import nft11 from "../../assets/11.png";
import nft12 from "../../assets/12.png";

const Team = () => {
    return (
        <div className="team-wrapper">
            <Row justify={"center"}>
                <Col xs={{span: 24}}
                     sm={{span: 22}}
                     md={{span: 22}}
                     lg={{span: 22}}
                     xl={{span: 20}}
                     xxl={{span: 20}}>
                    <Card className="team-card">
                        <p className="session-title">THE TEAM</p>
                        <Row gutter={[16, 0]} justify={"center"}>
                            <Col xs={13} sm={13} md={13} lg={17} xl={6} xxl={6}>
                                <Row className="avatar-row" justify={"center"} align={"middle"}>
                                    <img className="team-avatar" src={nft1} alt="nft"/>
                                    {/*<div className="profile-mask">*/}
                                    {/*    <p className="profile-text profile-padding-top">Serial entrepreneur since*/}
                                    {/*        2014</p>*/}
                                    {/*    <p className="profile-text">Passionate, creative and community-driven</p>*/}
                                    {/*    <p className="profile-text">Ex-telecommunications engineer</p>*/}
                                    {/*    <p className="profile-text">Founder of Jia HE Production</p>*/}
                                    {/*</div>*/}
                                </Row>
                                <Row justify={"center"} align={"middle"}>
                                    <p className="team-name">Jia HE</p>
                                </Row>
                                <Row justify={"center"} align={"middle"}>
                                    <p className="team-title">Founder & CEO</p>
                                </Row>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={8} xl={6} xxl={6}>
                                <Row className="avatar-row" justify={"center"} align={"middle"}>
                                    <img className="team-avatar" src={nft2} alt="nft"/>
                                    {/*<div className="profile-mask">*/}
                                    {/*    <p className="profile-text profile-padding-top">Director & Tech Lead in Tencent*/}
                                    {/*        Technology</p>*/}
                                    {/*    <p className="profile-text">Product Specialist in Alibaba DingTalk</p>*/}
                                    {/*</div>*/}
                                </Row>
                                <Row justify={"center"} align={"middle"}>
                                    <p className="team-name">Ethan Zhang</p>
                                </Row>
                                <Row justify={"center"} align={"middle"}>
                                    <p className="team-title">Co-founder & CTO</p>
                                </Row>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={8} xl={6} xxl={6}>
                                <Row className="avatar-row" justify={"center"} align={"middle"}>
                                    <img className="team-avatar" src={nft3} alt="nft"/>
                                    {/*<div className="profile-mask">*/}
                                    {/*    <p className="profile-text profile-padding-top">Master of Finance, UNSW</p>*/}
                                    {/*    <p className="profile-text">Social Media Influencer</p>*/}
                                    {/*</div>*/}
                                </Row>
                                <Row justify={"center"} align={"middle"}>
                                    <p className="team-name">Celine Zhong</p>
                                </Row>
                                <Row justify={"center"} align={"middle"}>
                                    <p className="team-title">CMO</p>
                                </Row>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={8} xl={6} xxl={6}>
                                <Row className="avatar-row" justify={"center"} align={"middle"}>
                                    <img className="team-avatar" src={nft11} alt="nft"/>
                                    {/*<div className="profile-mask">*/}
                                    {/*    <p className="profile-text profile-padding-top">MGSM, Macquarie University</p>*/}
                                    {/*    <p className="profile-text">Operated more than 10 coffee shops</p>*/}
                                    {/*    <p className="profile-text">Founded Didi Catering platform</p>*/}
                                    {/*</div>*/}
                                </Row>
                                <Row justify={"center"} align={"middle"}>
                                    <p className="team-name">Sophie Sun</p>
                                </Row>
                                <Row justify={"center"} align={"middle"}>
                                    <p className="team-title">Business Advisor</p>
                                </Row>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={8} xl={6} xxl={6}>
                                <Row className="avatar-row" justify={"center"} align={"middle"}>
                                    <img className="team-avatar" src={nft4} alt="nft"/>
                                    {/*<div className="profile-mask">*/}
                                    {/*    <p className="profile-text profile-padding-top">Fellow of IET UK</p>*/}
                                    {/*    <p className="profile-text">Conjoint Professor of UNSW, UTS & Macquarie*/}
                                    {/*        University</p>*/}
                                    {/*    <p className="profile-text">Senior Member of IEEE</p>*/}
                                    {/*    <p className="profile-text">PhD Supervisor</p>*/}
                                    {/*</div>*/}
                                </Row>
                                <Row justify={"center"} align={"middle"}>
                                    <p className="team-name">Prof. Shiping Chen</p>
                                </Row>
                                <Row justify={"center"} align={"middle"}>
                                    <p className="team-title">Web3 Advisor</p>
                                </Row>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={8} xl={6} xxl={6}>
                                <Row className="avatar-row" justify={"center"} align={"middle"}>
                                    <img className="team-avatar" src={nft12} alt="nft"/>
                                    {/*<div className="profile-mask">*/}
                                    {/*    <p className="profile-text profile-padding-top">Full Stack Developer</p>*/}
                                    {/*</div>*/}
                                </Row>
                                <Row justify={"center"} align={"middle"}>
                                    <p className="team-name">Deon Zhang</p>
                                </Row>
                                <Row justify={"center"} align={"middle"}>
                                    <p className="team-title">Software Engineer</p>
                                </Row>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={8} xl={6} xxl={6}>
                                <Row className="avatar-row" justify={"center"} align={"middle"}>
                                    <img className="team-avatar" src={nft2} alt="nft"/>
                                    {/*<div className="profile-mask">*/}
                                    {/*    <p className="profile-text profile-padding-top">Master of Professional*/}
                                    {/*        Engineering,*/}
                                    {/*        USYD</p>*/}
                                    {/*    <p className="profile-text profile-padding-top">Front End Web Developer</p>*/}
                                    {/*    <p className="profile-text profile-padding-top">UX/UI Designer</p>*/}
                                    {/*</div>*/}
                                </Row>
                                <Row justify={"center"} align={"middle"}>
                                    <p className="team-name">Anna Tang</p>
                                </Row>
                                <Row justify={"center"} align={"middle"}>
                                    <p className="team-title">Software Engineer</p>
                                </Row>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Team