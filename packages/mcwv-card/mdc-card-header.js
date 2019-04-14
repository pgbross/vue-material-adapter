/* eslint-disable quote-props */
export default {
  name: 'mdc-card-header',
  functional: true,
  props: {
    title: String,
    subtitle: String,
    largeTtle: { type: Boolean, default: true },
  },
  render(
    createElement,
    {
      props: { title, subtitle, largeTitle },
      slots,
    },
  ) {
    const nodes = [];
    if (slots().default) {
      nodes.push(slots().default);
    } else {
      if (title) {
        nodes.push(
          createElement(
            'h1',
            {
              class: {
                'mdc-card__title': 1,
                'mdc-card__title--large': largeTitle,
              },
            },
            title,
          ),
        );
      }
      if (subtitle) {
        nodes.push(
          createElement(
            'h2',
            {
              class: {
                'mdc-card__subtitle': 1,
              },
            },
            subtitle,
          ),
        );
      }
    }
    return createElement(
      'section',
      {
        class: {
          'mdc-card-header': 1,
          'mdc-card__primary': 1,
        },
      },
      nodes,
    );
  },
};
