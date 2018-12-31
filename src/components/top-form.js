import React from 'react'
import Media from 'react-media';
import { Button, Form, Icon, Switch } from 'antd'

class TopForm extends React.Component {
  render () {
    return (
      <Media query="(max-width: 1023px)">
        {matches => (
          <Form layout="inline">
            {!matches &&
              <Form.Item>
                <span>Record</span>
              </Form.Item>
            }
            {!matches &&
              <Form.Item>
                <Button.Group>
                  <Button>Absence <Icon type="user" /></Button>
                  <Button>Overtime <Icon type="clock-circle" /></Button>
                </Button.Group>
              </Form.Item>
            }
            <Form.Item label="Show Filters">
              <Switch checked={this.props.showFilters} onChange={this.props.cb} size="small" />
            </Form.Item>
          </Form>
        )}
      </Media>
    )
  }
}

export default Form.create()(TopForm);
