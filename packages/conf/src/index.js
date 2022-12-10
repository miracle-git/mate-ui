/**
 * @constant 正则表达式常量
 */
export const DATA_REGEX_PATTERN = {
    guid: '^[0-9a-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12}$',
    mobile: '^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\\d{8}$',
    tel: '^(\\d{3,4}-\\d{7,8}-\\d{1,5})|(^\\d{3,4}-\\d{7,8})$',
    email: '^[0-9a-z][_.0-9a-z-]{0,31}@([0-9a-z][0-9a-z-]{0,30}[0-9a-z]\\.){1,4}[a-z]{2,4}$',
    idcard: '^\\d{18,18}|\\d{15,15}|\\d{17,17}x|\\d{17,17}X$',
    secure: '^(.{before})(?:\\w+)(.{after})$',
    letterNumber: '^(?=.*[0-9])(?=.*[a-zA-Z]).{min,max}$',
    letterNumberChar: '^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{min,max}$',
    letterNumberCharCase: '^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^a-zA-Z0-9]).{min,max}$',
    encode: /(["'<>]|&(?:(amp|lt|gt|#39|nbsp|quot|#\d+);)?)/g,
    decode: /&(amp|lt|gt|#39|nbsp|quot);/g,
    highlight: /[.[*?+^$|()/]|\\]|\\/g,
    trim: /^[\s\uFEFF]+|[\s\uFEFF]+$/g,
    kebab: /([^-])([A-Z])/g,
    camel: /([\\:\-\\_]+(.))/g,
    uncamel: /([a-z\d])([A-Z])/g,
    html: /<\/?.+?\/?>/g
};
//# sourceMappingURL=index.js.map