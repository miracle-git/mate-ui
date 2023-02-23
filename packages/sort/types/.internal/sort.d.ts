declare const _default: {
    isAsc(type: string): boolean;
    swap(items: any, a: any, b: any): void;
    compare(items: any, a: any, b: any, { type, mode }?: {
        type?: string | undefined;
        mode?: {
            name: string;
        } | undefined;
    }): boolean;
    partition(items: any, type: any, left: number, right: number): number;
    combine(items: any, type: any, left: any, right: any): never[];
    heapify(items: any, type: any, i: number, len: number): void;
};
export default _default;
