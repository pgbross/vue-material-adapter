import { h, resolveDynamicComponent } from 'vue';

export const CustomLink = {
  name: 'custom-link',
  props: {
    tag: String,
    to: [String, Object],
  },
  setup(props, { slots, attrs }) {
    return () => {
      // destructure the props in the render function so we use the current value
      // if their value has changed since we were created
      const { to, href, tag } = props;

      const routerLink = resolveDynamicComponent('router-link');
      if (to && routerLink) {
        const rtag = tag ?? 'a';

        return h(
          routerLink,
          {
            custom: true,
            ...attrs,
            to,
          },
          {
            default: props =>
              h(
                rtag,
                {
                  ...attrs,
                  onClick: event_ => {
                    event_.__itemId = attrs.itemId;
                    props.navigate(event_);
                  },
                },
                slots.default?.(),
              ),
          },
        );
      }

      const element = href ? 'a' : tag ?? 'a';
      const role = href
        ? 'button'
        : element !== 'button'
        ? 'button'
        : undefined;

      const children = slots.default?.();
      return h(element, { ...attrs, role }, { default: () => children });
    };
  },
};
