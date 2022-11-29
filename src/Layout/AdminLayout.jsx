import {
    ShopOutlined,
    StarOutlined,
    ControlOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import utils from '../Utils/utils';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}
const items = [
    getItem('Store', 'sub1', <ShopOutlined />, [
        getItem(<Link to={'/admin/store'}>Management</Link>, '1'),
        getItem(<Link to={'/admin/store/create-product'}>Create Product</Link>, '2'),
        getItem(<Link to={'/admin/store/create-collection'}>Create Collection</Link>, '3'),
    ]),
    getItem('User', 'sub2', <UserOutlined />, [
        getItem(<Link to={'/admin/user'}>Management</Link>, '4'),
    ]),
    getItem('Theme Customizer', 'sub3', <ControlOutlined />, [
        getItem(<Link>Collection</Link>, '7'),
        getItem(<Link>Home</Link>, '8'),
        getItem(<Link>Product</Link>, '9'),
    ]),
    getItem('Review', '10', <StarOutlined />),
];


function AdminLayout() {
    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(false);
    const user = useSelector(state => state.user.user);
    const [auth, setAuth] = useState(false);
    useEffect(() => {
        console.log(user);
        const clientDevice = utils.getClientDevice();
        if (!user && user.role !== "admin") {
            alert('Please Login with an admin account to view this page!!!')
            navigate('/');
        } else {
            setAuth(true)
        }
        if(clientDevice === 'mobile') {
            alert('Please use tablet or computer devices to access to the dashboard!!!');
            navigate('/')
        }
    }, []);
    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            {auth && <>
                <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
                </Sider>
                <Layout className="site-layout">
                    <Header
                        className="site-layout-background dashboard-header"
                        style={{
                            padding: 0,
                            background: '#002140',
                            color: 'white',
                            fontWeight: '700',
                            fontSize: '20px',
                            letterSpacing: '2px',
                            textAlign: 'center',
                        }}
                    >
                        DASHBOARD
                    </Header>
                    <Content
                        style={{
                            margin: '0 16px',
                        }}
                    >
                        <Outlet />
                    </Content>
                    <Footer
                        style={{
                            textAlign: 'center',
                        }}
                    >
                        Vance commerce's dashboard
                    </Footer>
                </Layout>
            </>}
        </Layout>
    )
}

export default AdminLayout