/* global Vue,vma */

Vue.use(vma.default);

new Vue({
  data: {
    title: 'Vue Material Adapter',
    subtitle: 'Welcome to your Vue app!',
    links: [
      {
        desc: 'To learn more about Vue, visit',
        url: 'http://vuejs.org/guide/',
      },
      {
        desc: 'To learn more about Vue Material Adapter, visit',
        url: 'https://github.com/pgbross/vue-material-adapter',
      },
      {
        desc: 'To have a preview of Vue Material Adapter components, visit',
        url: 'https://pgbross.github.io/vue-material-adapter',
      },
    ],
  },
}).$mount('#app');
