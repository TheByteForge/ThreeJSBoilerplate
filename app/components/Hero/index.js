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

import Button from '../Button';

const StyledHero = styled.div`
  background: ${props => props.theme.colors.tertiary};
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${props => props.theme.colors.secondary};
  padding: 10%;
  text-align: center;

  a {
    margin: 2rem 0rem;
  }

  /* Set rules to fill background */
  min-height: 80vh;
  min-width: 100%;

  /* Set up proportionate scaling */
  width: 100%;
  height: auto;
`;

const Title = styled.h1`
  font-family: 'IBM Plex Sans';
  font-weight: 700;
  font-size: 3rem;
  color: ${props => props.theme.colors.text};
`;

const SubTitle = styled.h1`
  font-family: 'IBM Plex Sans';
  font-weight: 300;
  font-size: 1.5rem;
  color: ${props => props.theme.colors.text};
`;

function Hero(props) {
  const { buttonVisible } = props;

  if (buttonVisible) {
    return (
      <StyledHero img={props.img}>
        <Title>
          {props.title}

          {/* <FormattedMessage {...messages.title} /> */}
        </Title>
        <SubTitle>
          {/* <FormattedMessage {...messages.subtitle} /> */}
          {props.subtitle}
        </SubTitle>
        <Button href="/">
          {/* <FormattedMessage {...messages.cta_button} /> */}
          {props.buttontitle}
        </Button>
      </StyledHero>
    );
  }
  return (
    <StyledHero img={props.img}>
      <Title>
        {props.title}

        {/* <FormattedMessage {...messages.title} /> */}
      </Title>
      <SubTitle>
        {/* <FormattedMessage {...messages.subtitle} /> */}
        {props.subtitle}
      </SubTitle>
    </StyledHero>
  );
}

Hero.propTypes = {};

export default memo(Hero);
