export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/about_qoOL-wfw.mjs').then(n => n.b);

export { page };
