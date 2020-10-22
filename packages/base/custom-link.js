import { h, resolveComponent } from 'vue';
import { useRouter } from 'vue-router';

export const CustomLink = {
  name: 'custom-link',
  props: {
    tag: String,
    to: [String, Object],
  },
  setup(props, { slots, attrs }) {
    const $router = useRouter();

    return () => {
      let element;
      let role;

      // destructure the props in the render function so we use the current value
      // if their value has changed since we were created
      const { to, href } = props;

      if (to && $router) {
        element = resolveComponent('router-link');

        const rtag = props.tag;

        return h(
          resolveComponent('router-link'),
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
      } else if (href) {
        element = 'a';
        role = 'button';
      } else {
        element = props.tag ?? 'a';
        if (element !== 'button') {
          role = 'button';
        }
      }

      const children = slots.default?.();
      return h(element, { ...attrs, role }, { default: () => children });
    };
  },
};
