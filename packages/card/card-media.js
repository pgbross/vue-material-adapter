import { h } from 'vue';

export default {
  name: 'mcw-card-media',
  props: {
    src: String,
    square: {
      type: Boolean,
      default() {
        return false;
      },
    },
    wide: {
      type: Boolean,
      default() {
        return false;
      },
    },
    contentClass: String,
  },

  setup(props, { slots }) {
    return () => {
      const nodes = [];

      const content = slots.default?.();
      if (content) {
        nodes.push(
          h(
            'div',
            { class: ['mdc-card__media-content', props.contentClass] },
            content,
          ),
        );
      }

      return h(
        'section',
        {
          class: {
            'mdc-card__media': 1,
            'mdc-card__media--square': props.square,
            'mdc-card__media--16-9': props.wide && !props.square,
          },
          style: {
            backgroundImage: `url(${props.src})`,
          },
        },
        nodes,
      );
    };
  },
};
