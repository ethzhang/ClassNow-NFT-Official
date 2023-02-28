import React from 'react'
import {Row, Col, Button} from 'antd';
import {SocialIcon} from 'react-social-icons';
import nft31 from "../../assets/31.png";
import '../../styles/LandingPage.css';

const Main = () => {
    return (
        <div className="main-wrapper">
            <Row justify={"center"}>
                <Col xs={{span: 24}}
                     sm={{span: 24}}
                     md={{span: 20}}
                     lg={{span: 20}}
                     xl={{span: 20}}>
                    <Row justify={"center"} align={"middle"}>
                        <Col xs={{span: 18}}
                             sm={{span: 18}}
                             md={{span: 16}}
                             lg={{span: 12}}
                             xl={{span: 12}}>
                            <div style={{maximunHeight:'700px'}}>
                                <SocialIcon className="main-logo" fgColor="#FDDD4E" bgColor="#363A59"/>
                                <p className="main-sentence">COLLECT THE</p>
                                <Row>
                                    <p className="main-sentence-underlined">FIRST LAUNCH</p>
                                    <p className="main-sentence">!</p>
                                </Row>
                                <p className="main-count">5000 / 5000 NFTs</p>
                                <a href="https://veace.xyz/">
                                    <Button className="main-buy-button">BUY NOW</Button>
                                </a>
                            </div>
                        </Col>
                        <Col xs={{span: 18}}
                             sm={{span: 18}}
                             md={{span: 16}}
                             lg={{span: 12}}
                             xl={{span: 12}}>
                            <Row justify={"end"} align={"bottom"}>
                                <img className="main-nft-pic" width={'100%'} src={nft31} alt="nft"/>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default Main