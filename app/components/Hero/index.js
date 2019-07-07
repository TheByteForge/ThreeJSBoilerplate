/**
 *
 * Hero
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import jumbotron from '../../images/carbon/jumbotron.png';

const StyledHero = styled.div`
  background: ${props => props.theme.colors.tertiary};
  background-image: url(${jumbotron});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.secondary};
  width: 100%;
  height: 90vh;
`;

function Hero() {
  return (
    <StyledHero>
      <FormattedMessage {...messages.header} />
    </StyledHero>
  );
}

Hero.propTypes = {};

export default memo(Hero);
