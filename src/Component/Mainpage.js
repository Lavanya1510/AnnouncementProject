import React, { Component } from 'react'
import {Col,Row} from 'antd'
import Header from './Header'

function Mainpage() {
    let submitbutton=()=>{
        console.log('submitbutton')
    }
        return (
            <div>
                <Header frommain={true}/>
                <div>
                    <Row id='leftspace'>
                        <Col span={12}><img src='/img/Bitmap1.png' className='imgclass'/></Col>
                        <Col span={12} id='card1'>
                            <div className='insidecard'>
                                <div className='titlehead'>Make Your Life Easy with Intranet!</div>
                                <div className='desc'>To make a workspace from scratch, please confirm your email address.</div>
                                <div className='toppadding'>
                                    <input className='inputname' placeholder='name@email.com'/>
                                    <label className='labelinput'>Email Address</label>
                                </div>
                                <div>
                                    <button className='emailcon' onClick={()=>submitbutton()}>Confirm Email</button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
}

export default Mainpage
