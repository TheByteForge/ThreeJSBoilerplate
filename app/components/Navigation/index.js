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
      <Button href="/">
        <FormattedMessage {...messages.home} />
      </Button>
      <Button href="/About">
        <FormattedMessage {...messages.about} />
      </Button>
      <Button href="/Carbon">
        <FormattedMessage {...messages.carbon} />
      </Button>
      <Button href="/StyleGuide">
        <FormattedMessage {...messages.styleguide} />
      </Button>
    </StyledNavigation>
  );
}

Navigation.propTypes = {};

export default memo(Navigation);
