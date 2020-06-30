import { computed, createElement } from '@vue/composition-api';

export const CustomLink = {
  name: 'custom-link',
  props: {
    tag: { type: String, default: 'a' },
    link: Object,
  },
  setup(props, { listeners, root: { $router }, slots }) {
    return () => {
      let element;

      const data = { on: listeners };

      if (props.link && $router) {
        // router-link case
        element = 'router-link';
        data.props = { tag: props.tag, ...props.link };
      } else {
        element = props.tag;
      }

      return createElement(element, data, [slots.default?.()]);
    };
  },
};

export const CustomLinkMixin = {
  props: {
    to: [String, Object],
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
  },
  computed: {
    link() {
      return (
        this.to && {
          to: this.to,
          exact: this.exact,
          append: this.append,
          replace: this.replace,
          activeClass: this.activeClass,
          exactActiveClass: this.exactActiveClass,
        }
      );
    },
  },
  components: {
    CustomLink,
  },
};

export function useCustomLink(props) {
  const link = computed(() => {
    return (
      props.to && {
        to: props.to,
        exact: props.exact,
        append: props.append,
        replace: props.replace,
        activeClass: props.activeClass,
        exactActiveClass: props.exactActiveClass,
      }
    );
  });

  return { link };
}

export const customLinkProps = {
  to: [String, Object],
  exact: Boolean,
  append: Boolean,
  replace: Boolean,
  activeClass: String,
  exactActiveClass: String,
};
