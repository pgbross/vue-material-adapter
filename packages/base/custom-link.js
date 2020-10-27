import { h, resolveComponent } from 'vue';

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
      const { to, href } = props;

      const routerLink = resolveComponent('router-link');
      if (to && routerLink) {
        const rtag = props.tag ?? 'a';

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
                  onClick: evt => {
                    evt.__itemId = attrs.itemId;
                    props.navigate(evt);
                  },
                },
                slots.default?.(),
              ),
          },
        );
      }

      const element = href ? 'a' : props.tag ?? 'a';
      const role = href ? 'button' : element !== 'button' ? 'button' : null;

      const children = slots.default?.();
      return h(element, { ...attrs, role }, { default: () => children });
    };
  },
};
