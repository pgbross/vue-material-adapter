import { onMounted, ref } from '@vue/composition-api';

export default {
  name: 'mcw-chip-checkmark',

  setup() {
    const width = ref(0);
    const root = ref(null);

    onMounted(() => (width.value = root.value.getBoundingClientRect().height));
    return { width, root };
  },
};
