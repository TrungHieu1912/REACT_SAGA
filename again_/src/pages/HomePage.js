import React from 'react'
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './style.scss';
import ItemPage from './ItemPage';
const { Header, Sider, Content } = Layout;
class HomePage extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <div id="home_main">
        <Router>
          <Layout>
            <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
              <div className="logo" >{!this.state.collapsed?'QUẢN LÝ ':'QL'}</div>
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" icon={<UserOutlined />}>
                  <Link to="/items">Chức năng</Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                  <Link to="/hai">Chuyển trang test1</Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<UploadOutlined />}>
                  <Link to="/ba">Chuyển trang test2</Link>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout className="site-layout">
              <Header className="site-layout-background" style={{ padding: 0 }}>
                {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                  className: 'trigger',
                  onClick: this.toggle,
                })}
              </Header>
              <Content
                className="site-layout-background"
                style={{
                  margin: '24px 16px',
                  padding: 24,
                  minHeight: 280,
                }}
              >
                <Switch>
                    <Route exact path="/items">
                    <div><ItemPage ></ItemPage></div>
                    </Route>
                    
                    <Route path="/hai">

                    </Route>
                    <Route path="/ba">
                      
                    </Route>
                  </Switch>
                
              </Content>
            </Layout>
          </Layout>
        </Router>

      </div>
    );
  }
}

export default HomePage;
