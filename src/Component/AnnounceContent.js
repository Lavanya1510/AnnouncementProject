import React, { useState } from 'react'
import { Layout, Menu, Row, Col, Drawer, Avatar } from 'antd';
import './Sidebar.css'
import {
    EditOutlined,
    SendOutlined,
    MessageOutlined
  } from '@ant-design/icons';
const { Header, Sider, Content } = Layout;

function AnnounceContent() {
    const [initial, setInitial] = useState(false)
    const [checkdata, setcheckdata] = useState('')
    const [showdraw, setshowdraw] = useState(false)
    let addann=()=>{
        console.log('addann')
        setInitial(!initial)
    }
    let onClose=()=>{
        setInitial(!initial)
    }
    let onClose1=()=>{
        setshowdraw(!showdraw)
    }
    let onclickevent=(data)=>{
        console.log('daata',data)
    }
    let checkvalue=(e)=>{
        console.log('checkvalue',e.target.value)
        setcheckdata(e.target.value)
    }
    let clickdesc=(e)=>{
        console.log('clickdesc')
        setshowdraw(true)
    }
        return (
            <Layout className="site-layout">
                <Header className="site-layout-background">
                    Announcement
                </Header>
                <Content
                    className="site-layout-content"
                >
                    <div className='overauto' >
                            <button className='contentrightbox' onClick={addann}>
                                + Add Announcement
                            </button> 
                            <div className='contentright'>
                                <input type='text' className='searchinput' placeholder="&#61442; Search" />
                            </div>
                    </div>
                    <a className='clickbox' onClick={e=>clickdesc(e)}>
                        <div className='topspacing'>
                                <Row>
                                    <Col span={1}>
                                        <div className='round1'>K</div>
                                    </Col>
                                    <Col span={23} className='spaceleft'>
                                        <Row>
                                            <Col span={12} className='descheadleft' >aadsdsdf</Col>
                                            <Col span={12} >
                                                <div className='deschead1'>04 Feb, 2010</div>
                                                <div className='deschead2'><MessageOutlined />&nbsp;3</div>
                                                <div className='deschead2' ><EditOutlined /></div>
                                            </Col>
                                        </Row>
                                        <Row className='descp'>
                                            jsdfkjdsfh
                                        </Row>
                                    </Col>
                                </Row>
                        </div>
                    </a>
                    <Drawer
                        title="Add New Announcement"
                        placement='right'
                        onClose={onClose}
                        visible={initial}
                        width='420px'
                        headerStyle={{color:'#183247',fontSize:'14px',fontFamily:'Open Sans',fontWeight:'600',border:'none'}}
                        closable={true}
                    >
                            <div className='toppaddinginitial'>
                                        <input className='inputnameinitial' id="Subject"/>
                                        <label className='labelinputinitial' for="Subject">Subject</label>
                            </div>
                            <div className='toppaddingcate'>
                                    <button className='cate1 active' onClick={e=>onclickevent('Announcement')}>Announcement</button>
                                    <button className='cate2' onClick={e=>onclickevent('Event')}>Event</button>
                                    <button className='cate2' onClick={e=>onclickevent('Remainder')}>Remainder</button>
                                    <label className='labelinputinitial' for="Subject">Select Category</label>
                            </div>
                            {/* event */}
                            <div>
                                <Row>
                                    <Col span={12}>
                                        <div className='toppaddingcate'>
                                            <input type='date' className='inputnamedate' id="date"/>
                                            <label className='labelinputinitial' for="date">Date</label>
                                        </div>
                                    </Col>
                                    <Col span={12}>
                                        <div className='toppaddingcate'>
                                            <input type='time' className='inputnametime' id="time"/>
                                            <label className='labelinputinitial' for="time">Time</label>
                                        </div>
                                    </Col>
                                </Row>
                                <Row id='googlecal'>+ Add it to google calender</Row>
                            </div>
                            {/* location */}
                            <div className='toppaddingcate'>
                                        <input className='inputnameinitial' id="location"/>
                                        <label className='labelinputinitial' for="location">Location</label>
                            </div>
                            {/* expires on */}
                            <div className='toppaddingcate'>
                                        <input type='date' className='inputnamedate' id="expires"/>
                                        <label className='labelinputinitial' for="expires">Expires on</label>
                            </div>
                            {/* Description */}
                            <div className='toppaddingcate'>
                                        <textarea className='inputnamedesp' id="Description"/>
                                        <label className='labelinputinitial' for="Description">Description</label>
                            </div>
                            {checkdata === '' ?
                                <div className='toppaddingcheck'>
                                            <div>
                                                <input type='checkbox' onChange={e=>checkvalue(e)} value='To All Members' className='checkinput'></input><label className='checklabel'>To All Members</label>
                                            </div>
                                            <div>
                                                <input type='checkbox' onChange={e=>checkvalue(e)} value='Choose Persons'  className='checkinput'></input><label className='checklabel'>Choose Persons</label>
                                            </div>
                                            <div>
                                                <input type='checkbox' onChange={e=>checkvalue(e)} value='Choose Departments/Roll'  className='checkinput'></input><label className='checklabel'>Choose Departments/Roll</label>
                                            </div>
                                            <label className='labelinputinitial'>Notify To</label>
                                </div>
                                :
                                <div className='toppaddingcate'>
                                       <textarea className='inputnamenotify' id="Notify" placeholder='Enter multi email id and separated by commas and @' />
                                       <label className='labelinputinitial' for="Notify">Notify To</label>
                                </div>
                            }
                            <div class='submitbutton'>
                                <button className='submit2'>Send</button>
                                <button className='submit1'>Discard</button>
                            </div>
                    </Drawer>
                    <Drawer
                        title={
                            <div>
                                <Avatar 
                                id='round2'
                                >K</Avatar>
                                <text className='desctitle'>Personal Documents</text>
                                <text className='datetitle'>04 Feb, 2019,3:30PM</text>
                            </div>}
                        placement='right'
                        onClose={onClose1}
                        visible={showdraw}
                        width='400px'
                        headerStyle={{color:'#183247',fontSize:'14px',fontFamily:'Open Sans',fontWeight:'600'}}
                        closable={true}
                    >
                        <p className='msg'>dfjhhsdfjhsd</p>
                        <div className='outercomments'>
                            <div className='comments'>Comments</div>
                            <div className='comments1'>3 replies</div>
                        </div>
                        <div>
                            <div className='outercomments'>
                                    <Avatar 
                                    id='round2'
                                    >K</Avatar>
                                    <text className='desctitle'>Personal Documents</text>
                                    <text className='datecmd'>04 Feb, 2019,3:30PM</text>
                            </div>
                            <p className='msg'>dfjhhsdfjhsd</p>
                        </div>
                        {/* <hr style={{border:'0.5px solid rgba(161, 166, 169, 0.35)',left:0,right:0}}/> */}
                        <div>
                            <div className='outercomments'>
                                    <Avatar 
                                    id='round2'
                                    >K</Avatar>
                                    <text className='desctitle'>Personal Documents</text>
                                    <text className='datecmd'>04 Feb, 2019,3:30PM</text>
                            </div>
                            <p className='msg'>dfjhhsdfjhsd</p>
                        </div>
                        <div className='cmdhead'>
                            <Row style={{width:'420px'}}>
                                <Col span={20}>
                                    <input className='firstcmd'
                                           placeholder='Be a first comment'/>
                                </Col>
                                <Col span={3}>
                                    <button className='cmdbtn'><SendOutlined style={{fontSize:'25px'}}/></button>
                                </Col>
                            </Row>
                        </div>
                        
                        
                    </Drawer>
                </Content>
            </Layout>
        )
}

export default AnnounceContent
