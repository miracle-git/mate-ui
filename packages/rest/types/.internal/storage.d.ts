export declare const getStorageOptions: (storageType?: string, cryptoType?: any, cryptoKey?: any, cryptoIv?: any) => {
    storage: Storage;
    secret: boolean;
    encrypt: (data: any, secret?: boolean) => any;
    decrypt: (data: any, secret?: boolean) => any;
};
export type StorageOptions = {
    type?: string;
    strategy?: object;
    key?: string;
    iv?: string;
    def?: any;
};
export declare const storage: {
    get(key: string, options?: StorageOptions): any;
    set(key: string, val: any, options?: StorageOptions): void;
    remove(key: string, storageType?: string): void;
    clear(storageType?: string): void;
    count(storageType?: string): number;
    contains(key: string, storageType?: string): boolean;
};
