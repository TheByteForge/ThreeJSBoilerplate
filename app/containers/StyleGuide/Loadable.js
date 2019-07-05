/**
 *
 * Asynchronously loads the component for StyleGuide
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
