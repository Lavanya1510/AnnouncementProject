import React, { useState } from 'react'
import { Layout, Menu, Row, Col, Drawer, Avatar,TimePicker  } from 'antd';
import './Sidebar.css'
import {
    EditOutlined,
    SendOutlined,
    MessageOutlined,
    CalendarOutlined,
    EnvironmentOutlined
  } from '@ant-design/icons';
import Comment from './Comment'
import { addData,searchData } from '../action/Announce_act'
import { connect } from 'react-redux';
const { Header, Sider, Content } = Layout;
const { uuid } = require('uuidv4');
function AnnounceContent(props) {
    const [initial, setInitial] = useState(false)
    const [checkdata, setcheckdata] = useState('')
    const [showdraw, setshowdraw] = useState(false)
    const [showevent, setshowevent] = useState('')
    const [subject, setsubject] = useState('')
    const [description, setDescription] = useState('')
    const [notify, setNotify] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [expdate, setExpdate] = useState('')
    const [location, setLocation] = useState('')
    const [mappedObj, setmappedObj] = useState({})
    const [index, setIndex] = useState(null)
    const [search, setSearch] = useState('')
    const [dum, setdum] = useState(false)
    let addann=()=>{
        setInitial(!initial)
    }
    let onClose=async()=>{
            setsubject('')
            setDescription('')
            setNotify('')
            setDate('')
            setTime('')
            setExpdate('')
            setLocation('')
            setcheckdata('')
            setInitial(!initial)
        
    }
    let onClose1=()=>{
        setshowdraw(!showdraw)
    }
    let onclickevent=(data)=>{
        // if(data === 'Announcement'){
            // setsubject('')
            // setDescription('')
            // setNotify('')
            // setDate('')
            // setTime('')
            // setExpdate('')
            // setLocation('')
        // }
        setshowevent(data)
    }
    let checkvalue=(e)=>{
        setcheckdata(e.target.value)
    }
    let clickdesc=(p,i)=>{
        setmappedObj(p)
        setIndex(i)
        setshowdraw(true)
    }
    let submitData=()=>{
        let id = uuid()
        let obj={}
        if(showevent === 'Announcement' || showevent === ''){
            obj={
                subject,
                description,
                notify,
                date:null,
                time:null,
                location:null,
                expdate:null,
                showevent,
                id,
                is_search:false
            }
            setInitial(!initial)
            setsubject('')
            setDescription('')
            setNotify('')
            setDate('')
            setTime('')
            setExpdate('')
            setLocation('')
            setInitial(!initial)
            setcheckdata('')
            props.addData({obj,showevent})
            setdum(true)

        }else if(showevent === 'Event'){
            obj={
                subject,
                description,
                notify,
                date,
                time,
                location,
                expdate:null,
                showevent,
                id,
                is_search:false
            }
            setInitial(!initial)
            setsubject('')
            setDescription('')
            setNotify('')
            setDate('')
            setTime('')
            setExpdate('')
            setLocation('')
            setcheckdata('')
            props.addData({obj,showevent})
            setdum(true)
        }else if(showevent === 'Remainder'){
            obj={
                subject,
                description,
                notify,
                date:null,
                time:null,
                location:null,
                expdate,
                showevent,
                id,
                is_search:false
            }
            setInitial(!initial)
            setsubject('')
            setDescription('')
            setNotify('')
            setDate('')
            setTime('')
            setExpdate('')
            setLocation('')
            setcheckdata('')
            props.addData({obj,showevent})
            setdum(true)

        }
    }
    let timeChange=(time)=>{
        setTime(time)
    }
    let changeSearch=async(e)=>{
        // if(typeof(e.target.value) !== 'object'){
        // }
        // props.searchData({obj:e.target.value})

        let val=e.target.value
        let res=await props.datum
        for(let i=0;i<res.length;i++){
            let split1=res[i].subject.split('')
            let split2=val.split('')
            if(split1.length === split2.length){
                for(let j=0;j<split1.length;j++){
                    if(split1[j] !== split2[j]){
                        res[i].is_search=true
                        let searchres=await props.searchData({obj:res[i]})
                        
                       
                    }
                    else{
                        res[i].is_search=false
                        let searchres=props.searchData({obj:res[i]})
                    }
                }
            }else{
                res[i].is_search=false
                let searchres=props.searchData({obj:res[i]})
            }
            
        }
        setSearch(val)

    }
    let checkdisable=()=>{
        if(showevent === 'Announcement' || showevent === ''){
            if(subject !== '' && description !== '' ){
                return false
            }else{
                return true
            }

        }else if(showevent === 'Event'){
            if(subject !== '' && description !== ''  && date !== '' && time !== '' && location !== '' ){
                return false
            }else{
                return true
            }
          
        }else if(showevent === 'Remainder'){
            if(subject !== '' && description !== '' !== '' && expdate !== '' ){
                return false
            }else{
                return true
            }
        }

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
                                <input type='text' className='searchinput' value={search} onChange={e=>changeSearch(e)} placeholder="&#61442; Search" />
                            </div>
                    </div>
                    { props.datum.map((p,i)=>{
                    if(p.is_search === false){
                    return(
                    <a className='clickbox' onClick={()=>clickdesc(p,i)} keys={i}>
                        <div className='topspacing'>
                                <Row>
                                    <Col span={1}>
                                        <div className='round1'>K</div>
                                    </Col>
                                    <Col span={23} className='spaceleft'>
                                        <Row>
                                            <Col span={12} className='descheadleft'>{p.subject}</Col>
                                            <Col span={12} >
                                                {p.expdate !== null &&<div className='deschead1'>{p.expdate}</div>}
                                                <div className='deschead2'><MessageOutlined />&nbsp;3</div>
                                                <div className='deschead2' ><EditOutlined /></div>
                                            </Col>
                                        </Row>
                                        <Row className='descp'>
                                            {p.description}
                                        </Row>
                                        {p.location !== null &&
                                            <Row className='locline'>
                                                <text><CalendarOutlined  style={{color:'#B1B5B7'}}/></text>&nbsp;<text className='loc1'>{p.description}</text>
                                                <text><EnvironmentOutlined  style={{color:'#B1B5B7'}}/></text>&nbsp;<text className='loc2'>{p.location}</text>
                                            </Row>
                                        }
                                    </Col>
                                </Row>
                        </div>
                    </a>
                    )}})}
                    
                    
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
                                        <input className='inputnameinitial' id="Subject" value={subject}
                                               onChange={e=>setsubject(e.target.value)}/>
                                        <label className='labelinputinitial' for="Subject">Subject</label>
                            </div>
                            <div className='toppaddingcate'>
                                {showevent === 'Announcement' ?
                                     <button className='cateactive' onClick={e=>onclickevent('Announcement')}>Announcement</button>
                                     :
                                     <button className='cate1' onClick={e=>onclickevent('Announcement')}>Announcement</button>
                                }
                                {showevent === 'Event' ?
                                    <button className='cate2active' onClick={e=>onclickevent('Event')}>Event</button>
                                    :
                                    <button className='cate2' onClick={e=>onclickevent('Event')}>Event</button>
                                }
                                {showevent === 'Remainder' ?
                                    <button className='cate2active' onClick={e=>onclickevent('Remainder')}>Remainder</button>
                                    :
                                    <button className='cate2' onClick={e=>onclickevent('Remainder')}>Remainder</button>
                                }
                                    <label className='labelinputinitial' for="Subject">Select Category</label>
                            </div>
                            {/* event */}
                            {showevent === 'Event' &&
                            <div>
                                <div>
                                    <Row>
                                        <Col span={12}>
                                            <div className='toppaddingcate'>
                                                <input type='date' value={date} className='inputnamedate' id="date"
                                                       onChange={e=>setDate(e.target.value)}/>
                                                <label className='labelinputinitial' for="date">Date</label>
                                            </div>
                                        </Col>
                                        <Col span={12}>
                                            <div className='toppaddingcate'>
                                                {/* <input type='time' className='inputnametime' id="time1"
                                                       onChange={e=>timeChange(e)}/> */}
                                                <TimePicker type="time" className='inputnametime'  name="appt-time" value={time} onChange={timeChange}></TimePicker >
                                                <label className='labelinputinitial' for="time1">Time</label>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row id='googlecal'>+ Add it to google calender</Row>
                                </div>
                                
                                <div className='toppaddingcate'>
                                            <input className='inputnameinitial' id="location" value={location}
                                                   onChange={e=>setLocation(e.target.value)}/>
                                            <label className='labelinputinitial' for="location">Location</label>
                                </div>
                            </div>
                            }
                            {/* expires on */}
                            {showevent === 'Remainder' &&
                                <div className='toppaddingcate'>
                                            <input type='date' className='inputnamedate' id="expires" value={expdate}
                                                   onChange={e=>setExpdate(e.target.value)}/>
                                            <label className='labelinputinitial' for="expires">Expires on</label>
                                </div>
                            }
                            {/* Description */}
                            <div className='toppaddingcate'>
                                        <textarea className='inputnamedesp' id="Description" value={description}
                                                  onChange={e=>setDescription(e.target.value)}/>
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
                                       <textarea className='inputnamenotify' id="Notify" value={notify} placeholder='Enter multi email id and separated by commas and @' 
                                                //  tabIndex='2' aria-haspopup='true' rows='1' dir='ltr'
                                                 onChange={e=>setNotify(e.target.value)}/>
                                       <label className='labelinputinitial' for="Notify">Notify To</label>
                                </div>
                            }
                            <div class='submitbutton'>
                                <button className='submit2' disabled={checkdisable()} onClick={()=>submitData()}>Send</button>
                                <button className='submit1' onClick={()=>onClose()}>Discard</button>
                            </div>
                    </Drawer>
                    {showdraw &&
                        <Comment onClose1={onClose1} obj={mappedObj} index={index}/>
                    }
                    
                </Content>
            </Layout>
        )
}

// export default AnnounceContent
const mapStateToProps  = (state) => {
    return{
        datum:state.announce.alldata
    }
}

export default connect(mapStateToProps , {addData,searchData})(AnnounceContent)

