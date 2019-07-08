/**
 *
 * Asynchronously loads the component for IFrame
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
