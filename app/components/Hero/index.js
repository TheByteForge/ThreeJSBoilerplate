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

import Button from '../Button';

const StyledHero = styled.div`
  background: ${props => props.theme.colors.tertiary};
  background-image: url(${jumbotron});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${props => props.theme.colors.secondary};
  width: 100%;
  min-height: 50vh;
  border: 1px solid red;
  padding: 6rem;
  text-align: center;
`;

const Title = styled.h1`
  font-family: 'IBM Plex Sans';
  font-weight: 500;
  font-size: 2.5rem;
  color: ${props => props.theme.colors.text};
`;

const SubTitle = styled.h1`
  font-family: 'IBM Plex Sans';
  font-weight: 300;
  font-size: 1.25rem;
  color: ${props => props.theme.colors.text};
`;

function Hero() {
  return (
    <StyledHero>
      <Title>
        <FormattedMessage {...messages.title} />
      </Title>
      <SubTitle>
        <FormattedMessage {...messages.subtitle} />
      </SubTitle>
      <Button href="/">
        <FormattedMessage {...messages.cta_button} />
      </Button>
    </StyledHero>
  );
}

Hero.propTypes = {};

export default memo(Hero);
