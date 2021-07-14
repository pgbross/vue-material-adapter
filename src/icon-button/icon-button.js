import { MDCIconButtonToggleFoundation } from '@material/icon-button/foundation.js';
import {
  computed,
  onBeforeUnmount,
  onMounted,
  reactive,
  ref,
  toRefs,
  watch,
} from 'vue';
import { useRipplePlugin } from '../ripple/ripple-plugin.js';

export default {
  name: 'mcw-icon-button',
  // model: {
  //   prop: 'isOn',
  //   event: 'change',
  // },
  props: {
    modelValue: Boolean,
    disabled: Boolean,
  },

  setup(props, { emit, attrs }) {
    const uiState = reactive({
      classes: {
        'mdc-icon-button': 1,
        'material-icons': 1,
      },
    });

    const root = ref();
    const { CHANGE_EVENT } = MDCIconButtonToggleFoundation.strings;

    const { classes: rippleClasses, styles } = useRipplePlugin(root, {
      isUnbounded: () => true,
    });

    let foundation;

    const adapter = {
      addClass: className =>
        (uiState.classes = { ...uiState.classes, [className]: true }),
      removeClass: className => {
        // eslint-disable-next-line no-unused-vars
        const { [className]: removed, ...rest } = uiState.classes;
        uiState.classes = rest;
      },
      hasClass: className => Boolean(uiState.classes[className]),
      setAttr: (attributeName, attributeValue) =>
        root.value.setAttribute(attributeName, attributeValue),
      getAttr: attributeName => root.value.getAttribute(attributeName),
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

    const tag = computed(() => {
      const isLink = Boolean(attrs.href);
      return isLink ? 'a' : 'button';
    });

    const onClick = event_ => foundation.handleClick(event_);

    onMounted(() => {
      foundation = new MDCIconButtonToggleFoundation(adapter);
      foundation.init();

      foundation.toggle(props.modelValue);
    });

    onBeforeUnmount(() => {
      foundation.destroy();
    });

    return { ...toRefs(uiState), classes, styles, root, tag, onClick };
  },
};
