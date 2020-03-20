import React, { Component } from 'react'
import Header from './Header'
import {Col,Row} from 'antd'
function Company() {
    let submitbutton=()=>{
        console.log('submitbutton')
        // window.location.href='/EmailCode'
    }
        return (
            <div>
                <Header/>
                <div>
                    <Row id='leftspace'>
                        <Col span={12}><img src='/img/Bitmap.png' className='imgclass'/></Col>
                        <Col span={12} id='card2'>
                            <div className='insidecard'>
                                <div className='titlehead'>Setup your application</div>
                                <div className='desc'>To make a workspace from scratch, please confirm your email address.</div>
                                <div className='toppadding'>
                                    <input className='inputname' id="comp" placeholder='Enter your company name'/>
                                    <label className='labelinput' for="comp">Company name</label>
                                </div>
                                <div>
                                    <Row>
                                        <Col span={12}>
                                            <div className='toppadding'>
                                                <input className='inputname1' id="loc" placeholder='John'/>
                                                <label className='labelinput' for="loc">Location</label>
                                            </div>
                                        </Col>
                                        <Col span={12}>
                                            <div className='toppadding'>
                                                <input className='inputname1' id="emp" placeholder='Smith'/>
                                                <label className='labelinput' for="emp">No. of Employees</label>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className='toppadding'>
                                    <input className='inputname' id="domain" placeholder='Customize your domain name'/>
                                    <label className='labelinput' for="domain">Domain Name</label>
                                </div>
                                <div>
                                    <button className='emailcon' onClick={()=>submitbutton()}>Next</button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
}

export default Company
