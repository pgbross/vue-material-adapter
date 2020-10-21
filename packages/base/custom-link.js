import { h, resolveComponent } from 'vue';
import { useRouter } from 'vue-router';

export const CustomLink = {
  name: 'custom-link',
  props: {
    link: Object,
    tag: String,
  },
  inheritAttrs: true,
  setup(props, { slots }) {
    const $router = useRouter();

    return () => {
      let element;

      // destructure the props in the render function so we use the current value
      // if their value has changed since we were created
      const { link = {} } = props;
      const {
        to,
        tag,
        onClick,
        replace,
        activeClass,
        exactActiveClass,
        itemId,
        tabindex,
        ...rest
      } = link;

      const data = { to, ...rest };

      if (link.to && $router) {
        element = resolveComponent('router-link');

        const rtag = tag ?? props.tag;

        return h(
          resolveComponent('router-link'),
          {
            custom: true,
            ...rest,
            to,
            tabindex,
            activeClass,
            exactActiveClass,
            replace,
          },
          {
            default: props =>
              h(
                rtag,
                {
                  onClick: evt => {
                    evt.__itemId = itemId;
                    props.navigate(evt);
                  },
                },
                slots.default?.(),
              ),
          },
        );
      } else if (link.href) {
        element = 'a';
        data.role = 'button';
        data.onClick = onClick;
      } else {
        element = props.tag ?? 'a';
        data.onClick = onClick;
        if (element !== 'button') {
          data.role = 'button';
        }
      }

      const children = slots.default?.();
      return h(element, data, { default: () => children });
    };
  },
};
