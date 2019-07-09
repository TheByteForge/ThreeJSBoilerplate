/**
 *
 * Carbon
 *
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import styled from 'styled-components';

import messages from './messages';

import Navigation from '../../components/Navigation';
import PageContainer from '../../components/PageContainer/PageContainer';

import Hero from '../../components/Hero';
import Img from '../../components/Img/index';
import Button from '../../components/Button';

import jumbotron from '../../images/carbon/jumbotron.png';
import jumbotron2 from '../../images/carbon/jumbotron-lab.jpg';
import jumbotron3 from '../../images/carbon/jumbotron-work.jpg';
import card from '../../images/carbon/card.jpg';
import card2 from '../../images/carbon/card2.jpg';
import card3 from '../../images/carbon/card3.jpg';
import card4 from '../../images/carbon/card4.jpg';
import card5 from '../../images/carbon/card5.jpg';

const Title = styled.h1`
  font-family: 'IBM Plex Sans';
  font-weight: 300;
  color: ${props => props.theme.colors.secondary};
`;

const ImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
`;

const BlogColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const BlogSection = styled.div`
  display: flex;
  flex-direction: row;
  text-align: left;
  justify-content: center;
  padding: 10%;
  color: ${props => props.theme.colors.white};
  background: ${props => props.theme.colors.tertiary};
`;

const TextSection = styled.div`
  color: ${props => props.theme.colors.tertiary};
  background: ${props => props.theme.colors.white};
  width: 100%;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10%;

  h1 {
    font-weight: 700;
    font-size: 3rem;
  }
  p {
    font-size: 1.5rem;
  }
  img {
    padding: 2%;
  }
`;

const Menu = styled.div`
  color: ${props => props.theme.colors.tertiary};
  background: ${props => props.theme.colors.black};
  border: 1px solid red;
  width: 5rem;
  height: 5rem;
`;

const CardContainer = styled.div`
  color: ${props => props.theme.colors.tertiary};
  background: ${props => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
`;

export class Carbon extends React.PureComponent {
  render() {
    return (
      <PageContainer>
        <Title>
          <FormattedMessage {...messages.header} />
        </Title>
        <Navigation />
        <Hero
          img={jumbotron}
          title="The World's Leading Digital Manufacturing Platform"
          subtitle="Carbon is reinventing the way polymeric products are designed, engineered, manufactured and delivered. Carbon is transforming protective gear for football and beyond."
          buttonVisible
          buttontitle="Learn More"
        />
        <Hero
          img={jumbotron2}
          title="Accelerating Product Innovation"
          subtitle="Digital Light Synthesis™ (DLS™) enables products to be made directly from digital files, enhancing the way product development teams collaborate and iterate, resulting in faster design cycles and better product designs."
          buttonVisible={false}
        />
        <TextSection>
          <h1>Discover How Businesses Use Carbon</h1>
          <p>
            Carbon helps companies reinvent their products from design to
            production with a complete set of resources spanning software,
            hardware, and materials. Whether you’re a startup or an industry
            leader, Carbon gives you the resources you need to build the next
            generation of polymeric products at the scale you need.
          </p>
          <ImgContainer>
            <Img src={card} width="50%" />
            <Img src={card2} width="50%" />
          </ImgContainer>
          <ImgContainer>
            <Img src={card3} width="50%" />
            <Img src={card4} width="50%" />
          </ImgContainer>
          <ImgContainer>
            <Img src={card5} width="50%" />
            <Img src={card5} width="50%" />
          </ImgContainer>
        </TextSection>
        <TextSection>
          <h1>More than a machine</h1>
          <p>
            Carbon solutions are built to meet your product challenges at any
            scale. Carbon will support you every step of the way, as every
            solution is backed with world-class training, service, and support.
          </p>
        </TextSection>
        <Hero
          img={jumbotron3}
          title="Life @ Carbon"
          subtitle="Carbon is built on the premise that diversity — of perspectives and disciplines — accelerates innovation. We embody this as a business and as individuals. We strive to put our values to work daily through our interactions with each other and our customers."
          buttonVisible={false}
        />
        <TextSection>
          <h1>Ready To Get Started?</h1>
          <p>Contact Us To Use Carbon For Your Next Product</p>
          <Button href="/">Contact Us</Button>
        </TextSection>

        <BlogSection>
          <BlogColumn>
            <h1>We're Making Headlines</h1>
            <p> The latest news from Carbon.</p>
            <Img src={card2} width="50%" />
            <Button href="/">Learn More</Button>
          </BlogColumn>
          <BlogColumn>
            <h1>Meet The Carbon Team</h1>
            <p> Learn more about the team at Carbon.</p>
            <Img src={card2} width="50%" />
            <Button href="/">Learn More</Button>
          </BlogColumn>
          <BlogColumn>
            <h1>Resources</h1>
            <p> Review case studies and best practices for DLS™.</p>
            <Img src={card2} width="50%" />
            <Button href="/">Learn More</Button>
          </BlogColumn>
        </BlogSection>
      </PageContainer>
    );
  }
}

Carbon.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Carbon);
