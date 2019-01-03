import React from 'react'
import {
  Button,
  Card,
  DatePicker,
  Icon,
  Radio,
  Select,
} from 'antd'

export default class FiltersAside extends React.Component {
  render () {
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };

    return (
      <>
        <Card style={{ marginBottom: 10 }}>
          <Radio.Group value={2}>
            <Radio style={radioStyle} value={1}>Assigned to me</Radio>
            <Radio style={radioStyle} value={2}>Unassigned</Radio>
            <Radio style={radioStyle} value={3}>View all</Radio>
          </Radio.Group>
        </Card>
        <Select size="large" defaultValue={2} style={{ width: '100%', marginBottom: 10 }}>
          <Select.Option value={1}>Period 2017</Select.Option>
          <Select.Option value={2}>Period 2018</Select.Option>
          <Select.Option value={3}>Period 2019</Select.Option>
          <Select.Option value={4}>Period 2020</Select.Option>
        </Select>
        <Select size="large" defaultValue={1} style={{ width: '100%', marginBottom: 10 }}>
          <Select.Option value={1}>Department</Select.Option>
          <Select.Option value={2}>IT</Select.Option>
          <Select.Option value={3}>HR</Select.Option>
          <Select.Option value={4}>Accounting</Select.Option>
        </Select>
        <Select size="large" defaultValue={1} style={{ width: '100%', marginBottom: 10 }}>
          <Select.Option value={1}>Region</Select.Option>
          <Select.Option value={2}>Europe</Select.Option>
          <Select.Option value={3}>Africa</Select.Option>
          <Select.Option value={4}>USA</Select.Option>
        </Select>
        <DatePicker size="large" placeholder="Start Date" format="DD/MM/YYYY" style={{ width: '100%', marginBottom: 10 }} />
        <Button type="primary" size="large" block>
          Apply Filters
          <Icon type="sync" />
        </Button>
      </>
    );
  }
}
