import React from 'react'
import {Row, Col, Card} from 'antd'
import roadmap1 from "../../assets/01.png";
import roadmap2 from "../../assets/02.png";
import roadmap3 from "../../assets/03.png";
import roadmap4 from "../../assets/04.png";
import roadmap5 from "../../assets/05.png";

const Roadmap = () => {
    return (
        <div className="roadmap-wrapper">
            <Row justify={"center"}>
                <Col xs={{span: 24}}
                     sm={{span: 22}}
                     md={{span: 22}}
                     lg={{span: 22}}
                     xl={{span: 20}}
                     xxl={{span: 20}}>
                    <Card className="roadmap-card">
                        <p className="session-title">ROADMAP</p>
                        <Row justify={"start"} align={"middle"}>
                            <Col span={10}>
                                <p className="roadmap-content-left">
                                    <strong>Q2 2020</strong>
                                    <br/>Establishment of ClassNow
                                    <br/><strong>Q4 2022</strong>
                                    <br/>Turnover reaches 500,000 AUD</p>
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
                                <p className="roadmap-content-left">
                                    <strong>Q2 2023</strong>
                                    <br/>ClassNow Eager Emu NFT public sale</p>
                            </Col>
                        </Row>
                        <Row justify={"start"} align={"middle"}>
                            <Col span={10}>
                                <p className="roadmap-content-left">
                                    <strong>Q3 2023</strong>
                                    <br/>ClassNow token (CLN) sale
                                    <br/>ClassNow Learn/Share & Earn program</p>
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
                                <p className="roadmap-content-left">
                                    <strong>Q4 2023</strong>
                                    <br/>ClassNow DAO (decentralized autonomous organization)
                                    <br/>Community governance of ClassNow</p>
                            </Col>
                        </Row>
                        <Row justify={"start"} align={"middle"}>
                            <Col span={10}>
                                <p className="roadmap-content-left">
                                    <strong>Q1 2024</strong>
                                    <br/>ClassNow ICO (initial coin offering)
                                    <br/>Integration of blockchain technology into the ClassNow platform to enhance
                                    security and transparency</p>
                            </Col>
                            <Col span={4}>
                                <img className="roadmap-image" src={roadmap5} alt="nft"/>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Roadmap