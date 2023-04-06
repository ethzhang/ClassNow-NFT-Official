import React from 'react'
import {Row, Col, Card} from 'antd'
// import roadmap1 from "../../assets/01.png";
// import roadmap2 from "../../assets/02.png";
// import roadmap3 from "../../assets/03.png";
// import roadmap4 from "../../assets/04.png";
// import roadmap5 from "../../assets/05.png";
import styles from "../../styles/Main.module.css"

const Roadmap = () => {
    return (
        <div className={styles.roadmap_wrapper}>
            <Row justify={"center"}>
                <Col xs={{span: 24}}
                     sm={{span: 22}}
                     md={{span: 22}}
                     lg={{span: 22}}
                     xl={{span: 20}}
                     xxl={{span: 20}}>
                    <Card className={styles.roadmap_card}>
                        <p className={styles.roadmap_title}>ROADMAP</p>
                        <Row gutter={[16, 32]} align={"middle"}>
                            <Col xs={{span: 19}}
                                 sm={{span: 21}}
                                 md={{span: 21}}
                                 lg={{span: 15}}
                                 xl={{span: 12}}
                                 xxl={{span: 12}}>
                                <p className={styles.roadmap_content_right}>
                                    <strong>Q2 2020</strong>
                                    <br/>Establishment of ClassNow
                                    <br/><strong>Q4 2022</strong>
                                    <br/>Turnover reaches 500,000 AUD</p>
                            </Col>
                            <Col xs={{span: 5}}
                                 sm={{span: 3}}
                                 md={{span: 3}}
                                 lg={{span: 3}}
                                 xl={{span: 3}}
                                 xxl={{span: 3}}>
                                <img className={styles.roadmap_image} src="/01.png" alt="roadmap1"/>
                            </Col>

                            <Col xs={{span: 5}}
                                 sm={{span: 3}}
                                 md={{span: 3}}
                                 lg={{span: 3, offset: 6}}
                                 xl={{span: 3, offset: 9}}
                                 xxl={{span: 3, offset: 9}}>
                                <img className={styles.roadmap_image} src="/02.png" alt="roadmap2"/>
                            </Col>
                            <Col xs={{span: 19}}
                                 sm={{span: 21}}
                                 md={{span: 21}}
                                 lg={{span: 15}}
                                 xl={{span: 12}}
                                 xxl={{span: 12}}>
                                <p className={styles.roadmap_content_left}>
                                    <strong>Q2 2023</strong>
                                    <br/>ClassNow Eager Emu NFT public sale</p>
                            </Col>

                            <Col xs={{span: 19}}
                                 sm={{span: 21}}
                                 md={{span: 21}}
                                 lg={{span: 15}}
                                 xl={{span: 12}}
                                 xxl={{span: 12}}>
                                <p className={styles.roadmap_content_right}>
                                    <strong>Q3 2023</strong>
                                    <br/>ClassNow token (CLN) sale
                                    <br/>ClassNow Learn/Share & Earn program</p>
                            </Col>
                            <Col xs={{span: 5}}
                                 sm={{span: 3}}
                                 md={{span: 3}}
                                 lg={{span: 3}}
                                 xl={{span: 3}}
                                 xxl={{span: 3}}>
                                <img className={styles.roadmap_image} src="/03.png" alt="roadmap3"/>
                            </Col>

                            <Col xs={{span: 5}}
                                 sm={{span: 3}}
                                 md={{span: 3}}
                                 lg={{span: 3, offset: 6}}
                                 xl={{span: 3, offset: 9}}
                                 xxl={{span: 3, offset: 9}}>
                                <img className={styles.roadmap_image} src="/04.png" alt="roadmap4"/>
                            </Col>
                            <Col xs={{span: 19}}
                                 sm={{span: 21}}
                                 md={{span: 21}}
                                 lg={{span: 15}}
                                 xl={{span: 12}}
                                 xxl={{span: 12}}>
                                <p className={styles.roadmap_content_left}>
                                    <strong>Q4 2023</strong>
                                    <br/>ClassNow DAO
                                    <br/>(decentralized autonomous organization)
                                </p>
                            </Col>

                            <Col xs={{span: 19}}
                                 sm={{span: 21}}
                                 md={{span: 21}}
                                 lg={{span: 15}}
                                 xl={{span: 12}}
                                 xxl={{span: 12}}>
                                <p className={styles.roadmap_content_right}>
                                    <strong>Q1 2024</strong>
                                    <br/>ClassNow ICO (initial coin offering)
                                    <br/>Integration of blockchain into ClassNow platform</p>
                            </Col>
                            <Col xs={{span: 5}}
                                 sm={{span: 3}}
                                 md={{span: 3}}
                                 lg={{span: 3}}
                                 xl={{span: 3}}
                                 xxl={{span: 3}}>
                                <img className={styles.roadmap_image} src="/05.png" alt="roadmap5"/>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Roadmap