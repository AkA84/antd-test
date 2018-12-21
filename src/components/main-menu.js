import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuDivider = Menu.Divider;

export default class MainMenu extends Component {
  state = {
    current: 'contributions',
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="inline"
        theme="light"
      >
        <Menu.Item key="dashboard">
          <Icon type="dashboard" />
          <span>Dashboard</span>
        </Menu.Item>
        <SubMenu key="requests" title={<span><Icon type="inbox" /><span>Requests</span></span>}>
          <Menu.Item key="requests-1">
            <Icon type="question-circle" />
            <span>Menu #1</span>
          </Menu.Item>
          <Menu.Item key="requests-2">
            <Icon type="question-circle" />
            <span>Menu #2</span>
          </Menu.Item>
          <Menu.Item key="requests-3">
            <Icon type="question-circle" />
            <span>Menu #3</span>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="calendar">
          <Icon type="calendar" />
          <span>Calendar</span>
        </Menu.Item>
        <Menu.Item key="balance">
          <Icon type="fund" />
          <span>Balance</span>
        </Menu.Item>
        <Menu.Item key="settings">
          <Icon type="setting" />
          <span>Settings</span>
        </Menu.Item>
        <Menu.Item key="reports">
          <Icon type="bar-chart" />
          <span>Reports</span>
        </Menu.Item>
        <MenuDivider />
        <Menu.Item key="support">
          <Icon type="setting" />
          <span>Support</span>
        </Menu.Item>
        <Menu.Item key="setup-guide">
          <Icon type="rocket" />
          <span>Setup Guide</span>
        </Menu.Item>
        <Menu.Item key="preferences">
          <Icon type="sliders" />
          <span>Preferences</span>
        </Menu.Item>
        <Menu.Item key="field-options">
          <Icon type="edit" />
          <span>Field Options</span>
        </Menu.Item>
        <Menu.Item key="rss">
          <Icon type="database" />
          <span>RSS Feeds</span>
        </Menu.Item>
      </Menu>
    );
  }
}
