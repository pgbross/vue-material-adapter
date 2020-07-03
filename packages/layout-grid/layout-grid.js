import { computed } from '@vue/composition-api';

export default {
  name: 'mcw-layout-grid',
  props: {
    fixedColumWidth: Boolean,
    alignLeft: Boolean,
    alignRight: Boolean,
  },
  setup(props) {
    const classes = computed(() => {
      return {
        'mdc-layout-grid': true,
        'mdc-layout-grid--fixed-column-width': props.fixedColumnWidth,
        'mdc-layout-grid--align-left': props.alignLeft,
        'mdc-layout-grid--align-right': props.alignRight,
      };
    });

    return { classes };
  },
};
