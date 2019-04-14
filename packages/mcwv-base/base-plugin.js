export function BasePlugin(components) {
  return {
    version: '__VERSION__',
    install: vm => {
      // eslint-disable-next-line guard-for-in
      for (const key in components) {
        const component = components[key];
        vm.component(component.name, component);
      }
    },
    components,
  };
}
