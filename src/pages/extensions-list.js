import React, { Component } from 'react';
import { Alert, Button, Card } from 'antd';

import ExtensionsList from '../components/extensions-list';

const tabList = [
  { key: 'extensions', tab: 'Extensions' },
  { key: 'add', tab: 'Add New' }
];

const contentList = {
  extensions: <ExtensionsList />,
  add: <p>---</p>,
};

export default class ExtensionsListPage extends Component {
  state = {
    key: 'extensions'
  }

  onTabChange = (key, type) => {
    this.setState({ [type]: key });
  }

  render () {
    return (
      <>
        <Button type="primary" icon="reload" style={{ marginBottom: '25px' }}>Refresh</Button>
        <Alert message={<div>
          CiviCRM extensions allow you to install additional features for your site. This page will automatically list the available "native" extensions from the CiviCRM.org extensions directory which are compatible with this version of CiviCRM. If you install Custom Searches, Reports or Payment Processor extensions - these will automatically be available on the corresponding menus and screens.<br />
          You may also want to check the directory for native Drupal modules that may be useful for you (CMS-specific modules are not listed here).
        </div>} type="info" />
        <div style={{ marginTop: '25px' }}>
          <Card
            tabList={tabList}
            activeTabKey={this.state.key}
            onTabChange={(key) => { this.onTabChange(key, 'key'); }}
            bodyStyle={{ padding: 0 }}>
            {contentList[this.state.key]}
          </Card>
        </div>
        <Button type="primary" icon="reload" style={{ marginTop: '25px' }}>Refresh</Button>
      </>
    )
  }
}
