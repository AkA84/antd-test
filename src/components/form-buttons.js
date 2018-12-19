import React, { Component } from 'react';
import { Form, Button } from 'antd';

const FormItem = Form.Item;

export default class FormButtons extends Component {
  render () {
    return (
      <FormItem>
        <Button type="primary" htmlType="submit" icon="check" style={{ marginRight: '10px' }} loading={this.props.submitting}>
          Save
        </Button>
        <Button htmlType="button" icon="close" disabled={this.props.submitting}>
          Cancel
        </Button>
      </FormItem>
    );
  }
}
