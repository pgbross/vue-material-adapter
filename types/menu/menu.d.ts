declare namespace _default {
    const name: string;
    namespace props {
        const modelValue: (ObjectConstructor | BooleanConstructor)[];
        const quickOpen: BooleanConstructor;
        const anchorCorner: (StringConstructor | NumberConstructor)[];
        const anchorMargin: ObjectConstructor;
        const fixed: BooleanConstructor;
        const absolutePosition: ArrayConstructor;
        const typeAhead: BooleanConstructor;
        const singleSelection: BooleanConstructor;
        namespace defaultFocusState {
            export const type: StringConstructor;
            function _default(): string;
            export { _default as default };
        }
    }
    function setup(props: any, { emit }: {
        emit: any;
    }): any;
    function setup(props: any, { emit }: {
        emit: any;
    }): any;
}
export default _default;
