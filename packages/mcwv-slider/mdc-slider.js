import MDCSliderFoundation from '@material/slider/foundation';
import { DispatchFocusMixin, applyPassive } from '@mcwv/base';

export default {
  name: 'mdc-slider',
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
    displayMarkers: Boolean,
    disabled: Boolean,
    layoutOn: String,
    layoutOnSource: { type: Object, required: false },
  },
  data() {
    return {
      classes: {
        'mdc-slider': 1,
        'mdc-slider--discrete': !!this.step,
        'mdc-slider--display-markers': this.displayMarkers,
      },
      trackStyles: {},
      lastTrackMarkersStyles: {},
      thumbStyles: {},
      markerValue: '',
      numMarkers: 0,
    };
  },
  render(createElement) {
    const containerNodes = [
      createElement('div', {
        style: this.trackStyles,
        class: { 'mdc-slider__track': 1 },
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
        class: { 'mdc-slider__track-container': 1 },
      },
      containerNodes,
    );

    const thumbNodes = [
      createElement(
        'svg',
        { class: { 'mdc-slider__thumb': 1 }, attrs: { width: 21, height: 21 } },
        [
          createElement('circle', {
            attrs: { cx: 10.5, cy: 10.5, r: 7.875 },
          }),
        ],
      ),
      createElement('div', { class: { 'mdc-slider__focus-ring': 1 } }),
    ];

    if (this.isDiscrete) {
      thumbNodes.unshift(
        createElement('div', { class: { 'mdc-slider__pin': 1 } }, [
          createElement(
            'span',
            { class: { 'mdc-slider__pin-value-marker': 1 } },
            this.markerValue,
          ),
        ]),
      );
    }
    const thumbContainer = createElement(
      'div',
      {
        class: { 'mdc-slider__thumb-container': 1 },
        style: this.thumbStyles,
        ref: 'thumbContainer',
      },
      thumbNodes,
    );

    return createElement(
      'div',
      { class: this.classes, attrs: { tabindex: '0', role: 'slider' } },
      [trackContainer, thumbContainer],
    );
  },
  computed: {
    isDiscrete() {
      return !!this.step;
    },
    hasMarkers() {
      return !!this.step && this.displayMarkers && this.numMarkers;
    },
  },
  watch: {
    value() {
      if (this.foundation.getValue() !== Number(this.value)) {
        this.foundation.setValue(this.value);
      }
    },
    min() {
      this.foundation.setMin(Number(this.min));
    },
    max() {
      this.foundation.setMax(Number(this.max));
    },
    step() {
      this.foundation.setStep(Number(this.step));
    },
    disabled() {
      this.foundation.setDisabled(this.disabled);
    },
  },
  mounted() {
    this.foundation = new MDCSliderFoundation({
      hasClass: className => this.$el.classList.contains(className),
      addClass: className => {
        this.$set(this.classes, className, true);
      },
      removeClass: className => {
        this.$delete(this.classes, className, true);
      },
      getAttribute: name => this.$el.getAttribute(name),
      setAttribute: (name, value) => this.$el.setAttribute(name, value),
      removeAttribute: name => this.$el.removeAttribute(name),
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
      isRTL: () => false,
    });

    this.foundation.init();
    this.foundation.setDisabled(this.disabled);
    if (Number(this.min) <= this.foundation.getMax()) {
      this.foundation.setMin(Number(this.min));
      this.foundation.setMax(Number(this.max));
    } else {
      this.foundation.setMax(Number(this.max));
      this.foundation.setMin(Number(this.min));
    }
    this.foundation.setStep(Number(this.step));
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
};
