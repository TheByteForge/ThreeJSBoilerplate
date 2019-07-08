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

import jumbotron from '../../images/carbon/jumbotron.png';
import jumbotron2 from '../../images/carbon/jumbotron-lab.jpg';
import jumbotron3 from '../../images/carbon/jumbotron-work.jpg';

const Title = styled.h1`
  font-family: 'IBM Plex Sans';
  font-weight: 300;
  color: ${props => props.theme.colors.secondary};
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
        <Hero
          img={jumbotron3}
          title="Life @ Carbon"
          subtitle="Carbon is built on the premise that diversity — of perspectives and disciplines — accelerates innovation. We embody this as a business and as individuals. We strive to put our values to work daily through our interactions with each other and our customers."
          buttonVisible={false}
        />
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
