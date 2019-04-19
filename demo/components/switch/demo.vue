<template>
  <div class="mdc-demo mdc-demo--container">
    <div>
      <p>
        <mdc-switch v-model="checked" label="Property"/>
      </p>
      <p>
        <mdc-switch disabled label="Disabled"/>
      </p>

      <mdc-caption>
        Property:
        <span class>{{ checked ? 'on' : 'off' }}</span>
      </mdc-caption>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
    };
  },
};
</script>
