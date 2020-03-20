import React, { Component } from 'react'
import Header from './Header'
import {Col,Row} from 'antd'

function Login() {
    let submitbutton=()=>{
        console.log('submitbutton')
        // window.location.href='/EmailCode'
    }
        return (
            <div>
                <Header />
                <div>
                    <Row id='leftspace'>
                        <Col span={12}><img src='/img/Bitmap1.png' className='imgclass'/></Col>
                        <Col span={12} id='card1'>
                            <div className='insidecard'>
                                <div className='titlehead'>Login to your account</div>
                                <div className='desc'>To make a workspace from scratch, please confirm your email address.</div>
                                <div className='toppadding'>
                                    <input className='inputname' id="user" placeholder='Enter your user name'/>
                                    <label className='labelinput' for="user">Email Address</label>
                                </div>
                                <div className='toppadding'>
                                    <input className='inputname' id="password" placeholder='Enter your password'/>
                                    <label className='labelinput' for="password">password</label>
                                </div>
                                <div className='toppaddingforrem'>
                                    <input type='checkbox' id="Remember"/>
                                    <label className='labelrem' for="Remember">Remember me</label>
                                </div>
                                <div>
                                    <button className='emailcon' onClick={()=>submitbutton()}>Sign in</button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
}

export default Login
