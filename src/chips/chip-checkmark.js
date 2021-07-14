import { onMounted, ref } from 'vue';

export default {
  name: 'mcw-chip-checkmark',

  setup() {
    const width = ref(0);
    const root = ref();

    onMounted(() => (width.value = root.value.getBoundingClientRect().height));
    return { width, root };
  },
};
