/*
 * Hero Messages
 *
 * This contains all the text for the Hero component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Hero';

export default defineMessages({
  title: {
    id: `${scope}.hero`,
    defaultMessage: "The World's Leading Digital Manufacturing Platform",
  },
  subtitle: {
    id: `${scope}.hero`,
    defaultMessage:
      'Carbon is reinventing the way polymeric products are designed, engineered, manufactured and delivered. Carbon is transforming protective gear for football and beyond.',
  },
  cta_button: {
    id: `${scope}.hero`,
    defaultMessage: 'Learn More',
  },
});
