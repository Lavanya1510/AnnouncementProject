import React, { useState } from 'react'
import Header from './Header'
import {Col,Row, message} from 'antd'

function Personal() {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [password, setPassword] = useState('')

    let submitbutton=()=>{
        if(firstname !== '' && password !== ''){
            let obj={
                user:firstname+lastname,
                password
            }
            localStorage.setItem('personal',JSON.stringify(obj))
            window.location.href='/Login'
        }else{
            message.error('Enter all the fields')
        }
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
                                                <input className='inputname1' id="first" placeholder='John'
                                                onChange={e=>setFirstname(e.target.value)} value={firstname}/>
                                                <label className='labelinput' for="first">First Name</label>
                                            </div>
                                        </Col>
                                        <Col span={12}>
                                            <div className='toppadding'>
                                                <input className='inputname1' id="Last" placeholder='Smith'
                                                onChange={e=>setLastname(e.target.value)} value={lastname}/>
                                                <label className='labelinput' for="Last">Last Name</label>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className='toppadding'>
                                    <input className='inputname' id="pass" placeholder='Enter your password'
                                    onChange={e=>setPassword(e.target.value)} value={password}/>
                                    <label className='labelinput' for="pass">Password</label>
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
