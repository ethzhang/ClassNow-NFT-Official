import React from 'react'
import { Row, Col, Card } from 'antd'
import nft2 from "../../assets/2.png";

const Story = () => {
  return (
    <div className="story-wrapper">
        <Row justify={"center"}>
            <Col md={{span: 24}}
                 lg={{span: 20}}>
                <Row align={"middle"}>
                    <Col md={{span: 24}}
                         lg={{span: 12}}>
                        <Row gutter={[16, 16]}>
                            <Col span={24}><img width={'100%'} src={nft2} alt="nft"/></Col>
                        </Row>
                    </Col>
                    <Col md={{span: 24}}
                         lg={{span: 12}}>
                        <Card className="story-card">
                            <p className="session-title">STORY</p>
                            <p className="story-content">
                                There is one lonely emu on the emu planet, one with shiny fur, but lonely. <i>Why
                                am I the only one here all along? When can I find someone else?</i> That emu
                                mumbled everyday and wondered in the big world expecting to meet someone. Help
                                this poor emu by bringing new emus to that planet!</p>
                        </Card>
                    </Col>
                </Row>
            </Col>
        </Row>
    </div>
  )
}

export default Story