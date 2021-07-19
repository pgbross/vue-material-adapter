declare namespace _default {
    const name: string;
    const inheritAttrs: boolean;
    namespace props {
        const modelValue: (StringConstructor | NumberConstructor)[];
        namespace type {
            const type_1: StringConstructor;
            export { type_1 as type };
            const _default: string;
            export { _default as default };
            export function validator(value: any): boolean;
        }
        const label: StringConstructor;
        const outline: BooleanConstructor;
        const disabled: BooleanConstructor;
        const required: BooleanConstructor;
        namespace valid {
            const type_2: BooleanConstructor;
            export { type_2 as type };
            const _default_1: any;
            export { _default_1 as default };
        }
        const multiline: BooleanConstructor;
        namespace size {
            const type_3: (StringConstructor | NumberConstructor)[];
            export { type_3 as type };
            const _default_2: number;
            export { _default_2 as default };
        }
        namespace minlength {
            const type_4: (StringConstructor | NumberConstructor)[];
            export { type_4 as type };
            const _default_3: any;
            export { _default_3 as default };
        }
        namespace maxlength {
            const type_5: (StringConstructor | NumberConstructor)[];
            export { type_5 as type };
            const _default_4: any;
            export { _default_4 as default };
        }
        namespace rows {
            const type_6: (StringConstructor | NumberConstructor)[];
            export { type_6 as type };
            const _default_5: number;
            export { _default_5 as default };
        }
        namespace cols {
            const type_7: (StringConstructor | NumberConstructor)[];
            export { type_7 as type };
            const _default_6: number;
            export { _default_6 as default };
        }
        namespace id {
            const type_8: StringConstructor;
            export { type_8 as type };
        }
        const helptext: StringConstructor;
        const helptextPersistent: BooleanConstructor;
        const helptextValidation: BooleanConstructor;
        namespace resizer {
            const type_9: BooleanConstructor;
            export { type_9 as type };
            function _default_7(): boolean;
            export { _default_7 as default };
        }
        const prefix: StringConstructor;
        const suffix: StringConstructor;
        const characterCounter: BooleanConstructor;
        const characterCounterInternal: BooleanConstructor;
    }
    function setup(props: any, { emit, slots, attrs }: {
        emit: any;
        slots: any;
        attrs: any;
    }): any;
    function setup(props: any, { emit, slots, attrs }: {
        emit: any;
        slots: any;
        attrs: any;
    }): any;
    namespace components {
        export { mcwLineRipple };
        export { mcwNotchedOutline };
    }
}
export default _default;
import { mcwLineRipple } from "../line-ripple/index.js";
import { mcwNotchedOutline } from "../notched-outline/index.js";
