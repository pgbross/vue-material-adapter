<template>
  <div class>
    <section class="mcw-demo">
      <div class="mcw-demo mcw-demo--container">
        <mcw-icon-button href="#">
          <mcw-material-icon icon="menu"/>
        </mcw-icon-button>

        <mcw-icon-button v-model="isOn" :disabled="disabled">
          <mcw-icon-toggle isOn>
            <mcw-material-icon icon="favorite"/>
          </mcw-icon-toggle>
          <mcw-icon-toggle>
            <mcw-material-icon icon="favorite_border"/>
          </mcw-icon-toggle>
        </mcw-icon-button>
      </div>
      <div class="button-style-select">
        <mcw-checkbox v-model="disabled" label="disabled"/>
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
