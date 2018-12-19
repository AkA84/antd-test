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
        theme="dark"
      >
        <Menu.Item key="search">
          <Icon type="search" />
          <span>Search</span>
        </Menu.Item>
        <SubMenu key="contacts" title={<span><Icon type="user" /><span>Contacts</span></span>}>
          <SubMenu key="new-individual" title={<span>New Individual</span>}>
            <Menu.Item key="new-student">New Student</Menu.Item>
            <Menu.Item key="new-parent">New Parent</Menu.Item>
            <Menu.Item key="new-staff">New Staff</Menu.Item>
          </SubMenu>
          <Menu.Item key="new-household">New Household</Menu.Item>
          <SubMenu key="new-organization" title={<span>New Organization</span>}>
            <Menu.Item key="new-team">New Team</Menu.Item>
            <Menu.Item key="new-parent">New Sponsor</Menu.Item>
          </SubMenu>
          <MenuDivider />
          <Menu.Item key="contact-reports">Contact reports</Menu.Item>
          <MenuDivider />
          <Menu.Item key="find-merge-duplicate">Find and merge duplicate contacts</Menu.Item>
        </SubMenu>
        <Menu.Item key="contributions">
          <Icon type="credit-card" />
          <span>Contributions</span>
        </Menu.Item>
        <Menu.Item key="events">
          <Icon type="calendar" />
          <span>Events</span>
        </Menu.Item>
        <Menu.Item key="mailing">
          <Icon type="mail" />
          <span>Mailing</span>
        </Menu.Item>
        <Menu.Item key="memberships">
          <Icon type="idcard" />
          <span>Memberships</span>
        </Menu.Item>
        <Menu.Item key="reports">
          <Icon type="bar-chart" />
          <span>Reports</span>
        </Menu.Item>
        <Menu.Item key="administer">
          <Icon type="setting" />
          <span>Administer</span>
        </Menu.Item>
        <Menu.Item key="support">
          <Icon type="question-circle" />
          <span>Support</span>
        </Menu.Item>
      </Menu>
    );
  }
}
