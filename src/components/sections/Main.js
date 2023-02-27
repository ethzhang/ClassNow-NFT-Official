import React from 'react'
import { Row, Col, Button } from 'antd';
import { SocialIcon } from 'react-social-icons';
import nft31 from "../../assets/31.png";
import '../../styles/LandingPage.css';

const Main = () => {
  return (
    <div className="main-wrapper">
        <Row justify={"start"} align={"middle"}>
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
            <Col style={{margin: '0 0 0 150px'}} span={10}>
                <Row justify={"end"} align={"bottom"}>
                    <img className="main-nft-pic" width={'100%'} src={nft31} alt="nft"/>
                </Row>
            </Col>
        </Row>
    </div>
  )
}

export default Main