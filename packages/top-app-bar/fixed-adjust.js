import { h } from '@vue/composition-api';

export default {
  name: 'mcw-fixed-adjust',
  props: {
    tag: { type: String, default: 'main' },
    dense: Boolean,
    short: Boolean,
    prominent: Boolean,
  },

  setup(props, { listeners, slots }) {
    return () => {
      const base = 'mdc-top-app-bar';
      const suffix = '-fixed-adjust';

      return h(
        props.tag,
        {
          class: [
            {
              [base + '--short' + suffix]: props.short,
              [base + '--dense' + suffix]: props.dense && !props.prominent,
              [base + '--dense-prominent' + suffix]:
                props.dense && props.prominent,
              [base + '--prominent' + suffix]: !props.dense && props.prominent,
              [base + '-' + suffix]:
                !props.short && !props.dense && !props.prominent,
            },
          ],
        },
        slots.default?.(),
      );
    };
  },
};
