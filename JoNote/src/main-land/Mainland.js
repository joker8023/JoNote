import React, {Component} from 'react';
import './Mainland.css';
import {Dropdown, Icon, Layout, Menu} from 'antd';
import Latestdoc from '../latest-doc/Latestdoc';
import Link from "react-router-dom/es/Link";
import Route from "react-router-dom/es/Route";
import Redirect from "react-router-dom/es/Redirect";
import axios from 'axios'

const {SubMenu} = Menu;
const {Header, Content, Footer, Sider} = Layout;


class Mainland extends Component {
    constructor(props) {
        super(props);
        this.state = {
            folderlist: [],
            loading: true
        };
    }
    componentWillMount() {
        getfolderinfo().then(data => {
            this.setState({folderlist:data.data.message})
        })
    }


    render() {
        const menu = (
            <Menu>
                <SubMenu title="新建">
                    <Menu.Item>笔记</Menu.Item>
                    <Menu.Item>markdown</Menu.Item>
                    <Menu.Item>文件夹</Menu.Item>
                </SubMenu>
                <SubMenu title="上传">
                    <Menu.Item>文件</Menu.Item>
                    <Menu.Item>文件夹</Menu.Item>
                </SubMenu>
                <Menu.Item>重命名</Menu.Item>
                <Menu.Item>删除</Menu.Item>
                <Menu.Item>分享</Menu.Item>
            </Menu>
        );
        return (
            <Layout className="layout" style={ { height:"100vh" } }>
                <Header className="header">
                    <div className="logo"/>
                </Header>
                <Content style={{padding: '0 50px'}}>

                    <Layout style={{padding: '24px 0', background: '#fff',height:"85vh"}}>
                        <Sider width={200} style={{background: '#fff', overflow: 'auto', height: '100vh', position: 'fixed', left: 0}} className="topnav_box">
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['2']}
                                defaultOpenKeys={['sub1']}
                                style={{height: '100%'}}
                            >
                                <Menu.Item key="1">
                                    <Link to="/latestdoc"> <span><Icon type="file"/>最新文档</span></Link>
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <span><Icon type="share-alt"/>与我分享</span>
                                </Menu.Item>

                                <SubMenu key="sub3" title={<span><Icon type="folder-open"/>我的文件夹</span>}>
                                    {
                                        this.state.folderlist.map((item,i)=> <Menu.Item key={i+3}>  <Dropdown overlay={menu} trigger={['contextMenu']}><span><Icon type="folder"/>{item.Name}</span></Dropdown></Menu.Item>)
                                        }
                                </SubMenu>

                            </Menu>
                        </Sider>
                        <Content style={{padding: '0 24px', minHeight: 280,marginLeft:'200px'}}>
                            <Route exact path="/" render={() => (
                                <Redirect to="/latestdoc"/>
                            )}/>
                            <Route path="/latestdoc" component={Latestdoc} ></Route>
                        </Content>
                    </Layout>
                </Content>
                <Footer style={{textAlign: 'center'}}>
                    JoNote ©{new Date().getFullYear()} Created by Joker
                </Footer>
            </Layout>
        );
    }
}
function getfolderinfo() {
    return axios.get('/folderinfo');
}

export default Mainland;