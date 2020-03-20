import React, { useState } from 'react'
import Header from './Header'
import {Col,Row} from 'antd'
import OtpInput from 'react-otp-input'
function EmailCode()  {
    const [otp, setOtp] = useState( '' );
    // setOtp('12345')
   
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
                                <div className='topvalid'>
                                    <test className='verify'>Please enter valid verification code</test>
                                    <test className='resend'>Resend OTP</test>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
}

const otpinline={
    width:'45px',height:'45px',border:'0.5px solid #A1A6A9',borderRadius:'2px',color:'#0A0909',fontSize:'600'
}
const otpinline1={
    width:'45px',height:'45px',border:'0.5px solid #C4250C',borderRadius:'2px',color:'#0A0909',fontSize:'600'
}

export default EmailCode
