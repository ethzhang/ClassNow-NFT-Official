import React from 'react'
import {Row, Col, Card} from 'antd'
// import nftTeam1 from "../../assets/nftTeam1.png";
// import nftTeam2 from "../../assets/nftTeam2.png";
// import nftTeam3 from "../../assets/nftTeam3.png";
// import nftTeam4 from "../../assets/nftTeam4.png";
// import nftTeam5 from "../../assets/nftTeam5.png";
// import nftTeam6 from "../../assets/nftTeam6.png";
// import nftTeam7 from "../../assets/nftTeam7.png";
import styles from "../../styles/Main.module.css"

const Team = () => {
    return (
        <div className={styles.team_wrapper}>
            <Row justify={"center"}>
                <Col xs={{span: 24}}
                     sm={{span: 22}}
                     md={{span: 22}}
                     lg={{span: 22}}
                     xl={{span: 20}}
                     xxl={{span: 20}}>
                    <Card className={styles.team_card}>
                        <p className={styles.session_title}>THE TEAM</p>
                        <Row gutter={[16, 0]} justify={"center"}>
                            <Col xs={13} sm={13} md={13} lg={17} xl={6} xxl={6}>
                                <Row className="avatar-row" justify={"center"} align={"middle"}>
                                    <img className="team-avatar" src="/nftTeam1.png" alt="nft"/>
                                    {/*<div className="profile-mask">*/}
                                    {/*    <p className="profile-text profile-padding-top">Serial entrepreneur since*/}
                                    {/*        2014</p>*/}
                                    {/*    <p className="profile-text">Passionate, creative and community-driven</p>*/}
                                    {/*    <p className="profile-text">Ex-telecommunications engineer</p>*/}
                                    {/*    <p className="profile-text">Founder of Jia HE Production</p>*/}
                                    {/*</div>*/}
                                </Row>
                                <Row justify={"center"} align={"middle"}>
                                    <p className={styles.team_name}>Jia HE</p>
                                </Row>
                                <Row justify={"center"} align={"middle"}>
                                    <p className={styles.team_title}>Founder & CEO</p>
                                </Row>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={8} xl={6} xxl={6}>
                                <Row className="avatar-row" justify={"center"} align={"middle"}>
                                    <img className="team-avatar" src="/nftTeam2.png" alt="nft"/>
                                    {/*<div className="profile-mask">*/}
                                    {/*    <p className="profile-text profile-padding-top">Director & Tech Lead in Tencent*/}
                                    {/*        Technology</p>*/}
                                    {/*    <p className="profile-text">Product Specialist in Alibaba DingTalk</p>*/}
                                    {/*</div>*/}
                                </Row>
                                <Row justify={"center"} align={"middle"}>
                                    <p className={styles.team_name}>Ethan Zhang</p>
                                </Row>
                                <Row justify={"center"} align={"middle"}>
                                    <p className={styles.team_title}>Co-founder & CTO</p>
                                </Row>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={8} xl={6} xxl={6}>
                                <Row className="avatar-row" justify={"center"} align={"middle"}>
                                    <img className="team-avatar" src="/nftTeam3.png" alt="nft"/>
                                    {/*<div className="profile-mask">*/}
                                    {/*    <p className="profile-text profile-padding-top">Master of Finance, UNSW</p>*/}
                                    {/*    <p className="profile-text">Social Media Influencer</p>*/}
                                    {/*</div>*/}
                                </Row>
                                <Row justify={"center"} align={"middle"}>
                                    <p className={styles.team_name}>Celine Zhong</p>
                                </Row>
                                <Row justify={"center"} align={"middle"}>
                                    <p className={styles.team_title}>CMO</p>
                                </Row>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={8} xl={6} xxl={6}>
                                <Row className="avatar-row" justify={"center"} align={"middle"}>
                                    <img className="team-avatar" src="/nftTeam4.png" alt="nft"/>
                                    {/*<div className="profile-mask">*/}
                                    {/*    <p className="profile-text profile-padding-top">MGSM, Macquarie University</p>*/}
                                    {/*    <p className="profile-text">Operated more than 10 coffee shops</p>*/}
                                    {/*    <p className="profile-text">Founded Didi Catering platform</p>*/}
                                    {/*</div>*/}
                                </Row>
                                <Row justify={"center"} align={"middle"}>
                                    <p className={styles.team_name}>Sophie Sun</p>
                                </Row>
                                <Row justify={"center"} align={"middle"}>
                                    <p className={styles.team_title}>Business Advisor</p>
                                </Row>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={8} xl={6} xxl={6}>
                                <Row className="avatar-row" justify={"center"} align={"middle"}>
                                    <img className="team-avatar" src="/nftTeam5.png" alt="nft"/>
                                    {/*<div className="profile-mask">*/}
                                    {/*    <p className="profile-text profile-padding-top">Fellow of IET UK</p>*/}
                                    {/*    <p className="profile-text">Conjoint Professor of UNSW, UTS & Macquarie*/}
                                    {/*        University</p>*/}
                                    {/*    <p className="profile-text">Senior Member of IEEE</p>*/}
                                    {/*    <p className="profile-text">PhD Supervisor</p>*/}
                                    {/*</div>*/}
                                </Row>
                                <Row justify={"center"} align={"middle"}>
                                    <p className={styles.team_name}>Prof. Shiping Chen</p>
                                </Row>
                                <Row justify={"center"} align={"middle"}>
                                    <p className={styles.team_title}>Web3 Advisor</p>
                                </Row>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={8} xl={6} xxl={6}>
                                <Row className="avatar-row" justify={"center"} align={"middle"}>
                                    <img className="team-avatar" src="/nftTeam6.png" alt="nft"/>
                                    {/*<div className="profile-mask">*/}
                                    {/*    <p className="profile-text profile-padding-top">Full Stack Developer</p>*/}
                                    {/*</div>*/}
                                </Row>
                                <Row justify={"center"} align={"middle"}>
                                    <p className={styles.team_name}>Deon Zhang</p>
                                </Row>
                                <Row justify={"center"} align={"middle"}>
                                    <p className={styles.team_title}>Software Engineer</p>
                                </Row>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={8} xl={6} xxl={6}>
                                <Row className="avatar-row" justify={"center"} align={"middle"}>
                                    <img className="team-avatar" src="/nftTeam7.png" alt="nft"/>
                                    {/*<div className="profile-mask">*/}
                                    {/*    <p className="profile-text profile-padding-top">Master of Professional*/}
                                    {/*        Engineering,*/}
                                    {/*        USYD</p>*/}
                                    {/*    <p className="profile-text profile-padding-top">Front End Web Developer</p>*/}
                                    {/*    <p className="profile-text profile-padding-top">UX/UI Designer</p>*/}
                                    {/*</div>*/}
                                </Row>
                                <Row justify={"center"} align={"middle"}>
                                    <p className={styles.team_name}>Anna Tang</p>
                                </Row>
                                <Row justify={"center"} align={"middle"}>
                                    <p className={styles.team_title}>Software Engineer</p>
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