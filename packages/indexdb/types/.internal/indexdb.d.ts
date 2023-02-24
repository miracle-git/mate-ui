export type IndexDBOptions = {
    name: string;
    version?: number;
    storeName?: string;
    keyPath?: string;
};
export declare const getStore: (db: any, storeName: any) => any;
export declare const getReadonlyStore: (db: any, storeName: any) => any;
