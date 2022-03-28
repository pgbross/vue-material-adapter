import { MDCIconButtonToggleFoundation } from '@material/icon-button/foundation.js';
import {
  computed,
  onBeforeUnmount,
  onMounted,
  reactive,
  toRef,
  toRefs,
  watch,
} from 'vue';
import { touchWrapper } from '../base/index.js';
import { useRipplePlugin } from '../ripple/ripple-plugin.js';

export default {
  name: 'mcw-icon-button',

  props: {
    modelValue: Boolean,
    disabled: Boolean,
    isTouch: Boolean,
  },

  setup(props, { emit, attrs }) {
    const uiState = reactive({
      classes: {
        'mdc-icon-button': 1,
        'material-icons': 1,
      },
      root: undefined,
    });

    const { CHANGE_EVENT } = MDCIconButtonToggleFoundation.strings;

    const { classes: rippleClasses, styles } = useRipplePlugin(
      toRef(uiState, 'root'),
      {
        isUnbounded: () => true,
      },
    );

    let foundation;

    const adapter = {
      addClass: className =>
        (uiState.classes = { ...uiState.classes, [className]: true }),

      removeClass: className => {
        const { [className]: removed, ...rest } = uiState.classes;
        uiState.classes = rest;
      },

      hasClass: className => Boolean(uiState.classes[className]),

      setAttr: (attributeName, attributeValue) =>
        uiState.root.setAttribute(attributeName, attributeValue),

      getAttr: attributeName => uiState.root.getAttribute(attributeName),

      notifyChange: eventData => {
        emit(CHANGE_EVENT, eventData);
        emit('update:modelValue', eventData.isOn);
      },
    };

    const classes = computed(() => {
      return {
        ...rippleClasses.value,
        ...uiState.classes,
      };
    });

    watch(
      () => props.modelValue,
      nv => {
        foundation.toggle(nv);
      },
    );

    const tag = computed(() => (attrs.href ? 'a' : 'button'));

    const onClick = event_ => foundation.handleClick(event_);

    onMounted(() => {
      foundation = new MDCIconButtonToggleFoundation(adapter);
      foundation.init();

      foundation.toggle(props.modelValue);
    });

    onBeforeUnmount(() => {
      foundation.destroy();
    });

    return { ...toRefs(uiState), classes, styles, tag, onClick };
  },

  components: { touchWrapper },
};
