<template>
  <div ref="outlined" :class="outlinedClasses">
    <div class="mdc-notched-outline__leading"></div>
    <div ref="notchEl" class="mdc-notched-outline__notch">
      <mdc-floating-label v-if="$slots.default" ref="labelEl">
        <slot/>
      </mdc-floating-label>
    </div>
    <div class="mdc-notched-outline__trailing"></div>
  </div>
</template>

<script>
import MDCnotchedOutlineFoundation from '@material/notched-outline/foundation';

export default {
  name: 'mdc-notched-outline',
  data() {
    return {
      outlinedClasses: { 'mdc-notched-outline': true },
    };
  },
  mounted() {
    this.foundation = new MDCnotchedOutlineFoundation({
      addClass: className => {
        this.$set(this.outlinedClasses, className, true);
      },
      removeClass: className => {
        this.$delete(this.outlinedClasses, className);
      },

      setNotchWidthProperty: width =>
        this.$refs.notchEl.style.setProperty('width', width + 'px'),
      removeNotchWidthProperty: () =>
        this.$refs.notchEl.style.removeProperty('width'),
    });
    this.foundation.init();

    if (this.$slots.default) {
      // this.$refs.labelEl.style.transitionDuration = '0s'

      this.$set(
        this.outlinedClasses,
        MDCnotchedOutlineFoundation.cssClasses.OUTLINE_UPGRADED,
        true,
      );
      // requestAnimationFrame(() => {
      //   this.$refs.labelEl.style.transitionDuration = ''
      // })
    } else {
      this.$set(
        this.outlinedClasses,
        MDCnotchedOutlineFoundation.cssClasses.NO_LABEL,
        true,
      );
    }
  },
  beforeDestroy() {
    let foundation = this.foundation;
    this.foundation = null;
    foundation.destroy();
  },

  methods: {
    notch(notchWidth) {
      this.foundation.notch(notchWidth);
    },

    closeNotch() {
      this.foundation.closeNotch();
    },
    float(shouldFloat) {
      this.$refs.labelEl && this.$refs.labelEl.float(shouldFloat);
    },

    shake(shouldShake) {
      this.$refs.labelEl && this.$refs.labelEl.shake(shouldShake);
    },

    getWidth() {
      return this.$refs.labelEl.getWidth();
    },
  },
};
</script>
