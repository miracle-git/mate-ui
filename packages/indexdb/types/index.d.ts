/**
 * @constant 正则表达式常量
 */
export declare const DATA_REGEX_PATTERN: {
    guid: string;
    mobile: string;
    tel: string;
    email: string;
    idcard: string;
    secure: string;
    letterNumber: string;
    letterNumberChar: string;
    letterNumberCharCase: string;
    chinese: string;
    encode: RegExp;
    decode: RegExp;
    escape: RegExp;
    highlight: RegExp;
    locale: RegExp;
    trim: RegExp;
    kebab: RegExp;
    camel: RegExp;
    uncamel: RegExp;
    html: RegExp;
};
/**
 * @constant 时间格式化常量
 */
export declare const DATE_FORMATTER: {
    date: string;
    datetime: string;
    datetimeShort: string;
    time: string;
    timeShort: string;
};
/**
 * @constant 非对称加密算法类型
 */
export declare const ASYMMETRIC_CRYPTO_TYPE: {
    md5: {
        name: string;
    };
    sha1: {
        name: string;
    };
    sha3: {
        name: string;
    };
    sha224: {
        name: string;
    };
    sha256: {
        name: string;
    };
    sha384: {
        name: string;
    };
    sha512: {
        name: string;
    };
    hmacmd5: {
        name: string;
        hmac: boolean;
    };
    hmacsha1: {
        name: string;
        hmac: boolean;
    };
    hmacsha3: {
        name: string;
        hmac: boolean;
    };
    hmacsha224: {
        name: string;
        hmac: boolean;
    };
    hmacsha256: {
        name: string;
        hmac: boolean;
    };
    hmacsha384: {
        name: string;
        hmac: boolean;
    };
    hmacsha512: {
        name: string;
        hmac: boolean;
    };
    pbkdf2: {
        name: string;
        params: {
            keySize: number;
            iterations: number;
        };
    };
    evpkdf: {
        name: string;
        params: {
            keySize: number;
            iterations: number;
        };
    };
    ripemd160: {
        name: string;
        params: {
            keySize: number;
            iterations: number;
        };
    };
    none: {
        name: string;
    };
};
/**
 * @constant 对称加密算法类型
 */
export declare const SYMMETRIC_CRYPTO_TYPE: {
    base64: {
        name: string;
        encoding: boolean;
    };
    aes: {
        name: string;
    };
    des: {
        name: string;
    };
    rc4: {
        name: string;
        iv: boolean;
    };
    rabbit: {
        name: string;
    };
    rabbitlegacy: {
        name: string;
    };
    none: {
        name: string;
    };
};
/**
 * @constant 存储类型常量
 */
export declare const STORAGE_TYPE: {
    local: string;
    session: string;
};
/**
 * @constant 存储配置常量
 */
export declare const DEFAULT_STORAGE_OPTIONS: {
    storageType: string;
    cryptoType: {
        name: string;
    };
    cryptoKey: string;
    cryptoIv: string;
};
/**
 * @constant 排序模式
 */
export declare const SORT_MODE: {
    index: {
        name: string;
    };
    value: {
        name: string;
    };
};
/**
 * @constant 排序类型
 */
export declare const SORT_TYPE: {
    asc: string;
    desc: string;
};
/**
 * @constant 请求方法常量
 */
export declare const REQUEST_METHOD: {
    get: string;
    post: string;
    put: string;
    patch: string;
    del: string;
};
/**
 * @constant 空类型默认
 */
export declare const EMPTY_FUNC: () => void;
export declare const EMPTY_ARRAY: never[];
export declare const EMPTY_OBJECT: {};
/**
 * @constant 请求数据格式
 */
export declare const CONTENT_TYPE: {
    encoded: string;
    formdata: string;
    json: string;
};
/**
 * @constant 请求默认配置
 */
export declare const DEFAULT_REQUEST_OPTIONS: {
    origin: boolean;
    retry: number;
    delay: number;
    timeout: number;
    method: string;
    headers: {};
    request: () => void;
    response: () => void;
    reject: () => void;
    loading: () => void;
    result: {
        code: string;
        success: string;
        data: string;
        message: string;
    };
};
/**
 * @constant 默认响应配置
 */
export declare const DEFAULT_RESPONSE_OPTIONS: {
    duration: number;
    error: {
        401: {
            code: number;
            message: string;
        };
        403: {
            code: number;
            message: string;
        };
        404: {
            code: number;
            message: string;
        };
        500: {
            code: number;
            message: string;
        };
        504: {
            code: number;
            message: string;
        };
        other: {
            message: string;
        };
    };
};
