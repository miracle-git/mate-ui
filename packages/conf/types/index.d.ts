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
    encode: RegExp;
    decode: RegExp;
    highlight: RegExp;
    trim: RegExp;
    kebab: RegExp;
    camel: RegExp;
    uncamel: RegExp;
    html: RegExp;
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
