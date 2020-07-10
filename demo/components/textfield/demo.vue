<template>
  <div class="mcw-demo mcw-demo--container">
    <mcw-layout-grid>
      <mcw-layout-cell span="4">
        <h3 class="mdc-typography--subtitle1">Filled with character counter</h3>
        <mcw-textfield
          v-model="textField"
          :disabled="!enabled"
          label="textfield"
          helptext="Help text 1x..."
          helptext-persistent
          required
          character-counter
          maxlength="7"
        />
        <h3 class="mdc-typography--subtitle1">Password</h3>
        <form>
          <mcw-textfield
            v-model="password"
            type="password"
            label="Enter a password"
            minlength="8"
            maxlength="10"
            autocomplete
            helptext="password must be 8 to 10 characters."
          >
          </mcw-textfield>
        </form>

        <h3 class="mdc-typography--subtitle1">Shaped Outlined</h3>
        <mcw-textfield
          v-model="textField"
          :disabled="!enabled"
          label="Standard"
          outline
          helptext="Some other help here"
          class="demo-text-field-outlined-shaped"
        >
          <template #leading>
            <mcw-textfield-icon @click="ondelete"
              >delete</mcw-textfield-icon
            ></template
          >
          <template #trailing>
            <mcw-textfield-icon trailing-icon disabled
              >favorite</mcw-textfield-icon
            ></template
          >
        </mcw-textfield>
        <h3 class="mdc-typography--subtitle1">Fontawesome icon</h3>
        <mcw-textfield v-model="textField" :disabled="!enabled" label="Custom">
          <template #leading>
            <mcw-textfield-icon
              class="fa fa-font-awesome"
              @click="ondelete"
            ></mcw-textfield-icon
          ></template>
        </mcw-textfield>
      </mcw-layout-cell>

      <mcw-layout-cell span="2"> </mcw-layout-cell>
      <mcw-layout-cell span="6">
        <h3 class="mdc-typography--subtitle1">Text area with counter</h3>
        <mcw-textfield
          v-model="textField"
          :disabled="!enabled"
          multiline
          outline
          :resizer="true"
          rows="15"
          maxlength="200"
          label="multiline"
          helptext="Textarea help"
          character-counter
          character-counter-internal
        />
      </mcw-layout-cell>
    </mcw-layout-grid>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textField: '',
      enabled: true,
      password: '',
    };
  },

  methods: {
    ondelete() {
      console.log('ondelete');
    },
  },
};
</script>

<style lang="scss">
@use '@material/textfield/mixins' as textfield;
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
.demo-text-field-outlined-shaped label {
  @include textfield.outline-shape-radius(50%);
}
.textfield-container .mdc-text-field {
  width: 100%;
}
</style>
