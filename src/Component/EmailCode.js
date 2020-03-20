import React, { useState } from 'react'
import Header from './Header'
import {Col,Row} from 'antd'
import OtpInput from 'react-otp-input'
function EmailCode()  {
    const [otp, setOtp] = useState( '' );
    // setOtp('12345')
    let submitbutton=()=>{
        console.log('submitbutton')
    }
    let handleChange=(otp)=>{
        setOtp(otp)
    }
        return (
            <div>
                <Header />
                <div>
                    <Row id='leftspace'>
                        <Col span={12}><img src='/img/Bitmap.png' className='imgclass'/></Col>
                        <Col span={12} id='card1'>
                            <div className='insidecard'>
                                <div className='titlehead'>We've send you a mail!</div>
                                <div className='desc'>To make a workspace from scratch, please confirm your email address.</div>
                                {/* <div className='toppadding'>
                                    <input className='inputname' placeholder='name@email.com'/>
                                    <label className='labelinput'>Email Address</label>
                                </div> */}
                                <div className='toppadding'>
                                            <OtpInput
                                                onChange={otp => handleChange(otp)}
                                                numInputs={6}
                                                separator={<span className='box'></span>}
                                                inputStyle={otpinline}
                                                focusStyle={otpinline1}
                                                value={otp}
                                            />
                                            <label className='labelinput'>Enter your verification code</label>
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

const otpinline={
    width:'45px',height:'45px',border:'1px solid #CECECE',borderRadius:'3px',color:'#0A0909',fontSize:'600'
}
const otpinline1={
    width:'45px',height:'45px',border:'1px solid #ED5901',borderRadius:'3px',color:'#0A0909',fontSize:'600'
}

export default EmailCode
