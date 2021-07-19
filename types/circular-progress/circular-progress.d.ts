declare namespace _default {
    const name: string;
    namespace props {
        export namespace open {
            export const type: BooleanConstructor;
            const _default: boolean;
            export { _default as default };
        }
        export const indeterminate: BooleanConstructor;
        export const medium: BooleanConstructor;
        export { ProgressPropertyType as progress };
        export namespace tag {
            const type_1: StringConstructor;
            export { type_1 as type };
            const _default_1: string;
            export { _default_1 as default };
        }
    }
    function setup(props: any): any;
    function setup(props: any): any;
}
export default _default;
declare namespace ProgressPropertyType {
    const type_2: (StringConstructor | NumberConstructor)[];
    export { type_2 as type };
    export function validator(value: any): boolean;
    export function validator(value: any): boolean;
}
