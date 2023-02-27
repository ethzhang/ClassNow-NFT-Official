import React from 'react'
import { Row, Col, Card } from 'antd'
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
  )
}

export default Roadmap