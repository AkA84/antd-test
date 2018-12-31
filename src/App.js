import faker from 'faker';
import React from 'react';
import Media from 'react-media';
import {
  Breadcrumb,
  Card,
  Col,
  Drawer,
  Icon,
  Layout,
  Row,
  Select,
} from 'antd';

import MainMenu from './components/main-menu';
import MainTable from './components/main-table';
import TopForm from './components/top-form';
import FiltersAside from './components/filters-aside';

import './App.css';

const dataSource = [...Array(30)].map((i, index) => ({
  key: index,
  name: faker.name.findName(),
  avatar: faker.image.avatar(),
  type: 'TOIL (in days)',
  amount: `+${Math.random().toFixed(1)}`,
  date: faker.date.future(),
  status: '+info req.'
}));

export default class App extends React.Component {
  state = {
    collapsed: false,
    showFilters: true
  }

  onCollapse = () => {
    this.setState(prevState => ({
      collapsed: !prevState.collapsed
    }))
  }

  toggleFiltersVisibility = value => {
    this.setState(prevState => ({
      showFilters: value
    }))
  }

  render() {
    return (
      <Layout>
        <Media query="(max-width: 1023px)">
          {matches => (
            <Layout.Sider
              breakpoint="md"
              width={matches ? 216 : 240}
              theme="light">
              <div style={{ textAlign: 'center' }}>
                <h1>
                  <Icon type="calendar" /><br />Leave
                </h1>
              </div>
              <MainMenu />
            </Layout.Sider>
          )}
        </Media>
        <Media query="(max-width: 1279px)">
          {matches => (
            <Layout.Content style={{ padding: matches ? '25px 16px' : '25px 36px' }}>
              <Breadcrumb style={{ marginBottom: 35 }}>
                <Breadcrumb.Item>CiviCloud</Breadcrumb.Item>
                <Breadcrumb.Item>Leave</Breadcrumb.Item>
                <Breadcrumb.Item>Leave Requests</Breadcrumb.Item>
              </Breadcrumb>
              <div>
                <Row gutter={8} style={{ marginBottom: 29 }}>
                  <Col span={8}>
                    <h2 style={{ marginBottom: 0 }}><Icon type="calendar" />Leave Requests</h2>
                  </Col>
                  <Col span={16}>
                    <div style={{ float: 'right' }}>
                      <TopForm showFilters={this.state.showFilters} cb={this.toggleFiltersVisibility.bind(this)} />
                    </div>
                  </Col>
                </Row>
                <Row gutter={8}>
                  <Col span={this.state.showFilters && !matches ? 18 : 24}>
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
                      <MainTable data={dataSource} />
                    </Card>
                  </Col>
                  <Col span={this.state.showFilters && !matches ? 6 : 0}>
                    <Card style={{ background: '#e6e6e6' }}>
                      <FiltersAside />
                    </Card>
                  </Col>
                </Row>
              </div>
              { matches &&
                <Drawer
                title="Filters"
                placement="right"
                closable={true}
                visible={this.state.showFilters}
                onClose={this.toggleFiltersVisibility.bind(this, false)}
                width="300">
                  <FiltersAside />
                </Drawer>
              }
            </Layout.Content>
          )}
        </Media>
      </Layout>
    );
  }
}
