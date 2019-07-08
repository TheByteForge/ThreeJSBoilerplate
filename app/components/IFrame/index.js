/**
 *
 * IFrame
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function IFrame() {
  return (
    <div>
      {/* <FormattedMessage {...messages.header} /> */}
      <iframe
        src={this.props.src}
        height={this.props.height}
        width={this.props.width}
      />
    </div>
  );
}

IFrame.propTypes = {};

export default memo(IFrame);
