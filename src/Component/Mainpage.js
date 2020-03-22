import React, { useState } from 'react'
import {Col,Row,message} from 'antd'
import Header from './Header'

function Mainpage() {
    const [email, setEmail] = useState('')
    let submitbutton=()=>{
        if(email !== ''){
            let semail= localStorage.getItem('email')
                    if(semail !== null && semail !== undefined){
                        if(semail === email){
                            localStorage.setItem('log',true)
                            window.location.href='/EmailCode'
                        }else{
                            localStorage.setItem('email',email)
                            localStorage.setItem('log',false)
                            window.location.href='/EmailCode'
                        }
                    }else{
                        localStorage.setItem('email',email)
                        localStorage.setItem('log',false)
                        window.location.href='/EmailCode'
                    }
            
        }else{
            message.error('Enter your email address')
        }
        
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
                                    <input className='inputname' id="email" placeholder='name@email.com' onChange={e=>setEmail(e.target.value)} value={email}/>
                                    <label className='labelinput' for="email">Email Address</label>
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
