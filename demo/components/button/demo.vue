<template>
  <div class="mcw-demo">
    <div
      class="mcw-demo--container"
      style="min-height: 40px; padding-bottom: 0"
    >
      <div ref="buttons" class="mcw-demo-button">
        <mcw-button v-bind="buttonProps" @click="onClick">Button</mcw-button>

        <mcw-button v-bind="buttonProps"
          ><template #icon>
            <mcw-material-icon icon="add"></mcw-material-icon></template
          >Button
        </mcw-button>

        <mcw-button v-bind="buttonProps" trailing-icon="done"
          >Button</mcw-button
        >
        <mcw-button v-bind="buttonProps"
          ><template #trailingIcon
            ><i class="material-icons mdc-button__icon" aria-hidden="true">{{
              icon
            }}</i></template
          >
          Button</mcw-button
        >
        <mcw-button v-bind="buttonProps"
          ><template #trailingIcon>
            <svg
              v-if="svg"
              class="mdc-button__icon"
              version="1.1"
              viewBox="0 0 53.333 53.333"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m26.601 2e-3c-14.728 0-26.665 11.938-26.665 26.665 0 14.728 11.938 26.667 26.665 26.667 14.728 0 26.667-11.94 26.667-26.667 0-14.728-11.94-26.665-26.667-26.665zm9.3143 15.826h3.328v21.677h-3.328zm-14.012 4.3827 11.186 6.4568-11.186 6.4588v-4.7909h-11.535v-3.3339h11.535z"
                fill="var(--next-color)"
                stroke-width="1.3333"
              />
            </svg>
          </template>
          Button</mcw-button
        >
      </div>
    </div>

    <div class="mcw-demo--container">
      <div class="button-type-select">
        <mcw-radio
          id="baseline"
          v-model="type"
          label="baseline"
          value="baseline"
          name="button-type"
          checked
        ></mcw-radio>
        <mcw-radio
          id="raised"
          v-model="type"
          label="raised"
          value="raised"
          name="button-type"
        ></mcw-radio>
        <mcw-radio
          id="unelevated"
          v-model="type"
          label="unelevated"
          value="unelevated"
          name="button-type"
        ></mcw-radio>
        <mcw-radio
          id="outlined"
          v-model="type"
          label="outlined"
          value="outlined"
          name="button-type"
        ></mcw-radio>
      </div>

      <div class="button-style-select">
        <mcw-checkbox v-model="disabled" label="disabled" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: '',
      disabled: false,
      icon: 'favorite',
      svg: false,
    };
  },
  computed: {
    raised() {
      return this.type == 'raised';
    },
    unelevated() {
      return this.type == 'unelevated';
    },
    outlined() {
      return this.type == 'outlined';
    },
    buttonProps() {
      return {
        disabled: this.disabled,
        raised: this.raised,
        outlined: this.outlined,
        unelevated: this.unelevated,
      };
    },
  },

  mounted() {
    setTimeout(() => {
      this.icon = 'flight_takeoff';
    }, 2000);

    setTimeout(() => {
      this.svg = true;
    }, 1000);
  },
  methods: {
    onClick() {
      console.log('on-click');
    },
  },
};
</script>

<style>
.mcw-demo-button {
  margin: 0 auto;
  text-align: center;
}

.mcw-demo-button button + button {
  margin-left: 4px;
}

.button-type-select,
.button-style-select {
  margin: 0 32px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
}
</style>
