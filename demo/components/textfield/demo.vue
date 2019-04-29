<template>
  <div class="mcw-demo mcw-demo--container">
    <mcw-layout-grid>
      <mcw-layout-cell span="6">
        <mcw-textfield
          :disabled="!enabled"
          v-model="textField"
          label="textfield"
          helptext="Help text 1x..."
        />
        <form>
          <mcw-textfield
            v-model="password"
            type="password"
            label="Password"
            minlength="8"
            maxlength="10"
            autocomplete
          >
            <div class="mcw-text-field-helper-line" slot="helpText">
              <p
                class="mcw-text-field-helper-text mcw-text-field-helper-text--persistent mcw-text-field-helper-text--validation-msg"
              >password must be 8 to 10 characters.</p>
            </div>
          </mcw-textfield>
        </form>

        <p></p>
        <mcw-textfield :disabled="!enabled" v-model="textField" label="outlined" outline>
          <div class="mcw-text-field-helper-line" slot="helpText">
            <p class="mcw-text-field-helper-text">Help text 2...</p>
          </div>
          <i
            slot="leadingIcon"
            class="material-icons"
            @click="ondelete"
            role="button"
            tabindex="0"
          >delete</i>
          <i slot="trailingIcon" class="material-icons">favorite</i>
        </mcw-textfield>
        <mcw-textfield :disabled="!enabled" v-model="textField" label="in a box">
          <i slot="leadingIcon" class="fa fa-font-awesome" role="button" tabindex="0"></i>
        </mcw-textfield>

        <mcw-textfield v-model="textField"></mcw-textfield>
      </mcw-layout-cell>
      <mcw-layout-cell span="6">
        <p>
          <mcw-textfield
            :disabled="!enabled"
            v-model="textField"
            multiline
            rows="15"
            label="multiline"
          />
        </p>
      </mcw-layout-cell>
      <mcw-layout-cell span="12">
        <p>
          <mcw-textfield :disabled="!enabled" v-model="textField" fullwidth label="full width"/>
        </p>
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

<style>
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
</style>
