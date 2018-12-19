import React, { Component } from 'react';
import { Alert } from 'antd';

import UrlsSettingsForm from '../forms/urls-settings';

export default class UrlsSettingsPage extends Component {
  render () {
    return (
      <>
        <Alert message={<div>
        These settings define the URLs used to access CiviCRM resources (CSS files, Javascript files, images, etc.)<br />
        You may configure these settings using absolute URLs or URL variables.
        </div>} type="info" />
        <div style={{ marginTop: '25px' }}>
          <UrlsSettingsForm />
        </div>
      </>
    )
  }
}
