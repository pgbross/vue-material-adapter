export function BasePlugin(components) {
  return {
    version: '__VERSION__',
    install: vm => {
      Object.entries(components).forEach(([key, component]) => {
        const name = key.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

        // eslint-disable-next-line no-unused-vars
        const [pfx, ...rest] = name.split('-');

        const mdcName = ['mdc', ...rest].join('-');
        const mcwName = ['mcw', ...rest].join('-');

        const definition = vm.extend(component);

        vm.component(mcwName, definition);
        vm.component(mdcName, definition);
      });
    },
    components,
  };
}
