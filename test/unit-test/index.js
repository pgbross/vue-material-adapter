import './polyfills.js';
import { mount } from '@vue/test-utils';

export * from '@vue/test-utils';

export function pluginSanityCheck(pluginName, plugin, options) {
  describe(pluginName, () => {
    const components = plugin.components;
    test('is a valid adapter plugin', () => {
      expect(plugin.install).toBeInstanceOf(Function);
      expect(components).toBeInstanceOf(Object);
    });

    Object.keys(components).forEach(key => {
      describe(key, () => {
        const component = components[key];

        const name = component.name;
        test('has a valid name', () => {
          expect(name).not.toBe(key);
          expect(name.toLowerCase().replace(/-/g, '')).toBe(
            key.toLocaleLowerCase(),
          );
        });

        const wrapper = mount(
          component,
          (options && options[key]) || undefined,
        );
        if (component.functional) {
          if (!options || !options[key]) {
            // if there are stubs then the wrapper doesnt match the component so ignore
            test('is a functional component', () => {
              expect(
                wrapper.isFunctionalComponent && wrapper.is(component),
              ).toBeTruthy();
            });
          }
          checkValidFunctionalComponent(component);
        } else {
          test('is a Vue instance', () => {
            expect(wrapper.isVueInstance()).toBeTruthy();
          });
          checkValidMdcAdapter(wrapper.vm);
        }
      });
    });
  });
}

export function checkValidFunctionalComponent(component) {
  checkValidOptions(component);
}

export function checkValidMdcAdapter(vm) {
  checkValidOptions(vm.$options);

  // it is not always true that a component has a class of the same name
  // and it is polluting the class names to force one for the sake of testing
  // checkValidClass(vm, vm.$options.name);

  vm.ripple && checkValidFoundation(vm.ripple);

  vm.foundation && checkValidFoundation(vm.foundation);

  vm.formField && checkValidFoundation(vm.formField);
}

export function checkValidOptions(options) {
  test('name follows convention', () => {
    expect(options.name).toMatch(/^mdc-[a-z1-9-]+$/);
  });

  options.data &&
    test('data is a function', () => {
      expect(options.data).toBeInstanceOf(Function);
    });

  options.provide &&
    test('provide is a function', () => {
      expect(options.provide).toBeInstanceOf(Function);
    });
}

// export function checkValidClass(vm, name) {
//   test('has a valid class', () => {
//     const hasVallidClass =
//       vm.$el.classList.contains(name) ||
//       (vm.$el.classList.contains(name + '-wrapper') &&
//         vm.$el.querySelector('.' + name) !== null);

//     expect(hasVallidClass).toBeTruthy();
//   });
// }

export function checkValidFoundation(foundation) {
  const adapter = foundation.adapter_;
  const constructor = Object.getPrototypeOf(foundation).constructor;
  const defaults = constructor.defaultAdapter;

  describe(`has a valid ${constructor.name}`, () => {
    test('has a valid foundation member', () => {
      expect(adapter).toBeDefined();
      expect(defaults).toBeDefined();
    });

    Object.keys(defaults).forEach(method => {
      const api = defaults[method];
      const instance = adapter[method];

      test(`.${method} is implemented`, () => {
        expect(instance).toBeDefined();
        expect(instance.toString()).not.toBe(api.toString());
      });

      // test(`.${method} has valid arguments`, () => {
      //   expect(instance.arguments).toEqual(api.arguments);
      // });
    });

    Object.keys(adapter).forEach(method => {
      const api = defaults[method];

      test(`.${method} is required`, () => {
        expect(api).toBeDefined();
      });
    });
  });
}
