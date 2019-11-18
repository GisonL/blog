import React from 'react'
import { Layout, Menu } from 'antd'
import styles from './index.scss'
import { Link } from 'react-router-dom'
const { Header, Content, Footer } = Layout

export default props => {
  // const { children } = props
  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        <div className={styles.logo}>Gison</div>
        <Menu
          className={styles.menu}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
        >
          <Menu.Item key="1">
            <Link to="/home" />
            Home
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/about" />
            About
          </Menu.Item>
        </Menu>
      </Header>
      <Content className={styles.content}>
        <div className={styles.basic}>{props.children}</div>
      </Content>
      <Footer className={styles.footer}>Gison's blog</Footer>
    </Layout>
  )
}
