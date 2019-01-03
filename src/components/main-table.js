import React from 'react'
import Media from 'react-media';
import { Avatar, Dropdown, Button, Icon, Menu, Table } from 'antd'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (name, props) => (
      <div><Avatar src={props.avatar} style={{ marginRight: 17 }}/> <span className="truncate-name">{name}</span></div>
    ),
    sorter: (a, b) => {
      if (a.name < b.name) { return -1; }
      if (a.name > b.name) { return 1; }
      return 0;
    }
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    render: (date, props) => (
      <div>{props.amount} {date.toLocaleDateString()}</div>
    ),
    sorter: (a, b) => b.date - a.date
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    key: 'actions',
    render: () => (
      <Dropdown overlay={menu}>
        <Button size="small">
          Actions <Icon type="ellipsis" style={{ transform: 'rotate(90deg)' }} />
        </Button>
      </Dropdown>
    )
  },
  {
    key: 'view',
    render: () => (
      <a href="/">View <Icon type="right" /></a>
    )
  }
];

const menu = (
  <Menu>
    <Menu.Item key="1">1st action</Menu.Item>
    <Menu.Item key="2">2nd action</Menu.Item>
    <Menu.Item key="3">3rd action</Menu.Item>
    <Menu.Item key="4">4th action</Menu.Item>
  </Menu>
);

const rowSelection = {
  columnWidth: 10
}

export default class MainTable extends React.Component {
  render () {
    return (
      <Media query="(max-width: 1023px)">
        {matches => (
          <Table
            className="cpc-table-responsive"
            style={{ marginLeft: -24, marginRight: -24 }}
            rowSelection={rowSelection}
            dataSource={this.props.data}
            columns={!matches ? columns: columns.filter(column => ~['name', 'type', 'actions', 'view'].indexOf(column.key))}
            pagination={false}
            scroll={{ y: 800 }}
            size="small" />
        )}
      </Media>
    )
  }
}
