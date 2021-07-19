declare namespace _default {
    const name: string;
    namespace props {
        const modelValue: BooleanConstructor;
        const stacked: BooleanConstructor;
        const leading: BooleanConstructor;
        const message: StringConstructor;
        const actionText: StringConstructor;
        const timeoutMs: (StringConstructor | NumberConstructor)[];
        namespace closeOnEscape {
            export const type: BooleanConstructor;
            const _default: boolean;
            export { _default as default };
        }
        namespace dismissAction {
            const type_1: (StringConstructor | BooleanConstructor)[];
            export { type_1 as type };
            const _default_1: boolean;
            export { _default_1 as default };
        }
        const reason: StringConstructor;
    }
    function setup(props: any, { emit }: {
        emit: any;
    }): any;
    function setup(props: any, { emit }: {
        emit: any;
    }): any;
}
export default _default;
