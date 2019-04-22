<template>
  <div class="mdc-demo">
    <div class="mdc-demo mdc-demo--container">
      <mdc-dialog
        v-model="openBasic"
        id="demo-dialog"
        escapeKeyAction="close"
        scrimClickAction="close"
        :autoStackButtons="true"
        @validate="$event.accept(false)"
        @validateCancel="$event.cancel(false)"
        @MDCDialog:closing="onClosed"
        v-if="openBasic"
      >
        <mdc-dialog-title>Lorem ipsum dolor</mdc-dialog-title>
        <mdc-dialog-content>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </div>
        </mdc-dialog-content>

        <mdc-dialog-footer>
          <mdc-dialog-button action="dismiss">Dismiss</mdc-dialog-button>
          <mdc-dialog-button action="accept" isDefault>Accept</mdc-dialog-button>
        </mdc-dialog-footer>
      </mdc-dialog>

      <mdc-button raised @click="openBasic = !openBasic">Basic Dialog</mdc-button>
    </div>

    <div class="mdc-demo mdc-demo--container">
      <mdc-dialog
        v-model="openAlert"
        id="alert-dialog"
        escapeKeyAction="close"
        scrimClickAction="close"
        :autoStackButtons="true"
        @validate="$event.accept(false)"
        @validateCancel="$event.cancel(false)"
        @MDCDialog:closing="onClosed"
        v-if="openAlert"
      >
        <mdc-dialog-content>
          <p>Discard draft?</p>
        </mdc-dialog-content>
        <mdc-dialog-footer>
          <mdc-dialog-button action="dismiss">Cancel</mdc-dialog-button>
          <mdc-dialog-button action="discard" isDefault>Discard</mdc-dialog-button>
        </mdc-dialog-footer>
      </mdc-dialog>

      <mdc-button raised @click="openAlert = !openAlert">Alert Dialog</mdc-button>
    </div>

    <div class="mdc-demo mdc-demo--container">
      <mdc-dialog
        v-model="openSimple"
        id="simple-dialog"
        escapeKeyAction="close"
        scrimClickAction="close"
        :autoStackButtons="true"
        @validate="$event.accept(false)"
        @validateCancel="$event.cancel(false)"
        @MDCDialog:closing="onClosed"
        v-if="openSimple"
      >
        <mdc-dialog-title>Select user</mdc-dialog-title>
        <mdc-dialog-content>
          <mdc-list avatarList>
            <mdc-list-item data-mdc-dialog-action="test">test</mdc-list-item>
            <mdc-list-item data-mdc-dialog-action="help">help</mdc-list-item>
          </mdc-list>
        </mdc-dialog-content>
      </mdc-dialog>

      <mdc-button raised @click="openSimple = !openSimple">Simple Dialog</mdc-button>
    </div>

    <div class="mdc-demo mdc-demo--container">
      <mdc-dialog
        v-model="openConfirmation"
        id="alert-dialog"
        escapeKeyAction="close"
        scrimClickAction="close"
        :autoStackButtons="true"
        @validate="$event.accept(false)"
        @validateCancel="$event.cancel(false)"
        @MDCDialog:closing="onClosed"
        v-if="openConfirmation"
      >
        <mdc-dialog-title>Chose a Phone Ringtone</mdc-dialog-title>
        <mdc-dialog-content>
          <mdc-list singleSelection>
            <mdc-list-item v-for="(choice,i) in choices" :key="i">
              <span class="mdc-list-item__graphic">
                <mdc-radio
                  name="ringtone"
                  :value="choice"
                  label
                  :id="choice | clean"
                  v-model="picked"
                ></mdc-radio>
              </span>
              <label :for="choice | clean">
                <span class="mdc-list-item__text">
                  <span class="mdc-list-item__primary-text">{{choice}}</span>
                </span>
              </label>
            </mdc-list-item>
          </mdc-list>
        </mdc-dialog-content>
        <mdc-dialog-footer>
          <mdc-dialog-button action="dismiss">Cancel</mdc-dialog-button>
          <mdc-dialog-button action="confirm" isDefault>Ok</mdc-dialog-button>
        </mdc-dialog-footer>
      </mdc-dialog>

      <mdc-button raised @click="openConfirmation = !openConfirmation">Confirmation Dialog</mdc-button>
    </div>

    <mdc-caption>
      action:
      <span class>{{ action }}</span>
    </mdc-caption>

    <mdc-caption v-if="picked">
      picked:
      <span class>{{ picked }}</span>
    </mdc-caption>
  </div>
</template>

<script>
export default {
  data() {
    return {
      openBasic: false,
      openSimple: false,
      openAlert: false,
      openConfirmation: false,
      action: '',
      selectedIndex: -1,
      choices: ['Never gonna give you up', 'Host cross buns', 'None'],
      picked: '',
    };
  },
  filters: {
    clean(value) {
      return value.replace(/\s/g, '-');
    },
  },
  methods: {
    onClosed({ action }) {
      this.action = action;
    },
  },
};
</script>
