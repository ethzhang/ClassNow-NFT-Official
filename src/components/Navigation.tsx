import React from 'react';
import styles from '../styles/Navigation.module.css';
import {Button, Row, Col, Space} from "antd";
import {ButtonC, ConnectButton} from "components/button";
import {BsDiscord, BsTwitter} from "react-icons/bs";
import logoNav from "../assets/logo-n.png";
import useActiveWeb3React from "../hooks/useActiveWeb3React";
import {useApprove} from "../hooks/useApprove";
import {chainTokens} from "../config/tokens";
import {useTranslation} from "../contexts/Localization";

const Navigation = () => {
    // const {account} = useActiveWeb3React()
    // const {requestedApproval, handleApprove} = useApprove(chainTokens.usdt.address)
    const {t} = useTranslation()
    // @ts-ignore
    return (
        <div className={styles.navbar}>

            <Row justify="space-between" align={"middle"} className={styles.navbar_wrapper}>


                {/*Left Menu*/}
                <Col
                    xs={{span: 24}}
                    sm={{span: 24}}
                    md={{span: 24}}
                    lg={{span: 18}}
                    xl={{span: 18}}
                    xxl={{span: 18}}
                >
                    <Row justify="start" align={"middle"}>

                        {/*Logo & Name*/}
                        <Col
                            xs={{span: 24}}
                            sm={{span: 24}}
                            md={{span: 6}}
                            lg={{span: 6}}
                            xl={{span: 6}}
                            xxl={{span: 6}}
                        >
                            <Row justify="space-between" align={"middle"}>

                                <Col span={8}>
                                    <Row justify={"end"} align={"middle"}>
                                        <p className={styles.logo_name} style={{margin: '0'}}>Eager</p>
                                    </Row>
                                </Col>
                                <Col span={8}>
                                    <Row justify={"center"} align={"middle"}>
                                        {/*<img className="logo" src={logoNav} alt="logo"/>*/}
                                        <img className={styles.logo} src="/logo-n.png" alt="logo"/>
                                    </Row>
                                </Col>
                                <Col span={6}>
                                    <Row justify={"start"} align={"middle"}>
                                        <p className={styles.logo_name} style={{margin: '0'}}>Emu</p>
                                    </Row>
                                </Col>

                            </Row>
                        </Col>

                        {/*Menu Item*/}
                        <Col
                            xs={{span: 24, offset: 0}}
                            sm={{span: 24, offset: 0}}
                            md={{span: 12, offset: 2}}
                            lg={{span: 12, offset: 2}}
                            xl={{span: 10, offset: 2}}
                            xxl={{span: 8, offset: 2}}
                        >
                            <Row justify="space-between" align={"middle"} className={`font-body`}>
                                <a href="/">
                                    <span className={styles.middle_menu_item}>HOME</span>
                                </a>
                                <a href="https://veace.xyz/">
                                    <span className={styles.middle_menu_item}>MARKETPLACE</span>
                                </a>
                            </Row>
                        </Col>
                    </Row>
                </Col>


                {/*Right Menu*/}
                <Col
                    xs={{span: 24}}
                    sm={{span: 24}}
                    md={{span: 9}}
                    lg={{span: 6}}
                    xl={{span: 6}}
                    xxl={{span: 6}}
                >
                    <Row justify="space-between" align={"middle"}>

                        {/*Social Links*/}
                        <Col
                            xs={{span: 12}}
                            sm={{span: 12}}
                            md={{span: 10}}
                            lg={{span: 14}}
                            xl={{span: 12}}
                            xxl={{span: 12}}
                            className={styles.right_menu_item}>
                            <a href="https://twitter.com/_classnow_">
                                <BsTwitter className={styles.social_link_item}/>
                            </a>
                            <a href="https://discord.gg/pGhp3BjQ">
                                <BsDiscord className={styles.social_link_item}/>
                            </a>
                        </Col>

                        {/*Connect Button*/}
                        <Col
                            xs={{span: 12}}
                            sm={{span: 12}}
                            md={{span: 10}}
                            lg={{span: 10}}
                            xl={{span: 12}}
                            xxl={{span: 12}}
                            className={styles.right_menu}>
                            <Row justify={"end"} align={"middle"}>
                                <Col
                                    className={styles.right_menu_item}>
                                    <div className='h-[58px] mb-6 md:mb-0 md:h-auto'>
                                        <div
                                            className='min-w-[375px] h-[58px]  flex items-center px-[20px] xl:px-[52px] z-50'>

                                            <div className='flex'>
                                                <ConnectButton
                                                    className=' ml-1 h-[36px] text-xs text-[#000000]'>{t('connect wallet')}</ConnectButton>
                                            </div>
                                        </div>
                                    </div>
                                    {/*<Button className={styles.connect_button} size="large"*/}
                                    {/*        href="https://veace.xyz/">CONNECT</Button>*/}
                                    {/*<ConnectButton className={styles.connect_button}>{t('CONNECT')}</ConnectButton>*/}
                                </Col>
                            </Row>
                        </Col>

                    </Row>
                </Col>


            </Row>
        </div>
    )
}

export default Navigation;
