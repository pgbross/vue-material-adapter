import { BasePlugin } from '@mcwv/base';
import mdcRipple from './mdc-ripple.js';

export { RippleBase, RippleMixin } from './mdc-ripple-base.js';
export { mdcRipple };

export default BasePlugin({
  mdcRipple,
});
