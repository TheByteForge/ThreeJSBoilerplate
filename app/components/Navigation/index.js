/**
 *
 * Navigation
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import StyledNavigation from './StyledNavigation';

import Button from '../Button';

import messages from './messages';

function Navigation() {
  return (
    <StyledNavigation>
      {/* <FormattedMessage {...messages.header} /> */}
      <Button href="/">Home</Button>
      <Button href="/StyleGuide">Style Guide</Button>
    </StyledNavigation>
  );
}

Navigation.propTypes = {};

export default memo(Navigation);
