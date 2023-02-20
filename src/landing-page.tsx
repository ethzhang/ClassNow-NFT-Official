import React, {useState} from 'react';
// import {ethers} from "ethers";
import './landing-page.css';
import {Button, Card, Col, Row, Image} from "antd";
import Navbar from "./navbar";
import Footer from "./footer";
import nft1 from "./1.png";
import nft2 from "./2.png";
import nft3 from "./3.png";
import nft4 from "./4.png";
import nft11 from "./11.png";
import nft12 from "./12.png";
import roadmap1 from "./01.png";
import roadmap2 from "./02.png";
import roadmap3 from "./03.png";
import roadmap4 from "./04.png";
import roadmap5 from "./05.png";
import mainPic from "./f.png"
import {SocialIcon} from 'react-social-icons';

function LandingPage() {
    // const {ethereum} = window;
    //
    // const handleConnect = async () => {
    //     if (ethereum) {
    //         ethereum.request({method: 'eth_requestAccounts'})
    //             .then((res: any[]) => {
    //                 handleAccountChange(res[0]);
    //                 getAccountBalance(res[0]);
    //             })
    //     } else {
    //         message.warning("Install Metamask please");
    //     }
    // }
    //
    // const handleAccountChange = async (newAccount: any) => {
    //     this.setState({defaultAccount: newAccount});
    //     getAccountBalance(newAccount.toString());
    // }
    //
    // const getAccountBalance = (account: any) => {
    //     ethereum.request({method: 'eth_getBalance', params: [account, 'latest']})
    //         .then((balance: any) => {
    //             this.setState({userBalance: ethers.formatEther(balance)});
    //             sessionStorage.setItem('balance', ethers.formatEther(balance));
    //         })
    // }

    return (
        <div className="app">
            <Navbar/>

            <div className="main-wrapper">
                <Row justify={"start"} align={"middle"}>
                    <Col style={{padding: '0', margin: '0'}} span={10}>
                        <Row justify={"start"} align={"bottom"}>
                            <img className="main-nft-pic" width={'100%'} src={nft1} alt="nft"/>
                        </Row>
                    </Col>
                    <Col style={{margin: '0 0 0 200px'}}>
                        <SocialIcon className="main-logo" url="https://twitter.com/_classnow_" fgColor="#FDDD4E"
                                    bgColor="#363A59"/>
                        <p className="main-sentence">COLLECT THE&nbsp;</p>
                        <Row>
                            <p className="main-sentence-underlined">FIRST LAUNCH</p>
                            <p className="main-sentence">!</p>
                        </Row>
                        <p className="main-count">5000 / 5000 NFTs</p>
                        <a href="https://veace.xyz/">
                            <Button className="main-buy-button">BUY NOW</Button>
                        </a>
                    </Col>
                </Row>
            </div>
            <hr className="solid"/>

            <div className="meet-wrapper">
                <Row justify={"center"}>
                    <Col span={20}>
                        <Row align={"middle"}>
                            <Col span={12}>
                                <Card className="meet-card">
                                    <p className="session-title">MEET EMU</p>
                                    <p className="meet-content">
                                        <strong>More than flex! &nbsp;&nbsp;</strong>
                                        Eager Emu is a collection of 5000 unique NFTs, each of which is a authentic art
                                        treasure.</p>
                                    <p className="meet-content">
                                        <strong>The mascot and spirit of ClassNow!<br/></strong>
                                        Eager Emu is always eager to learn. Just like&nbsp;
                                        <a className="link"
                                           href="https://www.theclassnow.com/index.html">ClassNow</a> is always on the
                                        move, empowering educators and businesses to share the knowledge.</p>
                                    <p className="meet-content">
                                        <strong>About utility!</strong>&nbsp;
                                        Holders are claiming their perks and have the previledge to enjoy the upcoming
                                        premire ClassNow features.
                                    </p>
                                </Card>
                            </Col>
                            <Col style={{padding: '64px'}} span={12}>
                                <Row gutter={[16, 16]}>
                                    <Col span={12}><img width={'100%'} src={nft11} alt="nft"/></Col>
                                    <Col span={12}><img width={'100%'} src={nft2} alt="nft"/></Col>
                                    <Col span={12}><img width={'100%'} src={nft3} alt="nft"/></Col>
                                    <Col span={12}><img width={'100%'} src={nft4} alt="nft"/></Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
            <hr className="solid"/>

            <div className="roadmap-wrapper">
                <Card className="roadmap-card">
                    <p className="session-title">ROADMAP</p>
                    <Row justify={"start"} align={"middle"}>
                        <Col span={10}>
                            <p className="roadmap-content-left">Launch Eager Emu NFT Collection</p>
                        </Col>
                        <Col span={4}>
                            <img className="roadmap-image" src={roadmap1} alt="nft"/>
                        </Col>
                    </Row>
                    <Row justify={"start"} align={"middle"}>
                        <Col span={4} offset={10}>
                            <img className="roadmap-image" src={roadmap2} alt="nft"/>
                        </Col>
                        <Col span={10}>
                            <p className="roadmap-content-left">Launch Eager Emu NFT Collection</p>
                        </Col>
                    </Row>
                    <Row justify={"start"} align={"middle"}>
                        <Col span={10}>
                            <p className="roadmap-content-left">Launch Eager Emu NFT Collection</p>
                        </Col>
                        <Col span={4}>
                            <img className="roadmap-image" src={roadmap3} alt="nft"/>
                        </Col>
                    </Row>
                    <Row justify={"start"} align={"middle"}>
                        <Col span={4} offset={10}>
                            <img className="roadmap-image" src={roadmap4} alt="nft"/>
                        </Col>
                        <Col span={10}>
                            <p className="roadmap-content-left">Launch Eager Emu NFT Collection</p>
                        </Col>
                    </Row>
                    <Row justify={"start"} align={"middle"}>
                        <Col span={10}>
                            <p className="roadmap-content-left">Launch Eager Emu NFT Collection</p>
                        </Col>
                        <Col span={4}>
                            <img className="roadmap-image" src={roadmap5} alt="nft"/>
                        </Col>
                    </Row>
                </Card>
            </div>
            <hr className="solid"/>

            <div className="team-wrapper">
                <Card className="team-card">
                    <p className="session-title">THE TEAM</p>
                    <Row gutter={[32, 0]} justify={"center"} style={{margin: '0 0 32px'}}>
                        <Col span={6}>
                            <Row className="avatar-row" justify={"center"} align={"middle"}>
                                <img className="team-avatar" src={nft1} alt="nft"/>
                                <div className="profile-mask">
                                    <p className="profile-text profile-padding-top">Serial entrepreneur since 2014</p>
                                    <p className="profile-text">Passionate, creative and community-driven</p>
                                    <p className="profile-text">Ex-telecommunications engineer</p>
                                    <p className="profile-text">Founder of Jia HE Production</p>
                                </div>
                            </Row>
                            <Row justify={"center"} align={"middle"}>
                                <p className="team-name">Jia HE</p>
                            </Row>
                            <Row justify={"center"} align={"middle"}>
                                <p className="team-title">Founder & CEO</p>
                            </Row>
                        </Col>
                        <Col span={6}>
                            <Row className="avatar-row" justify={"center"} align={"middle"}>
                                <img className="team-avatar" src={nft2} alt="nft"/>
                                <div className="profile-mask">
                                    <p className="profile-text profile-padding-top">Director & Tech Lead in Tencent
                                        Technology</p>
                                    <p className="profile-text">Product Specialist in Alibaba DingTalk</p>
                                </div>
                            </Row>
                            <Row justify={"center"} align={"middle"}>
                                <p className="team-name">Ethan Zhang</p>
                            </Row>
                            <Row justify={"center"} align={"middle"}>
                                <p className="team-title">Co-founder & CTO</p>
                            </Row>
                        </Col>
                        <Col span={6}>
                            <Row className="avatar-row" justify={"center"} align={"middle"}>
                                <img className="team-avatar" src={nft3} alt="nft"/>
                                <div className="profile-mask">
                                    <p className="profile-text profile-padding-top">Master of Finance, UNSW</p>
                                    <p className="profile-text">Social Media Influencer</p>
                                </div>
                            </Row>
                            <Row justify={"center"} align={"middle"}>
                                <p className="team-name">Celine Zhong</p>
                            </Row>
                            <Row justify={"center"} align={"middle"}>
                                <p className="team-title">CMO</p>
                            </Row>
                        </Col>
                    </Row>

                    <Row gutter={[32, 0]} justify={"center"}>
                        <Col span={6}>
                            <Row className="avatar-row" justify={"center"} align={"middle"}>
                                <img className="team-avatar" src={nft4} alt="nft"/>
                                <div className="profile-mask">
                                    <p className="profile-text profile-padding-top">Fellow of IET UK</p>
                                    <p className="profile-text">Conjoint Professor of UNSW, UTS & Macquarie
                                        University</p>
                                    <p className="profile-text">Senior Member of IEEE</p>
                                    <p className="profile-text">PhD Supervisor</p>
                                </div>
                            </Row>
                            <Row justify={"center"} align={"middle"}>
                                <p className="team-name">Prof. Shiping Chen</p>
                            </Row>
                            <Row justify={"center"} align={"middle"}>
                                <p className="team-title">Web3 Advisor</p>
                            </Row>
                        </Col>
                        <Col span={6}>
                            <Row className="avatar-row" justify={"center"} align={"middle"}>
                                <img className="team-avatar" src={nft11} alt="nft"/>
                                <div className="profile-mask">
                                    <p className="profile-text profile-padding-top">MGSM, Macquarie University</p>
                                    <p className="profile-text">Operated more than 10 coffee shops</p>
                                    <p className="profile-text">Founded Didi Catering platform</p>
                                </div>
                            </Row>
                            <Row justify={"center"} align={"middle"}>
                                <p className="team-name">Sophie Sun</p>
                            </Row>
                            <Row justify={"center"} align={"middle"}>
                                <p className="team-title">Business Advisor</p>
                            </Row>
                        </Col>
                        <Col span={6}>
                            <Row className="avatar-row" justify={"center"} align={"middle"}>
                                <img className="team-avatar" src={nft12} alt="nft"/>
                                <div className="profile-mask">
                                    <p className="profile-text profile-padding-top">Full Stack Developer</p>
                                </div>
                            </Row>
                            <Row justify={"center"} align={"middle"}>
                                <p className="team-name">Deon Zhang</p>
                            </Row>
                            <Row justify={"center"} align={"middle"}>
                                <p className="team-title">Software Engineer</p>
                            </Row>
                        </Col>
                        <Col span={6}>
                            <Row className="avatar-row" justify={"center"} align={"middle"}>
                                <img className="team-avatar" src={nft2} alt="nft"/>
                                <div className="profile-mask">
                                    <p className="profile-text profile-padding-top">Master of Professional Engineering,
                                        USYD</p>
                                    <p className="profile-text profile-padding-top">Front End Web Developer</p>
                                    <p className="profile-text profile-padding-top">UX/UI Designer</p>
                                </div>
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
            </div>
            <hr className="solid-bottom"/>

            <Footer/>
        </div>
    )
        ;
}

export default LandingPage;
