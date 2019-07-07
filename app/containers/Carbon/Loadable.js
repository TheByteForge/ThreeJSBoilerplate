/**
 *
 * Asynchronously loads the component for Carbon
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
