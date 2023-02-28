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
            <Card className="roadmap-card">
                <p className="session-title">ROADMAP</p>
                <Row justify={"start"} align={"middle"}>
                    <Col span={10}>
                        <p className="roadmap-content-left">Q2 2023</p>
                        <ul className="roadmap-content-left">
                            <li>Launch of ClassNow Eager Emu NFT public sale</li>
                            {/*<li>Completion of the Eager Emu NFT collection</li>*/}
                            {/*<li>Community events and collaborations to promote the Eager Emu NFTs</li>*/}
                        </ul>
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
                        <p className="roadmap-content-left">Q3 2023</p>
                        <ul className="roadmap-content-left">
                            <li>Launch of the ClassNow token (CLN) and token sale</li>
                            {/*<li>Integration of the ClassNow token into the ClassNow platform</li>*/}
                            <li>Launch of ClassNow Learn/Share & Earn program</li>
                        </ul>
                    </Col>
                </Row>
                <Row justify={"start"} align={"middle"}>
                    <Col span={10}>
                        <p className="roadmap-content-left">Q4 2023</p>
                        <ul className="roadmap-content-left">
                            <li>Launch of the ClassNow DAO (decentralized autonomous organization)</li>
                            <li>Community governance of the ClassNow platform</li>
                            {/*<li>Continuous development of the ClassNow platform based on community feedback</li>*/}
                        </ul>
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
                        <p className="roadmap-content-left">Q1 2024</p>
                        <ul className="roadmap-content-left">
                            <li>Launch of the ClassNow ICO (initial coin offering)</li>
                            {/*<li>Expansion of the ClassNow platform to reach more learners and educators</li>*/}
                            <li>Integration of blockchain technology into the ClassNow platform to enhance security and transparency</li>
                        </ul>
                    </Col>
                </Row>
                <Row justify={"start"} align={"middle"}>
                    <Col span={10}>
                        <p className="roadmap-content-left">Q2 2023</p>
                        <ul className="roadmap-content-left">
                            <li>La</li>
                            <li>Co</li>
                            <li>Comm</li>
                        </ul>
                    </Col>
                    <Col span={4}>
                        <img className="roadmap-image" src={roadmap5} alt="nft"/>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}

export default Roadmap