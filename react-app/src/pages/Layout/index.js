import { Layout, Menu, Popconfirm } from 'antd'
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import {
    HomeOutlined,
    DiffOutlined,
    EditOutlined,
    LogoutOutlined
} from '@ant-design/icons'
import './index.scss'
import { useStore } from '@/store'
import { useEffect } from 'react'

const { Header, Sider } = Layout

const GeekLayout = () => {
    const { pathname } = useLocation()  // 获取当前路由路径，用于转换菜单高亮
    const { userStore, loginStore } = useStore()

    useEffect(() => {
        try {
            userStore.getUserInfo()
        } catch { }
    }, [userStore])

    // 退出登录
    const navigate = useNavigate()
    const onConfirm = () => {
        // 删除token，跳回到登录
        loginStore.Logout()
        navigate('/login')
    }

    return (
        <Layout>
            <Header className="header">
                <div className="logo" />
                <div className="user-info">
                    <span className="user-name">{userStore.userInfo.name}</span>
                    <span className="user-logout">
                        <Popconfirm
                            onConfirm={onConfirm}
                            title="是否确认退出？" okText="退出" cancelText="取消">
                            <LogoutOutlined /> 退出登录
                        </Popconfirm>
                    </span>
                </div>
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        theme="dark"
                        defaultSelectedKeys={[pathname]}
                        style={{ height: '100%', borderRight: 0 }}>
                        <Menu.Item icon={<HomeOutlined />} key="/">
                            <Link to={'/'}>数据概览</Link>
                        </Menu.Item>
                        <Menu.Item icon={<DiffOutlined />} key="/article">
                            <Link to={'/article'}>内容管理</Link>
                        </Menu.Item>
                        <Menu.Item icon={<EditOutlined />} key="/publish">
                            <Link to={'/publish'}>发布文章</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                {/* <Layout className="layout-content" style={{ padding: 20 }}>内容</Layout> */}
                {/* 二级路由出口 */}
                <Outlet />
            </Layout>
        </Layout>
    )
}

export default observer(GeekLayout)