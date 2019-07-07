/*
 * Hero Messages
 *
 * This contains all the text for the Hero component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Hero';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Hero component!',
  },
});
