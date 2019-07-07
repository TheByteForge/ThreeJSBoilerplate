/*
 * Navigation Messages
 *
 * This contains all the text for the Navigation component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Navigation';

export default defineMessages({
  home: {
    id: `${scope}.navigation`,
    defaultMessage: 'Home',
  },
  about: {
    id: `${scope}.navigation`,
    defaultMessage: 'About',
  },
  carbon: {
    id: `${scope}.navigation`,
    defaultMessage: 'Carbon',
  },
  styleguide: {
    id: `${scope}.navigation`,
    defaultMessage: 'StyleGuide',
  },
});
