import React, {Component} from 'react';
import './Mainland.css';
import {Icon, Layout, Menu} from 'antd';
import Latestdoc from '../latest-doc/Latestdoc';
import Link from "react-router-dom/es/Link";
import Route from "react-router-dom/es/Route";
import Redirect from "react-router-dom/es/Redirect";

const {SubMenu} = Menu;
const {Header, Content, Footer, Sider} = Layout;

class Mainland extends Component {
    render() {
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
                                    <Menu.Item key="9"><span><Icon type="folder"/>1</span></Menu.Item>
                                    <Menu.Item key="10"><span><Icon type="folder"/>2</span></Menu.Item>
                                    <Menu.Item key="11"><span><Icon type="folder"/>3</span></Menu.Item>
                                    <Menu.Item key="12"><span><Icon type="folder"/>4</span></Menu.Item>
                                    <Menu.Item key="13"><span><Icon type="folder"/>4</span></Menu.Item>
                                    <Menu.Item key="14"><span><Icon type="folder"/>4</span></Menu.Item>
                                    <Menu.Item key="15"><span><Icon type="folder"/>4</span></Menu.Item>
                                    <Menu.Item key="16"><span><Icon type="folder"/>4</span></Menu.Item>
                                    <Menu.Item key="17"><span><Icon type="folder"/>4</span></Menu.Item>
                                    <Menu.Item key="18"><span><Icon type="folder"/>4</span></Menu.Item>

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

export default Mainland;