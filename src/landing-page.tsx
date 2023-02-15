import React from 'react';
import './landing-page.css';
import {Button, Col, Row} from "antd";
import Navbar from "./navbar";
import Footer from "./footer";
import nft from "./f.png";
import mainPic from "./f.png"

// import {Carousel} from '3d-react-carousal';

function LandingPage() {
    const slides = [
        'Wishing you health, wealth, and happiness in the New Year ahead.',
        'I hope all your dreams come true in 2021 — onwards and upwards!',
        'Wave goodbye to the old and embrace the new with hope, dreams, and ambition. Wishing you a Happy New Year full of happiness!',
        'May the 12 months of the New Year be full of new achievements for you. May the days be filled with eternal happiness for you and your family!',
        'Don’t forget the past, learn from it and go out strong for your dreams and future. My best wishes are with you.',
        'Wishing for a better year with new opportunities and beautiful moments. Let’s have a great year ahead.',
        'Years will come and go, but my love for you will always be the same. It will never stop to grow as long as there is a tomorrow.',
        'When I think of you, my heart overflows with joy and pleasure. I have fallen more in love with you every year. This new year will not be an exception.',
        'We are blessed to have each other, I could not be any more thankful. May this year bring us success and good health.'
    ]

    return (
        <div className="app">
            <Navbar/>

            <img className="main-pic" src={mainPic} alt="NFT PIC"/>

            <Row justify={"center"} style={{margin: '50px 0 0'}}>
                <Col span={18}>
                    <p className="para-title-collection">EAGER EMU COLLECTION</p>
                    <p className="para-content">Eager Emu world is a collection of 5000 Eager Emu NFTs, unique digital
                        assets stored as ERC-720 tokens on Vision blockchain. It's much more than flex. Authentic art
                        treasure. Each emu has its own value. Authentic art. Something about the design such as the
                        accessory, fur color, etc. <a className="link">Learn more about NFT and its value on
                            ClassNow.</a></p>
                </Col>
            </Row>

            <Row justify={"center"} style={{margin: '50px 0 0'}}>
                <Col span={18} className="buy-box">
                    <Row justify={"center"} align={"middle"}>
                        <Col span={20}>
                            <p className="buy-title">BUY THE FIRST LAUNCH!</p>
                            <p className="buy-content">The initial sale starts at March 1st at 9.00 am. To buy a emu,
                                check out marketplace, Veace.</p>
                        </Col>
                        <Col span={4}>
                            <Button className="buy-button">BUY ON VEACE</Button>
                        </Col>
                    </Row>
                </Col>
                <span className="divider"></span>
            </Row>

            <Row justify={"center"} style={{margin: '50px 0 0'}}>
                <Col span={18}>
                    <Row align={"top"}>
                        <Col span={16}>
                            <p className="para-title-others">MEET EMU</p>
                            <p className="para-content">Character design
                                Meet Emu, the endearing mascot of ClassNow!
                                Emu represents a new and exciting approach to education, one that is dynamic, fun and
                                always eager to learn. Just like Emu, ClassNow is always on the move, constantly
                                exploring new possibilities and opportunities for growth.
                                <a className="link">ClassNow</a>
                            </p>
                        </Col>
                        <Col span={8}>
                            <Row gutter={[16, 16]}>
                                <Col span={12}><img width={'100%'} src={nft} alt="nft"/></Col>
                                <Col span={12}><img width={'100%'} src={nft} alt="nft"/></Col>
                                <Col span={12}><img width={'100%'} src={nft} alt="nft"/></Col>
                                <Col span={12}><img width={'100%'} src={nft} alt="nft"/></Col>
                            </Row>

                            {/*<Row>*/}
                            {/*    <Col span={12} style={{padding: '0 8px 8px 15px'}}>*/}
                            {/*        <img width={'100%'} src={nft} alt="nft"/>*/}
                            {/*    </Col>*/}
                            {/*    <Col span={12} style={{padding: '0 15px 8px 8px'}}>*/}
                            {/*        <img width={'100%'} src={nft} alt="nft"/>*/}
                            {/*    </Col>*/}
                            {/*</Row>*/}
                            {/*<Row>*/}
                            {/*    <Col span={12} style={{padding: '8px 8px 0 15px'}}>*/}
                            {/*        <img width={'100%'} src={nft} alt="nft"/>*/}
                            {/*    </Col>*/}
                            {/*    <Col span={12} style={{padding: '8px 15px 0 8px'}}>*/}
                            {/*        <img width={'100%'} src={nft} alt="nft"/>*/}
                            {/*    </Col>*/}
                            {/*</Row>*/}

                        </Col>
                    </Row>
                </Col>
                <span className="divider"></span>
            </Row>

            <Row justify={"center"} style={{margin: '50px 0 0'}}>
                <Col span={18}>
                    <p className="para-title-others">PEAK INTO THE FUTURE</p>
                </Col>
            </Row>
            <Row justify={"center"}>
                <Col span={18}>
                    <Row gutter={[16, 16]}>
                        <Col span={8}><img className="stage-1" src={nft} alt="nft"/></Col>
                        <Col span={10}><img className="stage-2" width={'100%'} src={nft} alt="nft"/></Col>
                        <Col span={6}><img className="stage-3" width={'100%'} src={nft} alt="nft"/></Col>
                    </Row>
                </Col>
            </Row>

            <Row justify={"center"} style={{margin: '50px 0 0'}}>
                <Col span={18}>
                    <p className="para-title-others">THE TEAM</p>
                </Col>
                <span className="divider"></span>
            </Row>

            {/*<Carousel interval="4000" type="card" height="200px">*/}
            {/*    {*/}
            {/*        [1,2,3,4].map((item, index) => {*/}
            {/*            return (*/}
            {/*                <Carousel.Item key={index}>*/}
            {/*                    <h3>{item}</h3>*/}
            {/*                </Carousel.Item>*/}
            {/*            )*/}
            {/*        })*/}
            {/*    }*/}
            {/*</Carousel>*/}
            {/*<Carousel slides={slides} autoplay={true} interval={1000}/>*/}

            <Footer/>
        </div>
    )
        ;
}

export default LandingPage;
