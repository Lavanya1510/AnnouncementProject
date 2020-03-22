import React, { useState } from 'react'
import { Layout, Menu, Row, Col, Drawer, Avatar } from 'antd';
import './Sidebar.css'
import {
    EditOutlined,
    SendOutlined,
    MessageOutlined
  } from '@ant-design/icons';
import { addComment } from '../action/Announce_act'
import { connect } from 'react-redux';
const { Header, Sider, Content } = Layout;

function Comment(props) {
    const [commentvalue, setCommentvalue] = useState('')
    let sendcommend=async()=>{
        let res=await props.addComment({commentvalue,index:props.index,datum:props.datum})
        if(res){
            setCommentvalue('')
        }
    }
        return (
            <Drawer
                        title={
                            <div>
                                <Avatar 
                                id='round2'
                                >K</Avatar>
                                <text className='desctitle'>{props.obj.subject}</text>
                                <text className='datetitle'>{props.obj.date},{props.obj.time}</text>
                            </div>}
                        placement='right'
                        onClose={props.onClose1}
                        visible={true}
                        width='400px'
                        headerStyle={{color:'#183247',fontSize:'14px',fontFamily:'Open Sans',fontWeight:'600'}}
                        closable={true}
                    >
                        <p className='msg'>{props.obj.description}</p>
                        <div className='outercomments'>
                            <div className='comments'>Comments</div>
                            <div className='comments1'>{props.obj.comments?props.obj.comments.length+' '+'replies':''} </div>
                        </div>
                        {props.obj.comments && props.obj.comments.map((item,j)=>{return(
                        <div>
                            <div className='outercomments'>
                                    <Avatar 
                                    id='round2'
                                    >K</Avatar>
                                    <text className='desctitle'>{props.obj.subject}</text>
                                    <text className='datecmd'>{props.obj.date},{props.obj.time}</text>
                            </div>
                            <p className='msg'>{item}</p>
                        </div>
                        )})}
                        <div className='cmdhead'>
                            <Row style={{width:'420px'}}>
                                <Col span={20}>
                                    <input className='firstcmd'
                                           placeholder='Be a first comment'
                                           value={commentvalue}
                                           onChange={e=>setCommentvalue(e.target.value)}/>
                                </Col>
                                <Col span={3}>
                                    <button className='cmdbtn' onClick={()=>sendcommend()}><SendOutlined style={{fontSize:'25px'}}/></button>
                                </Col>
                            </Row>
                        </div>
                    </Drawer>
        )
}

const mapStateToProps  = (state) => {
    return{
        datum:state.announce.alldata
    }
}
export default connect(mapStateToProps , {addComment})(Comment)
