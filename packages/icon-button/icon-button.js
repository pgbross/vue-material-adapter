import { MDCIconButtonToggleFoundation } from '@material/icon-button/foundation';
import {
  computed,
  onBeforeUnmount,
  onMounted,
  reactive,
  ref,
  toRefs,
  watch,
} from 'vue';
import { useRipplePlugin } from '~/ripple/ripple-plugin.js';

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

    const root = ref(null);
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
      setAttr: (attrName, attrValue) =>
        root.value.setAttribute(attrName, attrValue),
      getAttr: attrName => root.value.getAttribute(attrName),
      notifyChange: evtData => {
        emit(CHANGE_EVENT, evtData);
        emit('update:modelValue', evtData.isOn);
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

    const onClick = evt => foundation.handleClick(evt);

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
