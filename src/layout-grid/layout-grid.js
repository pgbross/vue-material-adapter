import { computed, h } from 'vue';

export default {
  name: 'mcw-layout-grid',
  props: {
    fixedColumWidth: Boolean,
    alignLeft: Boolean,
    alignRight: Boolean,
  },
  setup(props, { slots }) {
    const classes = computed(() => {
      return {
        'mdc-layout-grid': true,
        'mdc-layout-grid--fixed-column-width': props.fixedColumnWidth,
        'mdc-layout-grid--align-left': props.alignLeft,
        'mdc-layout-grid--align-right': props.alignRight,
      };
    });

    return () => {
      return h(
        'div',
        {
          class: classes.value,
        },
        [h('div', { class: 'mdc-layout-grid__inner' }, [slots.default?.()])],
      );
    };
  },
};
