export declare const parse: (prefix: any) => {
    prefix: string;
    exclude: string;
};
export type MockOptions = {
    prefix: string;
    urls: [] | object;
};
export declare const mapping: (config: any, _prefix: any, mock: any) => {};
export declare const mocking: (config: any) => {
    prefix: string;
    urls: object | [];
};
