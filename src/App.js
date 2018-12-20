import faker from 'faker';
import React from 'react';
import {
  Avatar,
  Breadcrumb,
  Button,
  Card,
  Col,
  DatePicker,
  Dropdown,
  Icon,
  Menu,
  Radio,
  Row,
  Select,
  Switch,
  Table,
} from 'antd';

import './App.css';

const menu = (
  <Menu>
    <Menu.Item key="1">1st action</Menu.Item>
    <Menu.Item key="2">2nd action</Menu.Item>
    <Menu.Item key="3">3rd action</Menu.Item>
    <Menu.Item key="4">4th action</Menu.Item>
  </Menu>
);

const dataSource = [...Array(30)].map((i, index) => ({
  key: index,
  name: faker.name.findName(),
  avatar: faker.image.avatar(),
  type: 'TOIL (in days)',
  amount: `+${Math.random().toFixed(1)}`,
  date: faker.date.future(),
  status: '+info required'
}));

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 250,
    render: (name, props) => (
      <div><Avatar src={props.avatar} /> {name}</div>
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
    width: 150,
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    width: 180,
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
        <Button>
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

export default class App extends React.Component {
  render() {
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };

    return (
      <>
      <Breadcrumb>
         <Breadcrumb.Item>CiviCloud</Breadcrumb.Item>
        <Breadcrumb.Item>Leave</Breadcrumb.Item>
        <Breadcrumb.Item>Leave Requests</Breadcrumb.Item>
      </Breadcrumb>
      <div>
        <Row gutter={8}>
          <Col span={12}>
            <h1><Icon type="calendar" />Leave Requests</h1>
          </Col>
          <Col span={12}>
            <div style={{ float: 'right' }}>
              Record
              <Button.Group>
                <Button>Absence <Icon type="user" /></Button>
                <Button>Overtime <Icon type="clock-circle" /></Button>
              </Button.Group>
              <Button>Show Filters<Switch defaultChecked size="small" /></Button>
            </div>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={18}>
            <Row>
              <Col span={12}>
                <Select defaultValue={0} dropdownMatchSelectWidth={false}>
                  <Select.Option value={0}>Actions</Select.Option>
                  <Select.Option value={2}>Bulk Action #1</Select.Option>
                  <Select.Option value={3}>Bulk Action #2</Select.Option>
                  <Select.Option value={4}>Bulk Action #3</Select.Option>
                </Select>
              </Col>
              <Col span={12}>
                <div style={{ float: 'right' }}>
                  <Select
                    defaultValue="contacts">
                    <Select.Option value="contacts">Contacts</Select.Option>
                    <Select.Option value="organizations">Organizations</Select.Option>
                  </Select>
                  <Select
                    style={{ width: 250 }}
                    placeholder="Search / Filter"
                    showArrow={false}>
                    {dataSource.map(user => (
                      <Select.Option value={user.id}>{user.name}</Select.Option>
                    ))}
                  </Select>
                </div>
              </Col>
            </Row>
            <Table
              rowSelection={{}}
              dataSource={dataSource}
              columns={columns}
              pagination={false}
              scroll={{ y: 800 }}
              size="small" />
          </Col>
          <Col span={6}>
            <Card style={{ background: '#e6e6e6' }}>
              <Card>
                <Radio.Group value={2}>
                  <Radio style={radioStyle} value={1}>Assigned to me</Radio>
                  <Radio style={radioStyle} value={2}>Unassigned</Radio>
                  <Radio style={radioStyle} value={3}>View all</Radio>
                </Radio.Group>
              </Card>
              <Select defaultValue={2} style={{width: '100%'}}>
                <Select.Option value={1}>Period 2017</Select.Option>
                <Select.Option value={2}>Period 2018</Select.Option>
                <Select.Option value={3}>Period 2019</Select.Option>
                <Select.Option value={4}>Period 2020</Select.Option>
              </Select>
              <Select defaultValue={1} style={{width: '100%'}}>
                <Select.Option value={1}>Department</Select.Option>
                <Select.Option value={2}>IT</Select.Option>
                <Select.Option value={3}>HR</Select.Option>
                <Select.Option value={4}>Accounting</Select.Option>
              </Select>
              <Select defaultValue={1} style={{width: '100%'}}>
                <Select.Option value={1}>Region</Select.Option>
                <Select.Option value={2}>Europe</Select.Option>
                <Select.Option value={3}>Africa</Select.Option>
                <Select.Option value={4}>USA</Select.Option>
              </Select>
              <DatePicker placeholder="Start Date"  style={{width: '100%'}} />
              <Button type="primary" size="large" block>
                Apply Filters
                <Icon type="sync" />
              </Button>
            </Card>
          </Col>
        </Row>
      </div>
      </>
    );
  }
}
