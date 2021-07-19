declare namespace _default {
    const name: string;
    namespace props {
        const modelValue: (StringConstructor | NumberConstructor)[];
        const start: (StringConstructor | NumberConstructor)[];
        namespace min {
            export const type: (StringConstructor | NumberConstructor)[];
            const _default: number;
            export { _default as default };
        }
        namespace max {
            const type_1: (StringConstructor | NumberConstructor)[];
            export { type_1 as type };
            const _default_1: number;
            export { _default_1 as default };
        }
        namespace step {
            const type_2: (StringConstructor | NumberConstructor)[];
            export { type_2 as type };
            const _default_2: number;
            export { _default_2 as default };
        }
        const discrete: BooleanConstructor;
        const tickMarks: BooleanConstructor;
        const disabled: BooleanConstructor;
        namespace range {
            const type_3: BooleanConstructor;
            export { type_3 as type };
            const _default_3: boolean;
            export { _default_3 as default };
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
