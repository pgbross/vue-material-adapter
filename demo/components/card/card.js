import card from 'demo/assets/card-16-9.jpg';

export default {
  data() {
    return {
      card,
    };
  },
  methods: {
    onPrimaryAction() {
      console.log('on primary action');
    },
  },
};
