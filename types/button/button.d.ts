declare namespace _default {
    const name: string;
    namespace props {
        const raised: BooleanConstructor;
        const unelevated: BooleanConstructor;
        const outlined: BooleanConstructor;
        const icon: StringConstructor;
        const trailingIcon: StringConstructor;
    }
    namespace components {
        export { CustomLink };
    }
    function setup(props: any, { slots }: {
        slots: any;
    }): {
        styles: any;
        classes: any;
        root: any;
        haveIcon: any;
        haveTrailingIcon: any;
    };
    function setup(props: any, { slots }: {
        slots: any;
    }): {
        styles: any;
        classes: any;
        root: any;
        haveIcon: any;
        haveTrailingIcon: any;
    };
}
export default _default;
import { CustomLink } from "../base/index.js";
