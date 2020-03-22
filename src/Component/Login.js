import React, { useState } from 'react'
import Header from './Header'
import {Col,Row,message} from 'antd'

function Login() {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    let submitbutton=()=>{
        if(user !== '' && password !== ''){
            let obj=JSON.parse(localStorage.getItem('personal'))
            if(obj.user === user && obj.password === password){
                  window.location.href='/Announce'
            }else{
                message.error('Username does not exists.Please SignUp!')
            }

        }else{
            message.error('Enter all the fields')
        }
        // window.location.href='/EmailCode'
    }
        return (
            <div>
                <Header fromlogin={true}/>
                <div>
                    <Row id='leftspace'>
                        <Col span={12}><img src='/img/Bitmap1.png' className='imgclass'/></Col>
                        <Col span={12} id='card1'>
                            <div className='insidecard'>
                                <div className='titlehead'>Login to your account</div>
                                <div className='desc'>To make a workspace from scratch, please confirm your email address.</div>
                                <div className='toppadding'>
                                    <input className='inputname' id="user" placeholder='Enter your user name'
                                    onChange={e=>setUser(e.target.value)} value={user}/>
                                    <label className='labelinput' for="user">User name</label>
                                </div>
                                <div className='toppadding'>
                                    <input className='inputname' id="password" placeholder='Enter your password'
                                    onChange={e=>setPassword(e.target.value)} value={password}/>
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
