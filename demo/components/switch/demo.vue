<template>
  <div class="mcw-demo mcw-demo--container">
    <div>
      <p>
        <mcw-switch id="property-switch" v-model="checked" label="Property" />
      </p>
      <p>
        <mcw-switch disabled label="Disabled" />
      </p>

      <div class="mdc-typography--caption">
        Property:
        <span class>{{ checked ? 'on' : 'off' }}</span>
      </div>
    </div>
  </div>
</template>

<script src="./switch.js"></script>
