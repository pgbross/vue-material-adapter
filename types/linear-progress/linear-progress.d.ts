declare namespace _default {
    const name: string;
    namespace props {
        export namespace open {
            export const type: BooleanConstructor;
            const _default: boolean;
            export { _default as default };
        }
        export const indeterminate: BooleanConstructor;
        export { progressPropertyType_ as progress };
        export { progressPropertyType_ as buffer };
        export namespace bufferingDots {
            const type_1: BooleanConstructor;
            export { type_1 as type };
            const _default_1: boolean;
            export { _default_1 as default };
        }
        export namespace tag {
            const type_2: StringConstructor;
            export { type_2 as type };
            const _default_2: string;
            export { _default_2 as default };
        }
    }
    function setup(props: any): any;
    function setup(props: any): any;
}
export default _default;
declare namespace progressPropertyType_ {
    const type_3: (StringConstructor | NumberConstructor)[];
    export { type_3 as type };
    export function validator(value: any): boolean;
    export function validator(value: any): boolean;
}
