const desserts_ = [
  {
    dessert: 'Frozen yogurt',
    carbs: '24',
    protein: '4.0',
    comments: 'Super tasty',
  },
  {
    dessert: 'Baked alaska',
    carbs: '34',
    protein: '1.0',
    comments: 'Hot and cold',
  },
  {
    dessert: 'Ice cream',
    carbs: '10',
    protein: '5',
    comments: 'Cold',
  },
];
export default {
  data() {
    return { desserts: [], sortBy: '', sortValue: '' };
  },
  computed: {
    filteredData() {
      const { sortBy, sortValue, desserts: data } = this;
      return this.sorter({ sortBy, sortValue, data });
    },
  },
  mounted() {
    this.desserts = [...desserts_];
  },

  methods: {
    onRowSelection(data) {
      console.dir(data);
    },
    onSelectAll() {
      console.log('select all');
    },
    onUnselectAll() {
      console.log('unselect all');
    },
    onSorted({ data }) {
      this.sortBy = data.columnId;
      this.sortValue = data.sortValue;
    },

    sorter({ sortBy, sortValue, data }) {
      if (!sortBy) {
        return [...data];
      }
      const order = sortValue === 'ascending' ? 1 : -1;

      data = [...data].sort(function (a, b) {
        a = getProperty(a, sortBy);
        b = getProperty(b, sortBy);
        if (sortBy.includes('created')) {
          a = new Date(a);
          b = new Date(b);
        }
        return (a === b ? 0 : a > b ? 1 : -1) * order;
      });
      return data;
    },
  },
};

function getProperty(o, s) {
  // copied from http://stackoverflow.com/questions/6491463/accessing-nested-javascript-objects-with-string-key
  s = s.replace(/\[(\w+)]/g, '.$1'); // convert indexes to properties
  s = s.replace(/^\./, ''); // strip a leading dot
  const a = s.split('.');
  while (a.length > 0) {
    const n = a.shift();
    if (n in o) {
      o = o[n];
    } else {
      return;
    }
  }
  return o;
}
