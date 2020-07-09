import { h } from '@vue/composition-api';

export const CustomButton = {
  name: 'custom-button',
  props: { link: Object },
  setup(props, { root: { $options, $router }, listeners, slots }) {
    return () => {
      let element;

      // destructure the props in the render function so we use the current value
      // if their value has changed since we were created
      const { link = {} } = props;
      const {
        tag,
        to,
        exact,
        append,
        replace,
        activeClass,
        exactActiveClass,
        ...rest
      } = link;

      const data = { attrs: rest, on: listeners };

      if (link.to && $router) {
        element = $options.components['RouterLink'];

        data.props = {
          to,
          tag,
          replace,
          append,
          activeClass,
          exactActiveClass,
          exact,
        };
        data.attrs.role = 'button';
        if (listeners.click) {
          data.nativeOn = { click: listeners.click };
        }
      } else if (link.href) {
        element = 'a';
        data.attrs.role = 'button';
      } else {
        element = tag ?? 'button';
      }

      return h(element, data, slots.default?.());
    };
  },
};
