export type NumberOptions = {
    precision: number;
    thousandth: boolean;
    pretty: boolean;
    reserve: boolean;
    raw: boolean;
    symbol: string;
};
export declare const parseDate: (date: any, format: any) => any;
export declare const parseNumber: (num: any, options?: NumberOptions) => any;
export declare const prettyNumber: (num: any) => any;
