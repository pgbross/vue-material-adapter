/* eslint-disable quote-props */
import MDCGridListFoundation from '@material/grid-list/foundation';

export default {
  name: 'mcw-grid-list',
  props: {
    width: [String, Number],
    ratio: String,
    'narrow-gutter': Boolean,
    'header-caption': Boolean,
    'icon-align-start': Boolean,
    'icon-align-end': Boolean,
    'with-support-text': Boolean,
    interactive: Boolean,
  },
  provide() {
    return { mcwGrid: this };
  },

  computed: {
    classes() {
      const classes = { 'mdc-grid-list__tiles': 1 };

      classes['mdc-grid-list--tile-gutter-1'] = this.narrowGutter;
      classes['mdc-grid-list--header-caption'] = this.headerCaption;
      classes[`mdc-grid-list--tile-aspect-${this.ratio}`] = this.ratio;
      classes['mdc-grid-list--with-icon-align-start'] = this.iconAlignStart;
      classes['mdc-grid-list--with-icon-align-end'] = this.iconAlignEnd;
      classes['mdc-grid-list--twoline-caption'] = this.withSupportText;
      classes['mdc-grid-list--non-interactive'] = !this.interactive;

      return classes;
    },
    styles() {
      const defaultWidth = 200;
      return {
        '--mdc-grid-list-tile-width': `${this.width || defaultWidth}px`,
      };
    },
  },
  mounted() {
    this.foundation = new MDCGridListFoundation({
      getOffsetWidth: () => {
        return this.$el.offsetWidth;
      },
      getNumberOfTiles: () => {
        return this.$el.querySelectorAll(
          MDCGridListFoundation.strings.TILE_SELECTOR,
        ).length;
      },
      getOffsetWidthForTileAtIndex: index => {
        return this.$el.querySelectorAll(
          MDCGridListFoundation.strings.TILE_SELECTOR,
        )[index].offsetWidth;
      },
      setStyleForTilesElement: (property, value) => {
        this.$el.querySelector(
          MDCGridListFoundation.strings.TILES_SELECTOR,
        ).style[property] = value;
      },
      registerResizeHandler: handler => {
        window.addEventListener('resize', handler);
      },
      deregisterResizeHandler: handler => {
        window.removeEventListener('resize', handler);
      },
    });
    this.foundation.init();
  },
  beforeDestroy() {
    this.foundation.destroy();
  },
  render(createElement) {
    const { $scopedSlots: scopedSlots } = this;
    return createElement('div', { class: { 'mdc-grid-list': 1 } }, [
      createElement(
        'ul',
        { class: this.classes, style: this.styles },
        scopedSlots.default && scopedSlots.default(),
      ),
    ]);
  },
};
