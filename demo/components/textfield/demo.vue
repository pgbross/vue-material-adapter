<template>
  <div class="mcw-demo mcw-demo--container">
    <mcw-layout-grid>
      <mcw-layout-cell span="6">
        <mcw-textfield
          v-model="textField"
          :disabled="!enabled"
          label="textfield"
          helptext="Help text 1x..."
          required
          character-counter
          maxlength="7"
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
            <div slot="helpText" class="mcw-text-field-helper-line">
              <p
                class="mcw-text-field-helper-text mcw-text-field-helper-text--persistent mcw-text-field-helper-text--validation-msg"
              >
                password must be 8 to 10 characters.
              </p>
            </div>
          </mcw-textfield>
        </form>

        <p></p>
        <mcw-textfield
          v-model="textField"
          :disabled="!enabled"
          label="outlined"
          outline
        >
          <div slot="helpText" class="mcw-text-field-helper-line">
            <p class="mcw-text-field-helper-text">Help text 2...</p>
          </div>
          <mcw-textfield-icon
            slot="leadingIcon"
            tabindex="0"
            role="button"
            @click="ondelete"
            >delete</mcw-textfield-icon
          >
          <!-- <i
            slot="leadingIcon"
            role="button"
            tabindex="0"
            class="material-icons"
            @click="ondelete"
            >delete</i
          > -->
          <mcw-textfield-icon slot="trailingIcon">favorite</mcw-textfield-icon>
          <!-- <i slot="trailingIcon" class="material-icons">favorite</i> -->
        </mcw-textfield>
        <mcw-textfield
          v-model="textField"
          :disabled="!enabled"
          label="in a box"
        >
          <i
            slot="leadingIcon"
            class="fa fa-font-awesome mdc-text-field__icon mdc-text-field__icon--leading"
            role="button"
            tabindex="0"
          ></i>
        </mcw-textfield>

        <mcw-textfield v-model="textField"></mcw-textfield>
      </mcw-layout-cell>
      <mcw-layout-cell span="6">
        <p>
          <mcw-textfield
            v-model="textField"
            :disabled="!enabled"
            multiline
            rows="15"
            label="multiline"
          />
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
