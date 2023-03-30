import React from 'react'
import {Row, Col, Button} from 'antd';
import {SocialIcon} from 'react-social-icons';
// import logoMain from "../../assets/logo-m.png";
// import nftMain from "../../assets/nftMain.png";
// import '../../styles/LandingPage.css';
import styles from "../../styles/Main.module.css"

const Main = () => {
    return (
        <div className={styles.main_wrapper}>
            <Row justify={"center"}>
                <Col xs={{span: 24}}
                     sm={{span: 24}}
                     md={{span: 24}}
                     lg={{span: 22}}
                     xl={{span: 20}}
                     xxl={{span: 20}}>
                    <Row justify={"center"} align={"middle"}>
                        <Col xs={{span: 24}}
                             sm={{span: 20}}
                             md={{span: 15}}
                             lg={{span: 15}}
                             xl={{span: 12}}
                             xxl={{span: 12}}>
                            <div className={styles.margin_32}>
                                <Row>
                                    <Col xs={{span: 5}}
                                         sm={{span: 5}}
                                         md={{span: 5}}
                                         lg={{span: 3}}
                                         xl={{span: 3}}
                                         xxl={{span: 3}}>
                                        <img className={styles.main_logo} src="/logo-m.png" alt="logo"/>
                                    </Col>
                                </Row>
                                <p className={styles.main_sentence}>COLLECT THE</p>
                                <Row align={"middle"}>
                                    <p className={styles.main_sentence_underlined}>FIRST LAUNCH !</p>
                                </Row>
                                <p className={styles.main_count}>5000 / 5000 NFTs</p>
                                <a href="https://veace.xyz/">
                                    <Button className={styles.main_buy_button}>MINT NOW</Button>
                                </a>
                            </div>
                        </Col>
                        <Col xs={{span: 18}}
                             sm={{span: 18}}
                             md={{span: 18}}
                             lg={{span: 9}}
                             xl={{span: 12}}
                             xxl={{span: 12}}>
                            <Row justify={"end"} align={"bottom"}>
                                <img className={styles.main_nft_pic} width={'100%'} src="/nftMain.png" alt="nft"/>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default Main