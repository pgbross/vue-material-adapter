declare namespace _default {
    const name: string;
    namespace components {
        export { mcwButton };
    }
    namespace props {
        const autoStackButtons: BooleanConstructor;
        const escapeKeyAction: StringConstructor;
        const scrollable: BooleanConstructor;
        const modelValue: BooleanConstructor;
        const role: StringConstructor;
        namespace scrimClickAction {
            export const type: StringConstructor;
            const _default: string;
            export { _default as default };
        }
        namespace tag {
            const type_1: StringConstructor;
            export { type_1 as type };
            const _default_1: string;
            export { _default_1 as default };
        }
        const ariaLabelledby: StringConstructor;
        const ariaDescribedby: StringConstructor;
    }
    function setup(props: any, { emit }: {
        emit: any;
    }): any;
    function setup(props: any, { emit }: {
        emit: any;
    }): any;
}
export default _default;
import { mcwButton } from "../button/index.js";
