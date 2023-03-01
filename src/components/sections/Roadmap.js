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
                        <p className="session-title" style={{padding: '0 64px'}}>ROADMAP</p>
                        <Row gutter={[16, 32]} align={"middle"}>
                            <Col xs={{span: 21}}
                                 sm={{span: 21}}
                                 md={{span: 21}}
                                 lg={{span: 15}}
                                 xl={{span: 12}}
                                 xxl={{span: 12}}>
                                <p className="roadmap-content-right">
                                    <strong>Q2 2020</strong>
                                    <br/>Establishment of ClassNow
                                    <br/><strong>Q4 2022</strong>
                                    <br/>Turnover reaches 500,000 AUD</p>
                            </Col>
                            <Col xs={{span: 3}}
                                 sm={{span: 3}}
                                 md={{span: 3}}
                                 lg={{span: 3}}
                                 xl={{span: 3}}
                                 xxl={{span: 3}}>
                                <img className="roadmap-image" src={roadmap1} alt="roadmap1"/>
                            </Col>

                            <Col xs={{span: 3}}
                                 sm={{span: 3}}
                                 md={{span: 3}}
                                 lg={{span: 3, offset: 6}}
                                 xl={{span: 3, offset: 9}}
                                 xxl={{span: 3, offset: 9}}>
                                <img className="roadmap-image" src={roadmap2} alt="roadmap2"/>
                            </Col>
                            <Col xs={{span: 21}}
                                 sm={{span: 21}}
                                 md={{span: 21}}
                                 lg={{span: 15}}
                                 xl={{span: 12}}
                                 xxl={{span: 12}}>
                                <p className="roadmap-content-left">
                                    <strong>Q2 2023</strong>
                                    <br/>ClassNow Eager Emu NFT public sale</p>
                            </Col>

                            <Col xs={{span: 21}}
                                 sm={{span: 21}}
                                 md={{span: 21}}
                                 lg={{span: 15}}
                                 xl={{span: 12}}
                                 xxl={{span: 12}}>
                                <p className="roadmap-content-right">
                                    <strong>Q3 2023</strong>
                                    <br/>ClassNow token (CLN) sale
                                    <br/>ClassNow Learn/Share & Earn program</p>
                            </Col>
                            <Col xs={{span: 3}}
                                 sm={{span: 3}}
                                 md={{span: 3}}
                                 lg={{span: 3}}
                                 xl={{span: 3}}
                                 xxl={{span: 3}}>
                                <img className="roadmap-image" src={roadmap3} alt="roadmap3"/>
                            </Col>

                            <Col xs={{span: 3}}
                                 sm={{span: 3}}
                                 md={{span: 3}}
                                 lg={{span: 3, offset: 6}}
                                 xl={{span: 3, offset: 9}}
                                 xxl={{span: 3, offset: 9}}>
                                <img className="roadmap-image" src={roadmap4} alt="roadmap4"/>
                            </Col>
                            <Col xs={{span: 21}}
                                 sm={{span: 21}}
                                 md={{span: 21}}
                                 lg={{span: 15}}
                                 xl={{span: 12}}
                                 xxl={{span: 12}}>
                                <p className="roadmap-content-left">
                                    <strong>Q4 2023</strong>
                                    <br/>ClassNow DAO
                                    <br/>(decentralized autonomous organization)
                                </p>
                            </Col>

                            <Col xs={{span: 21}}
                                 sm={{span: 21}}
                                 md={{span: 21}}
                                 lg={{span: 15}}
                                 xl={{span: 12}}
                                 xxl={{span: 12}}>
                                <p className="roadmap-content-right">
                                    <strong>Q1 2024</strong>
                                    <br/>ClassNow ICO (initial coin offering)
                                    <br/>Integration of blockchain into ClassNow platform</p>
                            </Col>
                            <Col xs={{span: 3}}
                                 sm={{span: 3}}
                                 md={{span: 3}}
                                 lg={{span: 3}}
                                 xl={{span: 3}}
                                 xxl={{span: 3}}>
                                <img className="roadmap-image" src={roadmap5} alt="roadmap5"/>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Roadmap