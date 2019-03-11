<template>
  <div :class="lineClasses" :style="lineStyles" class="mdc-line-ripple" />
</template>

<script>
import MDCLineRippleFoundation from '@material/line-ripple/foundation';

export default {
  name: 'mdc-line-ripple',

  props: {
    rippleCenter: { type: [Number, String], default: 0 },
    active: Boolean,
  },
  data() {
    return {
      lineClasses: {},
      lineStyles: {},
    };
  },
  mounted() {
    this.foundation = new MDCLineRippleFoundation(
      Object.assign({
        addClass: className => {
          this.$set(this.lineClasses, className, true);
        },
        removeClass: className => {
          this.$delete(this.lineClasses, className);
        },
        hasClass: className => {
          return Boolean(this.lineClasses[className]);
        },
        setStyle: (name, value) => {
          this.$set(this.lineStyles, name, value);
        },
        registerEventHandler: (evtType, handler) => {
          this.$el.addEventListener(evtType, handler);
        },
        deregisterEventHandler: (evtType, handler) => {
          this.$el.removeEventListener(evtType, handler);
        },
      }),
    );
    this.foundation.init();
  },
  beforeDestroy() {
    let foundation = this.foundation;
    this.foundation = null;
    foundation.destroy();
  },

  methods: {
    setRippleCenter(xCoordinate) {
      this.foundation.setRippleCenter(xCoordinate);
    },
    activate() {
      this.foundation.activate();
    },

    deactivate() {
      this.foundation.deactivate();
    },
  },
};
</script>
