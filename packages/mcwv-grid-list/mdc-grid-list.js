/* eslint-disable quote-props */
import MDCGridListFoundation from '@material/grid-list/foundation';
const template = `  <div class="mdc-grid-list">
    <ul :class="classes" :style="styles" class="mdc-grid-list__tiles">
      <slot/>
    </ul>
  </div>`;

export default {
  name: 'mdc-grid-list',
  template,
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
    return { mdcGrid: this };
  },
  computed: {
    classes() {
      const classes = {};

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
};
