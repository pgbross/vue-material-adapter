import Component from './component.vue';
import Documentation from './doc.vue';
import Home from './home.vue';

export default [
  { path: '/component/:id', component: Component, name: 'component' },
  { path: '/docs/:id', component: Documentation, name: 'docs' },
  { path: '/', component: Home, name: 'home' },
  { path: '/:pathMatch(.*)', redirect: '/' },
];
