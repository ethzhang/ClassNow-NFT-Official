import React from 'react'
import {Row, Col, Card} from 'antd'
import nft2 from "../../assets/2.png";

const Story = () => {
    return (
        <div className="story-wrapper">
            <Row justify={"center"}>
                <Col xs={{span: 24}}
                     sm={{span: 22}}
                     md={{span: 22}}
                     lg={{span: 22}}
                     xl={{span: 20}}
                     xxl={{span: 20}}>
                    <Row justify={"space-between"} align={"middle"}>
                        <Col xs={{span: 0}}
                             sm={{span: 0}}
                             md={{span: 0}}
                             lg={{span: 0}}
                             xl={{span: 9}}
                             xxl={{span: 9}}>
                            <img width={'100%'} src={nft2} alt="nft"/>
                        </Col>
                        <Col xs={{span: 24}}
                             sm={{span: 24}}
                             md={{span: 24}}
                             lg={{span: 24}}
                             xl={{span: 14}}
                             xxl={{span: 14}}>
                            <Card className="story-card">
                                <p className="session-title">STORY</p>
                                <p className="meet-story-content">
                                    There is one emu on the emu planet, one with shiny fur, but lonely.
                                    <i> &nbsp; Why am I the only one here all along? &nbsp; When can I find someone
                                        else? &nbsp; </i>
                                    That emu mumbled everyday and wondered in the big world expecting to meet someone.
                                    Help this poor emu by bringing new emus to that planet!</p>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default Story