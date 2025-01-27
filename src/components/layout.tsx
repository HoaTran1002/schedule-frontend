import { logout } from '@/app/features/auth/auth.slice'
import { useAppDispatch } from '@/app/hooks'
import {
  AuditOutlined,
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PartitionOutlined,
  TeamOutlined
} from '@ant-design/icons'
import { Button, Layout, Menu, theme } from 'antd'
import { ReactNode, useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface Props {
  children: ReactNode
}

type itemSidebar = {
  key: string
  icon: ReactNode
  label: string
}

const Siderbars: itemSidebar[] = [
  {
    key: '/',
    icon: <HomeOutlined />,
    label: 'Home'
  },

  {
    key: '/companionUnit',
    icon: <TeamOutlined />,
    label: 'companionUnit'
  },
  {
    key: '/plan',
    icon: <AuditOutlined />,
    label: 'Plan'
  },
  {
    key: '/organizational',
    icon: <PartitionOutlined />,
    label: 'organizational'
  },
  {
    key: '/assign',
    icon: <PartitionOutlined />,
    label: 'Assign'
  }
]

const LayoutContent = ({ children }: Props) => {
  const navigate = useNavigate()
  const { Header, Content, Sider } = Layout
  const [collapsed, setCollapsed] = useState(false)
  const dispatch = useAppDispatch()
  const {
    token: { colorBgContainer }
  } = theme.useToken()

  return (
    <Layout>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          borderRight: '1px solid rgba(5, 5, 5, 0.06)'
        }}
        theme='light'
        width={280}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <img
          src={collapsed ? '' : 'https://sinhvien.hufi.edu.vn/Content/AConfig/images/sv_logo_dashboard.png'}
          alt=''
          style={{ width: '100%', margin: '5px 0', objectFit: 'cover' }}
        />
        <div className='demo-logo-vertical' />
        <Menu
          theme='light'
          mode='inline'
          defaultSelectedKeys={['1']}
          items={Siderbars}
          onClick={(e) => {
            navigate(e.key)
          }}
        />
        <Button danger style={{ marginLeft: 20 }} onClick={() => dispatch(logout())}>
          logout
        </Button>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            borderBottom: '1px solid rgba(5, 5, 5, 0.06)',
            boxShadow: '0 .5px 6px 0 #ccc',
            position: 'fixed',
            top: 0,
            left: collapsed ? 81 : 281,
            width: '100%',
            transition: '.15s all ease',
            zIndex: 10
          }}
        >
          <Button
            type='text'
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64
            }}
          />
        </Header>
        <Content
          style={{
            padding: 0,
            marginBottom: 16,
            marginTop: 72,
            marginRight: 6,
            marginLeft: collapsed ? 82 : 282,
            minHeight: '100vh',
            background: colorBgContainer,
            transition: '.15s all ease',
            zIndex: 1
          }}
        >
          <div style={{ padding: '4px 8px', background: colorBgContainer }}>{children}</div>
        </Content>
      </Layout>
    </Layout>
  )
}

export default LayoutContent
