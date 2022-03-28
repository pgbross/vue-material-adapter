import { computed, onMounted, reactive, toRefs } from 'vue';

export default {
  setup() {
    const uiState = reactive({
      type: '',
      disabled: false,
      icon: 'favorite',
      svg: false,
    });

    const buttonProps = computed(() => ({
      disabled: uiState.disabled,
      raised: uiState.type === 'raised',
      outlined: uiState.type === 'outlined',
      unelevated: uiState.type === 'unelevated',
    }));

    onMounted(() => {
      setTimeout(() => {
        uiState.icon = 'flight_takeoff';
      }, 2000);

      setTimeout(() => {
        uiState.svg = true;
      }, 1000);
    });

    return { ...toRefs(uiState), buttonProps, onClick };
  },
};

const onClick = () => console.log('on-click');
