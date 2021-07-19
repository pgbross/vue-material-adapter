export function BasePlugin(components: any): {
    version: string;
    install: (vm: any) => void;
    components: any;
};
