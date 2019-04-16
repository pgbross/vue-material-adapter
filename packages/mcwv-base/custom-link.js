export const CustomLink = {
  name: 'custom-link',
  functional: true,
  props: {
    tag: { type: String, default: 'a' },
    link: Object,
  },
  render(
    createElement,
    {
      data,
      children,
      props: { link, tag },
      parent: { $router, $root },
    },
  ) {
    let element;

    if (link && $router) {
      // router-link case
      element = $root.$options.components['RouterLink'];
      data.props = { tag, ...link };
      if (data.on.click) {
        data.nativeOn = { click: data.on.click };
      }
    } else {
      // element fallback
      element = tag;
    }

    return createElement(element, data, children);
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
