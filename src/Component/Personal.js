import React, { Component } from 'react'
import Header from './Header'
import {Col,Row} from 'antd'

function Personal() {
    let submitbutton=()=>{
        console.log('submitbutton')
        // window.location.href='/EmailCode'
    }
        return (
            <div>
                <Header />
                <div>
                    <Row id='leftspace'>
                        <Col span={12}><img src='/img/Bitmap.png' className='imgclass'/></Col>
                        <Col span={12} id='card3'>
                            <div className='insidecard'>
                                <div className='titlehead'>Create personal password</div>
                                <div className='desc'>To make a workspace from scratch, please confirm your email address.</div>
                                <div>
                                    <Row>
                                        <Col span={12}>
                                            <div className='toppadding'>
                                                <input className='inputname1' id="first" placeholder='John'/>
                                                <label className='labelinput' for="first">First Name</label>
                                            </div>
                                        </Col>
                                        <Col span={12}>
                                            <div className='toppadding'>
                                                <input className='inputname1' id="Last" placeholder='Smith'/>
                                                <label className='labelinput' for="Last">Last Name</label>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className='toppadding'>
                                    <input className='inputname' id="pass" placeholder='Enter your password'/>
                                    <label className='labelinput' for="pass">Domain Name</label>
                                </div>
                                <div>
                                    <button className='emailcon' onClick={()=>submitbutton()}>Complete</button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
}

export default Personal
