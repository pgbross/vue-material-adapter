<template>
  <div class="mcw-demo">
    <div class="mcw-demo mcw-demo--container">
      <mcw-button @click="openBasic = !openBasic">Basic Dialog</mcw-button>
      <mcw-button @click="openSimple = !openSimple">Simple Dialog</mcw-button>
      <mcw-button @click="openAlert = !openAlert">Alert Dialog</mcw-button>
      <mcw-button @click="openConfirmation = !openConfirmation">Confirmation Dialog</mcw-button>
      <mcw-button @click="openScrolling = !openScrolling">Scrolling Dialog</mcw-button>
    </div>

    <mcw-caption v-if="hasBeenOpened">
      <span class>{{ action }}</span>
    </mcw-caption>

    <mcw-caption v-if="picked">
      Picked:
      <span class>{{ picked }}</span>
    </mcw-caption>

    <mcw-dialog
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
      <mcw-dialog-title>Lorem ipsum dolor</mcw-dialog-title>
      <mcw-dialog-content>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </div>
      </mcw-dialog-content>

      <mcw-dialog-footer>
        <mcw-dialog-button action="dismiss">Dismiss</mcw-dialog-button>
        <mcw-dialog-button action="accept" isDefault isInitialFocus>Accept</mcw-dialog-button>
      </mcw-dialog-footer>
    </mcw-dialog>

    <mcw-dialog
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
      <mcw-dialog-title>Select user</mcw-dialog-title>
      <mcw-dialog-content>
        <mcw-list avatarList>
          <mcw-list-item data-mdc-dialog-action="test" tabindex="0">test</mcw-list-item>
          <mcw-list-item data-mdc-dialog-action="help">help</mcw-list-item>
        </mcw-list>
      </mcw-dialog-content>
    </mcw-dialog>

    <mcw-dialog
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
      <mcw-dialog-content>
        <p>Discard draft?</p>
      </mcw-dialog-content>
      <mcw-dialog-footer>
        <mcw-dialog-button action="dismiss">Cancel</mcw-dialog-button>
        <mcw-dialog-button action="discard" isDefault>Discard</mcw-dialog-button>
      </mcw-dialog-footer>
    </mcw-dialog>

    <mcw-dialog
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
      <mcw-dialog-title>Chose a Phone Ringtone</mcw-dialog-title>
      <mcw-dialog-content>
        <mcw-list singleSelection>
          <mcw-list-item v-for="(choice,i) in choices" :key="i">
            <span class="mdc-list-item__graphic">
              <mcw-radio name="ringtone" :value="choice" :id="choice | clean" v-model="picked"></mcw-radio>
            </span>
            <label :for="choice | clean">{{choice}}</label>
          </mcw-list-item>
        </mcw-list>
      </mcw-dialog-content>
      <mcw-dialog-footer>
        <mcw-dialog-button action="dismiss">Cancel</mcw-dialog-button>
        <mcw-dialog-button action="confirm" isDefault>Ok</mcw-dialog-button>
      </mcw-dialog-footer>
    </mcw-dialog>

    <mcw-dialog
      v-model="openScrolling"
      id="alert-dialog"
      escapeKeyAction="close"
      scrimClickAction="close"
      :autoStackButtons="true"
      @validate="$event.accept(false)"
      @validateCancel="$event.cancel(false)"
      @MDCDialog:closing="onClosed"
      v-if="openScrolling"
    >
      <mcw-dialog-title>The Wonderful Wizard of Oz</mcw-dialog-title>
      <mcw-dialog-content>
        <p>
          <a
            href="https://www.gutenberg.org/ebooks/55"
            target="_blank"
            rel="noopener noreferrer"
          >Read the full book</a>
        </p>
        <p>Dorothy lived in the midst of the great Kansas prairies, with Uncle Henry, who was a farmer, and Aunt Em, who was the farmer's wife. Their house was small, for the lumber to build it had to be carried by wagon many miles. There were four walls, a floor and a roof, which made one room; and this room contained a rusty looking cookstove, a cupboard for the dishes, a table, three or four chairs, and the beds. Uncle Henry and Aunt Em had a big bed in one corner, and Dorothy a little bed in another corner. There was no garret at all, and no cellar--except a small hole dug in the ground, called a cyclone cellar, where the family could go in case one of those great whirlwinds arose, mighty enough to crush any building in its path. It was reached by a trap door in the middle of the floor, from which a ladder led down into the small, dark hole.</p>
        <p>When Dorothy stood in the doorway and looked around, she could see nothing but the great gray prairie on every side. Not a tree nor a house broke the broad sweep of flat country that reached to the edge of the sky in all directions. The sun had baked the plowed land into a gray mass, with little cracks running through it. Even the grass was not green, for the sun had burned the tops of the long blades until they were the same gray color to be seen everywhere. Once the house had been painted, but the sun blistered the paint and the rains washed it away, and now the house was as dull and gray as everything else.</p>
        <p>When Aunt Em came there to live she was a young, pretty wife. The sun and wind had changed her, too. They had taken the sparkle from her eyes and left them a sober gray; they had taken the red from her cheeks and lips, and they were gray also. She was thin and gaunt, and never smiled now. When Dorothy, who was an orphan, first came to her, Aunt Em had been so startled by the child's laughter that she would scream and press her hand upon her heart whenever Dorothy's merry voice reached her ears; and she still looked at the little girl with wonder that she could find anything to laugh at.</p>
        <p>Uncle Henry never laughed. He worked hard from morning till night and did not know what joy was. He was gray also, from his long beard to his rough boots, and he looked stern and solemn, and rarely spoke.</p>
        <p>It was Toto that made Dorothy laugh, and saved her from growing as gray as her other surroundings. Toto was not gray; he was a little black dog, with long silky hair and small black eyes that twinkled merrily on either side of his funny, wee nose. Toto played all day long, and Dorothy played with him, and loved him dearly.</p>
        <p>Today, however, they were not playing. Uncle Henry sat upon the doorstep and looked anxiously at the sky, which was even grayer than usual. Dorothy stood in the door with Toto in her arms, and looked at the sky too. Aunt Em was washing the dishes.</p>
        <p>From the far north they heard a low wail of the wind, and Uncle Henry and Dorothy could see where the long grass bowed in waves before the coming storm. There now came a sharp whistling in the air from the south, and as they turned their eyes that way they saw ripples in the grass coming from that direction also.</p>
      </mcw-dialog-content>
      <mcw-dialog-footer>
        <mcw-dialog-button action="dismiss">Cancel</mcw-dialog-button>
        <mcw-dialog-button action="confirm" isDefault>Ok</mcw-dialog-button>
      </mcw-dialog-footer>
    </mcw-dialog>
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
      openScrolling: false,
      action: '',
      selectedIndex: -1,
      choices: ['Never gonna give you up', 'Host cross buns', 'None'],
      picked: '',
      hasBeenOpened: false,
    };
  },
  filters: {
    clean(value) {
      return value.replace(/\s/g, '-');
    },
  },
  methods: {
    onClosed({ action }) {
      this.hasBeenOpened = true;
      this.action =
        action !== 'dismiss'
          ? 'Accepted, thanks!'
          : 'Declined... Maybe next time?';
    },
  },
};
</script>
