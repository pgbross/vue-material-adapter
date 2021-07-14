export function BasePlugin(components) {
  return {
    version: '__VERSION__',
    install: vm => {
      for (const [key, component] of Object.entries(components)) {
        const name = key.replace(/([\da-z])([A-Z])/g, '$1-$2').toLowerCase();

        // eslint-disable-next-line no-unused-vars
        const [pfx, ...rest] = name.split('-');

        const mdcName = ['mdc', ...rest].join('-');
        const mcwName = ['mcw', ...rest].join('-');

        const haveComponent = vm._context.components[mcwName];
        if (!haveComponent) {
          vm.component(mcwName, component);
          vm.component(mdcName, component);
        }
      }
    },
    components,
  };
}
