declare namespace _default {
    const name: string;
    namespace props {
        export { spanOptions_ as span };
        export { spanOptions_ as order };
        export { spanOptions_ as phone };
        export { spanOptions_ as tablet };
        export { spanOptions_ as desktop };
        export namespace align {
            const type: StringConstructor;
            function validator(value: any): boolean;
        }
    }
    function setup(props: any): {
        classes: any;
    };
    function setup(props: any): {
        classes: any;
    };
}
export default _default;
declare namespace spanOptions_ {
    const type_1: (StringConstructor | NumberConstructor)[];
    export { type_1 as type };
    const _default: any;
    export { _default as default };
    export function validator_1(value: any): boolean;
    export { validator_1 as validator };
}
