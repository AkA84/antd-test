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

const dataSource = [...Array(15)].map((i, index) => ({
  key: index,
  name: 'Mattie Wilson',
  type: 'TOIL (in days)',
  amount: '+0.5d',
  date: '28/12/2018',
  status: '+info required'
}));

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (name) => (
      <div><Avatar style={{ backgroundColor: '#BF795C' }} icon="user" /> {name}</div>
    )
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
      <div>{props.amount} {date}</div>
    )
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
      <div>View <Icon type="right" /></div>
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
            <Table
              rowSelection={{}}
              dataSource={dataSource}
              columns={columns}
              pagination={false}
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