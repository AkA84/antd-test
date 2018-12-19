import React, { Component } from 'react';
import { Layout, Divider } from 'antd';

import MainMenu from './components/main-menu';
import ExtensionsListPage from './pages/extensions-list';
import UrlsSettingsPage from './pages/urls-settings';

import './App.css';

const { Content } = Layout;

export default class App extends Component {
  state = {
    showUrl: true,
    collapsed: false
  }

  toggleView = e => {
    e.preventDefault();

    this.setState(prevState => ({
      showUrl: !prevState.showUrl
    }))
  }

  onCollapse = () => {
    this.setState(prevState => ({
      collapsed: !prevState.collapsed
    }))
  }

  render() {
    return (
      <Layout>
        <Layout.Sider
          breakpoint="md"
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}>
          <MainMenu />
        </Layout.Sider>
        <Content style={{ padding: '25px 50px' }}>
          <div style={{ textAlign: 'center', margin: '10px 20px', fontSize: '20px' }}>
            <a href="/" onClick={this.toggleView}>
              {this.state.showUrl ? 'Switch to the extensions page' : 'Switch to the resource URLs page'}
            </a>
          </div>
          <Divider />
          {this.state.showUrl ? <UrlsSettingsPage /> : <ExtensionsListPage />}
        </Content>
      </Layout>
    );
  }
}
