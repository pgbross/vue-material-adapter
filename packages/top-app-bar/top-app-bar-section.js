import { h } from '@vue/composition-api';

export default {
  name: 'mcw-top-app-bar-section',
  props: {
    align: {
      type: String,
      default() {
        return 'start';
      },
    },
    tag: {
      type: String,
      default() {
        return 'div';
      },
    },
  },
  setup(props, { slots }) {
    const classes = ['mdc-top-app-bar__section'];

    props.align == 'start' &&
      classes.push('mdc-top-app-bar__section--align-start');
    props.align == 'end' && classes.push('mdc-top-app-bar__section--align-end');

    return () => {
      return h(props.tag, { class: classes }, slots.default?.());
    };
  },
};
