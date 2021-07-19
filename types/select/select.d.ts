declare namespace _default {
    const name: string;
    const inheritAttrs: boolean;
    namespace props {
        const modelValue: StringConstructor;
        const helptext: StringConstructor;
        const leadingIcon: StringConstructor;
        const helptextPersistent: BooleanConstructor;
        const helptextValidation: BooleanConstructor;
        const disabled: BooleanConstructor;
        const label: StringConstructor;
        const outlined: BooleanConstructor;
        const required: BooleanConstructor;
        namespace menuFullwidth {
            export const type: BooleanConstructor;
            function _default(): boolean;
            export { _default as default };
        }
    }
    function setup(props: any, { emit }: {
        emit: any;
    }): any;
    function setup(props: any, { emit }: {
        emit: any;
    }): any;
    namespace components {
        export { SelectHelperText };
        export { SelectIcon };
    }
}
export default _default;
