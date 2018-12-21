import React from 'react'
import { Button, Form, Icon, Switch } from 'antd'

class TopForm extends React.Component {
  render () {
    const { getFieldDecorator } = this.props.form;

    return (<Form layout="inline">
      <Form.Item>
        <span>Record</span>
      </Form.Item>
      <Form.Item>
        <Button.Group>
          <Button>Absence <Icon type="user" /></Button>
          <Button>Overtime <Icon type="clock-circle" /></Button>
        </Button.Group>
      </Form.Item>
      <Form.Item label="Show Filters">
        {getFieldDecorator('switch', { initialValue: true, valuePropName: 'checked' })(
          <Switch onChange={this.props.cb} size="small" />
        )}
      </Form.Item>
    </Form>)
  }
}

export default Form.create()(TopForm);
