/**
 *
 * StyleGuide
 * mouse cursor working links
 * https://codesandbox.io/s/j2x2ronqn9
 * https://codesandbox.io/s/mm05o04kl9
 * https://codepen.io/karlovidek/pen/yvxZjO
 * https://greensock.com/forums/topic/19789-follow-by-mouse/
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import styled from 'styled-components';

import Iframe from 'react-iframe';
import messages from './messages';

import Navigation from '../../components/Navigation';
import PageContainer from '../../components/PageContainer/PageContainer';

const Title = styled.h1`
  font-family: 'IBM Plex Sans';
  font-weight: 300;
  color: ${props => props.theme.colors.secondary};
`;

export class StyleGuide extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <PageContainer>
          <Title>
            <FormattedMessage {...messages.header} />
          </Title>
          <Navigation />
        </PageContainer>
        <Iframe
          url="https://www.carbondesignsystem.com/"
          width="100%"
          height="800px"
          className="website"
          display="initial"
          position="relative"
        />
      </React.Fragment>
    );
  }
}

StyleGuide.propTypes = {
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
)(StyleGuide);
