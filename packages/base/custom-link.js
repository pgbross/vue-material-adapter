import { h, resolveComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

export const CustomLink = {
  name: 'custom-link',
  props: {
    link: Object,
    tag: String,
  },
  inheritAttrs: true,
  setup(props, { emit, slots }) {
    const $router = useRouter();
    const elementRef = ref();

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
      } = link;

      const data = { to };

      if (link.to && $router) {
        element = resolveComponent('router-link');

        // // we add the native click so it can bubble and be detected in a menu/drawer
        // if ($attrs.click) {
        //   data.nativeOn = { click: $attrs.click };
        // }

        const rtag = tag ?? props.tag;

        return h(
          resolveComponent('router-link'),
          {
            custom: true,
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
                  ref: elementRef,
                  onClick: evt => {
                    // console.log('emit linkclick');
                    evt.__itemId = itemId;
                    // emitCustomEvent(elementRef.value, 'linkclick', evt, true);
                    // emit('linkClick', evt);
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
