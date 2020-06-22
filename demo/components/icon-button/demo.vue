<template>
  <div class>
    <section class="mcw-demo">
      <div class="mcw-demo mcw-demo--container">
        <mcw-icon-button href="#">
          menu
        </mcw-icon-button>

        <mcw-icon-button v-model="isOn" :disabled="disabled">
          <mcw-icon-toggle is-on>
            favorite
          </mcw-icon-toggle>
          <mcw-icon-toggle>
            favorite_border
          </mcw-icon-toggle>
        </mcw-icon-button>

        <mcw-icon-button v-model="isOn" :disabled="disabled">
          <i
            class="material-icons mdc-icon-button__icon mdc-icon-button__icon--on"
            >link_off</i
          >
          <i class="material-icons mdc-icon-button__icon">link</i>
        </mcw-icon-button>
      </div>
      <div class="button-style-select">
        <mcw-checkbox v-model="disabled" label="disabled" />
      </div>
      <mcw-caption>
        isOn:
        <span class>{{ isOn }}</span>
      </mcw-caption>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return { isOn: false, disabled: false };
  },
};
</script>
