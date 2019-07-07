/**
 *
 * StyleGuide
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import ReactCursorPosition, { INTERACTIONS } from 'react-cursor-position';
import styled from 'styled-components';
import PositionLabel from './PositionLabel';
import InstructionsLabel from './InstructionsLabel';

import messages from './messages';

import Navigation from '../../components/Navigation';
import PageContainer from '../../components/PageContainer/PageContainer';

const Title = styled.h1`
  font-family: 'IBM Plex Sans';
  font-weight: 300;
  color: ${props => props.theme.colors.secondary};
`;

const CursorArea = styled.div`
  height: 50vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;

  a {
    color: white;
    transition: ease 200ms;
  }
  a:hover {
    color: red;
    transition: ease 200ms;
  }
`;

export class StyleGuide extends React.PureComponent {
  render() {
    return (
      <PageContainer>
        <Title>
          <FormattedMessage {...messages.header} />
        </Title>
        <Navigation />
        <CursorArea>
          <h1>Text Test</h1>
          <a href="#" className="link" data-hover>
            TEST LINK HOVER HERE
          </a>
          <ReactCursorPosition
            className="example__target"
            activationInteractionMouse={INTERACTIONS.HOVER} // default
            hoverDelayInMs={250} // default 0
            hoverOffDelayInMs={150} // default 0
          >
            <PositionLabel />
            <div className="example__instructions">
              <InstructionsLabel />
            </div>
          </ReactCursorPosition>
        </CursorArea>
      </PageContainer>
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
