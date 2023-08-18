import card from '/assets/card-16-9.jpg';

const onPrimaryAction = () => {
  console.log('on primary action');
};

export default {
  setup() {
    return { card, onPrimaryAction };
  },
};
