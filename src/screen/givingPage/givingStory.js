import React, { Component } from 'react'
import {
    MenuOutlined
} from '@ant-design/icons';

import { Images, SVG } from '../../assets'
import { Button } from 'antd';
import { UserView } from '../../shared/components/users/users';

import { styles } from './giving.style'
export const GivingPageStory = () => {

    return (
        <div style={styles.mainContain}>
            <div style={styles.mainMobile}>
                <div style={{ height: '40%' }}>
                    {/* =======Header======= */}
                    <div style={styles.headerView}>
                        <div style={{ height: '25px', width: '25px', }}>

                        </div>
                        {/* <p style={styles.headerTxt}>Helpen</p> */}
                        <img style={{ height: '25px' }} src={SVG.headerLogo} />
                        <div style={styles.menuIcon}>
                            <img style={{ height: '20px' }} src={SVG.menuLogo} />
                        </div>
                    </div>

                    {/* =======Scroll Container====== */}
                    <div style={styles.scrollView}>
                        <div style={styles.scrollLeftView}>
                            <img style={{ height: '60px' }} src={Images.oneTreePlantedLog} />
                        </div>
                        <div style={styles.scrollCenterView}>
                            <img style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40px' }} src={Images.blanketsofHope} />
                        </div>
                        <div style={styles.scrollRightView}>
                            <img style={{ height: '25px' }} src={Images.rxArt} />
                        </div>
                    </div>

                    {/* =======Name of Viewed Scroll Container========== */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <p style={{ fontWeight: 'bold', fontSize: '15px', marginBottom: '0px' }}>Select helpers who want to help</p>
                        <p style={{ fontWeight: 'bold', fontSize: '25px', marginTop: '1px', color: '#579FFF' }}>Blankets of Hope</p>
                    </div>
                </div>
                <div style={{ height: '60%' }}>
                    <div style={styles.nearBackRing1}>
                        <div style={{ position: 'absolute', top: 30, left: 150 }}>
                            <UserView img={Images.chris} price={500} price2={2} name={"Chris"} />
                        </div>
                        <div style={{ position: 'absolute', top: 40, right: 100 }}>
                            <UserView img={Images.chris} price={500} price2={2} name={"Chris"} />
                        </div>
                        <div style={{ position: 'absolute', top: 100, left: 50 }}>
                            <UserView img={Images.dad} price={500} price2={2} name={"Dad"} />
                        </div>
                        <div style={{ position: 'absolute', top: 110, left: 160 }}>
                            <UserView img={Images.dad} price={500} price2={2} name={"Dad"} />
                        </div>
                        <div style={{ position: 'absolute', top: 190, left: 50 }}>
                            <UserView img={Images.dad} price={500} price2={2} name={"Dad"} />
                        </div>
                        <div style={{ position: 'absolute', top: 130, right: 50 }}>
                            <UserView img={Images.mom} price={500} price2={2} name={"Mom"} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <img style={{ marginTop: '100px', height: '70px' }} src={Images.disney} />
                            <p style={{ margin: 0, textAlign: 'center' }}>
                                will donate <span style={{ fontWeight: 'bold' }}>$500 </span>to <br /> each helper’s selection <br />
                                <span style={{ textDecoration: 'underline', color: '#579FFF', marginTop: '10px' }}>Edit</span>
                            </p>
                        </div>
                        <div style={{ position: 'absolute', bottom: 40 }}>
                            <div style={{ width: '400px', display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                                <Button style={{ ...styles.btn, backgroundColor: '#579FFF' }}>
                                    <p style={{ color: '#fff', fontSize: '15px' }}>Back</p>
                                </Button>
                                <Button style={{ ...styles.btn, backgroundColor: '#202561' }}>
                                    <p style={{ color: '#fff', fontSize: '15px' }}>Next</p>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
}

