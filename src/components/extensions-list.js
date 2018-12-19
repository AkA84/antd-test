import React, { Component } from 'react';
import { Table, List } from 'antd';

import { extensions as dataSource } from '../data/extensions.json';

const columns = [
  {
    title: 'Extension name (key)',
    dataIndex: 'key',
    key: 'extension-name',
    render: (key, record) => (
      <div>
        <strong>{record.name || key}</strong><br />
        ({key})
      </div>
    ),
    defaultSortOrder: 'ascending',
    sorter: (a, b) => {
      if (a.key < b.key) { return -1; }
      if (a.key > b.key) { return 1; }
      return 0;
    }
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status'
  },
  {
    title: 'Version',
    dataIndex: 'version',
    key: 'version'
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type'
  },
  {
    dataIndex: 'status',
    key: 'actions',
    render: (status) => (
      <a href="/">{ status === 'enabled' ? 'Disable' : 'Enable' }</a>
    )
  }
];

function getRowClass (record) {
  return record.status === 'disabled' ? 'extension-disabled' : 'extension-enabled';
}

function formatAdditionalData (data) {
  return Object.keys(data).map(key => {
    return {
      title: key,
      description: data[key]
    };
  });
}

export default class ExtensionsList extends Component {
  render () {
    return (
      <Table
        dataSource={dataSource}
        columns={columns}
        rowClassName={getRowClass}
        pagination={false}
        expandedRowRender={record => {
          if (!record.additional) {
            return <p>No additional information available</p>;
          }

          return <List
            itemLayout="horizontal"
            bordered
            dataSource={formatAdditionalData(record.additional)}
            renderItem={item => (
              <List.Item>
              <List.Item.Meta
                title={<a href="https://ant.design">{item.title}</a>}
                description={item.description}
              />
              </List.Item>
            )}
          />
        }}
      />
    );
  }
}
