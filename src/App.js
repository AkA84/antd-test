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
  Layout,
  Menu,
  Radio,
  Row,
  Select,
  Table,
} from 'antd';

import MainMenu from './components/main-menu';
import TopForm from './components/top-form';

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
  status: '+info req.'
}));

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
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

const rowSelection = {
  columnWidth: 10
}

export default class App extends React.Component {
  state = {
    collapsed: false
  }

  onCollapse = () => {
    this.setState(prevState => ({
      collapsed: !prevState.collapsed
    }))
  }

  render() {
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };

    return (
      <Layout>
        <Layout.Sider
          breakpoint="md"
          width={240}
          theme="light">
          <div style={{ textAlign: 'center' }}>
            <h1>
              <Icon type="calendar" /><br />Leave
            </h1>
          </div>
          <MainMenu />
        </Layout.Sider>
        <Layout.Content style={{ padding: '25px 36px' }}>
          <Breadcrumb style={{ marginBottom: 35 }}>
             <Breadcrumb.Item>CiviCloud</Breadcrumb.Item>
            <Breadcrumb.Item>Leave</Breadcrumb.Item>
            <Breadcrumb.Item>Leave Requests</Breadcrumb.Item>
          </Breadcrumb>
          <div>
            <Row gutter={8} style={{ marginBottom: 29 }}>
              <Col span={12}>
                <h2 style={{ marginBottom: 0 }}><Icon type="calendar" />Leave Requests</h2>
              </Col>
              <Col span={12}>
                <div style={{ float: 'right' }}>
                  <TopForm />
                </div>
              </Col>
            </Row>
            <Row gutter={8}>
              <Col span={18}>
                <Card bodyStyle={{ paddingBottom: 0 }}>
                  <Row style={{ marginBottom: 20 }}>
                    <Col span={12}>
                      <Select defaultValue={0} dropdownMatchSelectWidth={false} style={{ width: 200 }}>
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
                          style={{ width: 230 }}
                          placeholder="Search / Filter"
                          showArrow={false}>
                          {dataSource.map(user => (
                            <Select.Option key={user.key} value={user.id}>{user.name}</Select.Option>
                          ))}
                        </Select>
                      </div>
                    </Col>
                  </Row>
                  <Table
                    style={{ marginLeft: -24, marginRight: -24 }}
                    rowSelection={rowSelection}
                    dataSource={dataSource}
                    columns={columns}
                    pagination={false}
                    scroll={{ y: 800 }}
                    size="small" />
                </Card>
              </Col>
              <Col span={6}>
                <Card style={{ background: '#e6e6e6' }}>
                  <Card style={{ marginBottom: 10 }}>
                    <Radio.Group value={2}>
                      <Radio style={radioStyle} value={1}>Assigned to me</Radio>
                      <Radio style={radioStyle} value={2}>Unassigned</Radio>
                      <Radio style={radioStyle} value={3}>View all</Radio>
                    </Radio.Group>
                  </Card>
                  <Select defaultValue={2} style={{ width: '100%', marginBottom: 10 }}>
                    <Select.Option value={1}>Period 2017</Select.Option>
                    <Select.Option value={2}>Period 2018</Select.Option>
                    <Select.Option value={3}>Period 2019</Select.Option>
                    <Select.Option value={4}>Period 2020</Select.Option>
                  </Select>
                  <Select defaultValue={1} style={{ width: '100%', marginBottom: 10 }}>
                    <Select.Option value={1}>Department</Select.Option>
                    <Select.Option value={2}>IT</Select.Option>
                    <Select.Option value={3}>HR</Select.Option>
                    <Select.Option value={4}>Accounting</Select.Option>
                  </Select>
                  <Select defaultValue={1} style={{ width: '100%', marginBottom: 10 }}>
                    <Select.Option value={1}>Region</Select.Option>
                    <Select.Option value={2}>Europe</Select.Option>
                    <Select.Option value={3}>Africa</Select.Option>
                    <Select.Option value={4}>USA</Select.Option>
                  </Select>
                  <DatePicker placeholder="Start Date" format="DD/MM/YYYY" style={{ width: '100%', marginBottom: 10 }} />
                  <Button type="primary" size="large" block>
                    Apply Filters
                    <Icon type="sync" />
                  </Button>
                </Card>
              </Col>
            </Row>
          </div>
        </Layout.Content>
      </Layout>
    );
  }
}
