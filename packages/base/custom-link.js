import { h, resolveComponent } from 'vue';
import { useRouter } from 'vue-router';

export const CustomLink = {
  name: 'custom-link',
  props: {
    link: Object,
    tag: String,
  },
  inheritAttrs: true,
  setup(props, { attrs, slots }) {
    const $router = useRouter();

    return () => {
      let element;

      // destructure the props in the render function so we use the current value
      // if their value has changed since we were created
      const { link = {} } = props;
      const {
        to,

        append,
        replace,
        activeClass,
        exactActiveClass,
      } = link;

      const data = { to };

      if (link.to && $router) {
        element = resolveComponent('router-link');

        // data.props = {
        //   to,
        //   tag: tag ?? props.tag,
        //   replace,
        //   append,
        //   activeClass,
        //   exactActiveClass,
        //   exact,
        // };

        // // we add the native click so it can bubble and be detected in a menu/drawer
        // if ($attrs.click) {
        //   data.nativeOn = { click: $attrs.click };
        // }
      } else if (link.href) {
        element = 'a';
        data.attrs.role = 'button';
      } else {
        element = props.tag ?? 'a';
        if (element !== 'button') {
          data.role = 'button';
        }
      }

      return h(element, data, [slots.default?.()]);
    };
  },
};
