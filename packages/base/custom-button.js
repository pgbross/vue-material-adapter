export const CustomButton = {
  name: 'custom-button',
  functional: true,
  props: {
    link: Object,
  },
  render(
    createElement,
    {
      children,
      data,
      props: { link, tag },
      parent: { $router, $root },
    },
  ) {
    let element;

    if (link && $router) {
      // router-link case
      element = $root.$options.components['RouterLink'];
      data.props = { tag, ...link };
      data.attrs.role = 'button';
      if (data.on.click) {
        data.nativeOn = { click: data.on.click };
      }
    } else if (data.attrs && data.attrs.href) {
      // href case
      element = 'a';
      data.attrs.role = 'button';
    } else {
      // button fallback
      element = 'button';
    }

    return createElement(element, data, children);
  },
};

export const CustomButtonMixin = {
  props: {
    href: String,
    disabled: Boolean,
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
    CustomButton,
  },
};
