<template>
  <div class="mcw-demo mcw-demo--container">
    <div>
      <p>
        <mcw-switch v-model="checked" label="Property"/>
      </p>
      <p>
        <mcw-switch disabled label="Disabled"/>
      </p>

      <mcw-caption>
        Property:
        <span class>{{ checked ? 'on' : 'off' }}</span>
      </mcw-caption>
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
