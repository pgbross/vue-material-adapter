export namespace CustomLink {
    const name: string;
    namespace props {
        const tag: StringConstructor;
        const to: (ObjectConstructor | StringConstructor)[];
    }
    function setup(props: any, { slots, attrs }: {
        slots: any;
        attrs: any;
    }): () => any;
    function setup(props: any, { slots, attrs }: {
        slots: any;
        attrs: any;
    }): () => any;
}
