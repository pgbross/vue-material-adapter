import { reactive, toRefs } from 'vue';

const onChange = (/* detail */) => {
  // console.dir(detail);
};
const onFavourite = () => {
  console.log('onFavourite');
};

export default {
  setup() {
    const uiState = reactive({ singleIndex: undefined, multiIndex: [] });

    return { ...toRefs(uiState), onChange, onFavourite };
  },
};
