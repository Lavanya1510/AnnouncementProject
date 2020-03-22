import React, { useState } from 'react'
import { Layout, Menu, Row, Col } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  SoundOutlined
} from '@ant-design/icons';
import './Sidebar.css'
import AnnounceContent from './AnnounceContent';
const { Header, Sider, Content } = Layout;
function Sidebar() {
    const [collapsed, setcollapsed] = useState(false);
    let toggle = () => {
        setcollapsed(!collapsed)
    };
    let logout=()=>{
        window.location.href='/Login'
    }
        return (
            <Layout id='layside'>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                <Row style={{padding:'10px 15px',backgroundColor:'#183247',opacity:'0.32',height:'50px',display:'flex',alignItems:'center',fontFamily:'Open Sans'}}>
                    {!collapsed &&
                        <Col span={21}>
                            <text style={{color:'white',float:'left',fontSize:'20px',color:'#3BC163',fontWeight:'600'}}>SA-INTRANET</text>
                        </Col>
                    }
                    <Col span={3}>
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: toggle,
                        })}
                    </Col>
                    
                </Row>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" id='iconsize'>
                        <SoundOutlined/>
                        <span className='sidehead'>Announcement</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <UserOutlined id='iconsize1'/>
                        <span className='sidehead' onClick={()=>logout()}>Logout</span>
                    </Menu.Item>
                </Menu>
                </Sider>
                <AnnounceContent />
            </Layout>
        )
}

export default Sidebar
