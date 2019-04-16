export function BasePlugin(components) {
  return {
    version: '__VERSION__',
    install: vm => {
      Object.values(components).forEach(component =>
        vm.component(component.name, component),
      );
    },
    components,
  };
}
