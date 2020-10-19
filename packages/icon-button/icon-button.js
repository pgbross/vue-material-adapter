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
  model: {
    prop: 'isOn',
    event: 'change',
  },
  props: {
    isOn: Boolean,
    disabled: Boolean,
  },

  setup(props, { emit, attrs, refs, slots }) {
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
        refs.root.setAttribute(attrName, attrValue),
      getAttr: attrName => refs.root.getAttribute(attrName),
      notifyChange: evtData => {
        emit(CHANGE_EVENT, evtData);
        emit('change', evtData.isOn);
      },
    };

    const classes = computed(() => {
      return {
        ...rippleClasses.value,
        ...uiState.classes,
      };
    });

    watch(
      () => props.isOn,
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

      foundation.toggle(props.isOn);
    });

    onBeforeUnmount(() => {
      foundation.destroy();
    });

    return { ...toRefs(uiState), classes, styles, root, tag, onClick };
  },
};
