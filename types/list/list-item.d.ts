declare namespace _default {
    const name: string;
    const inheritAttrs: boolean;
    namespace props {
        export const twoLine: StringConstructor;
        export const disabled: BooleanConstructor;
        export const icon: (StringConstructor | BooleanConstructor)[];
        export const groupIcon: StringConstructor;
        const name_1: StringConstructor;
        export { name_1 as name };
        export const trailing: BooleanConstructor;
    }
    namespace components {
        export { CustomLink };
    }
    function setup(props: any, { slots, attrs }: {
        slots: any;
        attrs: any;
    }): any;
    function setup(props: any, { slots, attrs }: {
        slots: any;
        attrs: any;
    }): any;
}
export default _default;
import { CustomLink } from "../base/index.js";
