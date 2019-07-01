/* eslint-disable quote-props */
import MDCSliderFoundation from '@material/slider/foundation';
import { DispatchFocusMixin } from '@mcwv/base';
import { applyPassive } from '@material/dom/events';

export default {
  name: 'mcw-slider',
  mixins: [DispatchFocusMixin],
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    value: [Number, String],
    min: { type: [Number, String], default: 0 },
    max: { type: [Number, String], default: 100 },
    step: { type: [Number, String], default: 0 },
    discrete: Boolean,
    displayMarkers: Boolean,
    disabled: Boolean,
    layoutOn: String,
    layoutOnSource: { type: Object, required: false },
  },
  data() {
    let stepSize = this.step;
    if (this.discrete && !stepSize) {
      stepSize = 1;
    }
    return {
      classes: {
        'mdc-slider': 1,
        'mdc-slider--discrete': this.discrete,
        'mdc-slider--display-markers': this.discrete && this.displayMarkers,
      },
      sliderAttrs: {},
      trackStyles: {},
      lastTrackMarkersStyles: {},
      thumbStyles: {},
      markerValue: '',
      numMarkers: 0,
      stepSize,
    };
  },

  computed: {
    hasMarkers() {
      return this.discrete && this.displayMarkers && this.numMarkers;
    },
  },
  watch: {
    value(nv) {
      if (this.foundation.getValue() !== Number(nv)) {
        this.foundation.setValue(nv);
      }
    },
    min(nv) {
      this.foundation.setMin(Number(nv));
    },
    max(nv) {
      this.foundation.setMax(Number(nv));
    },
    step(nv) {
      this.foundation.setStep(Number(nv));
    },
    disabled(nv) {
      this.foundation.setDisabled(nv);
    },
  },
  mounted() {
    const adapter = {
      hasClass: className => this.$el.classList.contains(className),
      addClass: className => {
        this.$set(this.classes, className, true);
      },
      removeClass: className => {
        this.$delete(this.classes, className, true);
      },
      getAttribute: name => this.$el.getAttribute(name),
      setAttribute: (name, value) => this.$set(this.sliderAttrs, name, value),
      removeAttribute: name => this.$delete(this.sliderAttrs, name),

      computeBoundingRect: () => this.$el.getBoundingClientRect(),
      getTabIndex: () => this.$el.tabIndex,
      registerInteractionHandler: (type, handler) => {
        this.$el.addEventListener(type, handler, applyPassive());
      },
      deregisterInteractionHandler: (type, handler) => {
        this.$el.removeEventListener(type, handler, applyPassive());
      },
      registerThumbContainerInteractionHandler: (type, handler) => {
        this.$refs.thumbContainer.addEventListener(
          type,
          handler,
          applyPassive(),
        );
      },
      deregisterThumbContainerInteractionHandler: (type, handler) => {
        this.$refs.thumbContainer.removeEventListener(
          type,
          handler,
          applyPassive(),
        );
      },
      registerBodyInteractionHandler: (type, handler) => {
        document.body.addEventListener(type, handler);
      },
      deregisterBodyInteractionHandler: (type, handler) => {
        document.body.removeEventListener(type, handler);
      },
      registerResizeHandler: handler => {
        window.addEventListener('resize', handler);
      },
      deregisterResizeHandler: handler => {
        window.removeEventListener('resize', handler);
      },
      notifyInput: () => {
        this.$emit('input', this.foundation.getValue());
      },
      notifyChange: () => {
        this.$emit('change', this.foundation.getValue());
      },
      setThumbContainerStyleProperty: (propertyName, value) => {
        this.$set(this.thumbStyles, propertyName, value);
      },
      setTrackStyleProperty: (propertyName, value) => {
        this.$set(this.trackStyles, propertyName, value);
      },
      setMarkerValue: value => {
        this.markerValue = value;
      },
      appendTrackMarkers: numMarkers => {
        this.numMarkers = numMarkers;
      },
      removeTrackMarkers: () => {
        this.numMarkers = 0;
      },
      setLastTrackMarkersStyleProperty: (propertyName, value) => {
        this.$set(this.lastTrackMarkersStyles, propertyName, value);
      },
      isRTL: () => getComputedStyle(this.$el).direction === 'rtl',
    };

    this.foundation = new MDCSliderFoundation(adapter);
    this.foundation.init();

    this.foundation.setDisabled(this.disabled);

    if (Number(this.min) <= this.foundation.getMax()) {
      this.foundation.setMin(Number(this.min));
      this.foundation.setMax(Number(this.max));
    } else {
      this.foundation.setMax(Number(this.max));
      this.foundation.setMin(Number(this.min));
    }
    this.foundation.setStep(Number(this.stepSize));
    this.foundation.setValue(Number(this.value));

    if (this.hasMarkers) {
      this.foundation.setupTrackMarker();
    }

    this.$root.$on('vma:layout', this.layout);

    if (this.layoutOn) {
      this.layoutOnEventSource = this.layoutOnSource || this.$root;
      this.layoutOnEventSource.$on(this.layoutOn, this.layout);
    }
  },
  beforeDestroy() {
    this.$root.$off('vma:layout', this.layout);
    if (this.layoutOnEventSource) {
      this.layoutOnEventSource.$off(this.layoutOn, this.layout);
    }
    this.foundation.destroy();
  },
  methods: {
    layout() {
      this.$nextTick(() => {
        this.foundation && this.foundation.layout();
      });
    },
  },
  render(createElement) {
    const containerNodes = [
      createElement('div', {
        style: this.trackStyles,
        class: 'mdc-slider__track',
      }),
    ];
    if (this.hasMarkers) {
      const markers = [];
      for (let markerNum = 0; markerNum < this.numMarkers; markerNum++) {
        markers.push(
          createElement('div', {
            class: { 'mdc-slider__track-marker': 1 },
            style:
              markerNum == this.numMarkers - 1
                ? this.lastTrackMarkersStyles
                : {},
            attrs: { key: markerNum },
          }),
        );
      }
      containerNodes.push(
        createElement(
          'div',
          {
            class: { 'mdc-slider__track-marker-container': 1 },
          },
          markers,
        ),
      );
    }

    const trackContainer = createElement(
      'div',
      {
        class: 'mdc-slider__track-container',
      },
      containerNodes,
    );

    const thumbContainer = createElement(
      'div',
      {
        class: 'mdc-slider__thumb-container',
        style: this.thumbStyles,
        ref: 'thumbContainer',
      },
      [
        this.discrete &&
          createElement('div', { class: 'mdc-slider__pin' }, [
            createElement(
              'span',
              { class: 'mdc-slider__pin-value-marker' },
              this.markerValue,
            ),
          ]),
        createElement(
          'svg',
          { class: 'mdc-slider__thumb', attrs: { width: 21, height: 21 } },
          [
            createElement('circle', {
              attrs: { cx: 10.5, cy: 10.5, r: 7.875 },
            }),
          ],
        ),
        createElement('div', { class: 'mdc-slider__focus-ring' }),
      ],
    );

    return createElement(
      'div',
      {
        class: this.classes,
        attrs: {
          tabindex: '0',
          role: 'slider',
          'aria-label': 'Select value',
          ...this.sliderAttrs,
        },
      },
      [trackContainer, thumbContainer],
    );
  },
};
