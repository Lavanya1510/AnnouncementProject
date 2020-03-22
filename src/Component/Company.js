import React, { useState } from 'react'
import Header from './Header'
import {Col,Row,message} from 'antd'
function Company() {
    const [compname, setCompname] = useState('')
    const [location, setLocation] = useState('')
    const [noNoOfEmp, setNoOfEmp] = useState('')
    const [domain, setDomain] = useState('')

    let submitbutton=()=>{
        if(compname !== '' && location !== '' && noNoOfEmp !== '' && domain !== ''){
            let obj={
                compname,
                location,
                noNoOfEmp,
                domain
            }
            localStorage.setItem('compdetail',JSON.stringify(obj))
            window.location.href='/Personal'
        }else{
            message.error('Enter all the fields')
        }
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
                                    <input className='inputname' id="comp" placeholder='Enter your company name'
                                    onChange={e=>setCompname(e.target.value)} value={compname}/>
                                    <label className='labelinput' for="comp">Company name</label>
                                </div>
                                <div>
                                    <Row>
                                        <Col span={12}>
                                            <div className='toppadding'>
                                                <input className='inputname1' id="loc" placeholder='John'
                                                onChange={e=>setLocation(e.target.value)} value={location}/>
                                                <label className='labelinput' for="loc">Location</label>
                                            </div>
                                        </Col>
                                        <Col span={12}>
                                            <div className='toppadding'>
                                                <input className='inputname1' id="emp" placeholder='Smith'
                                                onChange={e=>setNoOfEmp(e.target.value)} value={noNoOfEmp}/>
                                                <label className='labelinput' for="emp">No. of Employees</label>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className='toppadding'>
                                    <input className='inputnamedom' id="domain" placeholder='Customize your domain name'
                                    onChange={e=>setDomain(e.target.value)} value={domain}/>
                                    <button className='inputnamedom1'>.intranet.com</button>
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
