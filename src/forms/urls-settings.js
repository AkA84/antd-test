import React, { Component } from 'react';
import { Form, Input, Radio, message } from 'antd';

import FormButtons from '../components/form-buttons';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

const defaults = {
  resourceUrl: '[civicrm.root]/',
  imageUploadUrl: '[civicrm.files]/persist/contribute/',
  extensionUrl: '[civicrm.files]/ext/',
  disableCss: false,
  forceSSL: false,
  verifySSL: true
};

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 10 },
  },
};

class UrlsSettingsForm extends Component {
  state = {
    defaults,
    submitting: false
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ submitting: true }, () => {
      setTimeout(() => {
        this.setState({ submitting: false })
        message.success('Settings saved!');
      }, 1000);
    });
  }

  render () {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormButtons submitting={this.state.submitting} />
        <FormItem {...formItemLayout} label="CiviCRM Resource URL">
          {getFieldDecorator('resource-url', {
            initialValue: this.state.defaults.resourceUrl
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="Image Upload URL">
          {getFieldDecorator('image-upload-url', {
            initialValue: this.state.defaults.imageUploadUrl
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="Custom CSS URL">
          {getFieldDecorator('custom-css-url')(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="Disable CiviCRM css">
          {getFieldDecorator('disable-civicrm-css', {
            initialValue: this.state.defaults.disableCss
          })(
            <RadioGroup>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </RadioGroup>
          )}
          <div style={{ lineHeight: 1 }}>
            Prevent the stylesheet "civicrm.css" from being loaded.
          </div>
        </FormItem>
        <FormItem {...formItemLayout} label="Extension Resource URL">
          {getFieldDecorator('extension-resource-url', {
            initialValue: this.state.defaults.extensionUrl
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="Force Secure URLs (SSL)">
          {getFieldDecorator('force-secure-urls', {
            initialValue: this.state.defaults.forceSSL
          })(
            <RadioGroup>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </RadioGroup>
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="Verify SSL Certs">
          {getFieldDecorator('verify-ssl-certs', {
            initialValue: this.state.defaults.verifySSL
          })(
            <RadioGroup>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </RadioGroup>
          )}
          <div style={{ lineHeight: 1, color: 'red' }}>
            If disabled, outbound web-service requests will allow unverified, insecure HTTPS connections
          </div>
        </FormItem>
        <FormButtons submitting={this.state.submitting} />
      </Form>
    );
  }
}

export default Form.create()(UrlsSettingsForm);
