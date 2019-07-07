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
        <Hero />
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
