import React from 'react'
import {Row, Col, Card} from 'antd'
import nftMeet1 from "../../assets/nftMeet1.png";
import nftMeet2 from "../../assets/nftMeet2.png";
import nftMeet3 from "../../assets/nftMeet3.png";
import nftMeet4 from "../../assets/nftMeet4.png";

const Meet = () => {
    return (
        <div className="meet-wrapper">
            <Row justify={"center"}>
                <Col
                    xs={{span: 24}}
                    sm={{span: 22}}
                    md={{span: 22}}
                    lg={{span: 22}}
                    xl={{span: 20}}
                    xxl={{span: 20}}
                >
                    <Row justify={"space-between"} align={"middle"}>
                        <Col
                            xs={{span: 24}}
                            sm={{span: 24}}
                            md={{span: 24}}
                            lg={{span: 24}}
                            xl={{span: 12}}
                            xxl={{span: 14}}
                        >
                            <Card className="meet-card">
                                <p className="session-title">MEET EMU</p>
                                <p className="meet-story-content">
                                    <strong>More than flex! &nbsp;</strong>
                                    Eager Emu is a collection of 5000 NFTs, each of which is an authentic art treasure.
                                </p>
                                <p className="meet-story-content">
                                    <strong>Mascot and spirit of ClassNow! &nbsp;</strong>
                                    The Emus are always eager to learn. Just like&nbsp;
                                    <a className="link"
                                       href="https://www.theclassnow.com/index.html">ClassNow</a>
                                    is always on the move, empowering educators and businesses to share knowledge.</p>
                                <p className="meet-story-content">
                                    <strong>About utility! &nbsp;</strong>
                                    Holders are claiming their perks to enjoy the upcoming premire ClassNow features.
                                </p>
                            </Card>
                        </Col>
                        <Col
                            xs={{span: 24}}
                            sm={{span: 24}}
                            md={{span: 24}}
                            lg={{span: 24}}
                            xl={{span: 11}}
                            xxl={{span: 9}}
                            className="meet-nft-pic"
                        >
                            <Row gutter={[16, 16]}>
                                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                                    <img width={'100%'} src={nftMeet1} alt="nft"/></Col>
                                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                                    <img width={'100%'} src={nftMeet2} alt="nft"/></Col>
                                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                                    <img width={'100%'} src={nftMeet3} alt="nft"/></Col>
                                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                                    <img width={'100%'} src={nftMeet4} alt="nft"/></Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default Meet