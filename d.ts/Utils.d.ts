export declare class Utils {
    private _VERSION;
    private _INFO;
    constructor();
    /**
     * 获取版本号
     */
    readonly VERSION: string;
    readonly INFO: object;
    /**
     * @description 是否字符串
     */
    isString(v: any): boolean;
    /**
     * @description 是否数字
     */
    isNumber(v: any): boolean;
    /**
     * @description 是否boolean
     */
    isBoolean(v: any): boolean;
    /**
     * @description 是否 Null
     */
    isNull(v: any): boolean;
    /**
     * @description 是否undefined
     */
    isUndefined(v: any): boolean;
    /**
     * @description 判断是否数组
     */
    isArray(v: any): boolean;
    /**
     * @description 判断是否对象
     */
    isObject(v: any): boolean;
    /**
     * @description 是否日期
     */
    isDate(v: any): boolean;
    /**
     * @description 是否Function
     */
    isFunction(v: any): boolean;
    /**
     * @description 是否Set
     */
    isSet(v: any): boolean;
    /**
     * @description 是否Map
     */
    isMap(v: any): boolean;
    /**
     * @description 是否Symbol
     */
    isSymbol(v: any): boolean;
    /**
     *
     * @description  是否Promise
     */
    isPromise(v: any): boolean;
    /**
     * @description 是否基本数据类型
     */
    isPrimitive(v: any): boolean;
    /**
     * @description 获取数据类型
     */
    typeOf(v: any): string;
    /**
     * 属性是否存在
     */
    hasOwn(obj: any, v: string | number): boolean;
    /**
     * @description 对象深拷贝
     * @param obj 数据源
     * @param cache 一个缓存,防止拷贝死循环
     */
    deepCopy(obj: any, cache?: Array<any>): any;
    /**
     * @description 格式化日期
     * @param date 日期
     * @param format 默认是-
     */
    formatDate(date: Date, format?: string): string;
    /**
     * @description 转换成大写
     */
    toUpperCase(str: string): string;
    /**
     * @description 转换成小写
     */
    toLowerCase(str: string): string;
    /**
     * @description 生成随机数
     * @param lower 默认是 0
     * @param upper 默认是 1
     */
    random(lower?: number, upper?: number): number;
    /**
     * @description 对字符串左边去空格
     */
    trimLeft(str: string): string;
    /**
     * @description 对字符串右边去空格
     */
    trimRight(str: string): string;
    /**
     * @description 对字符串两边去空格
     */
    trim(str: string): string;
    /**
     * @description 是否PC端
     */
    isPC(): boolean;
    /**
     * @description 获取浏览器类型
     */
    getBrowerType(): string;
    /**
     * @description 正则验证
     * @param types types列表
     *      phone tel card pwd postal qq email url ip number en cn html
     */
    checkRegExp(str: string, types: string): any;
    /**
     * @description 获取身份证信息
     */
    getCardIDInfo(cid: string): any;
    /**
     * @description 查找某元素是否存在集合当中 存在返回索引值 不存在返回-1
     * @param data 数据源 可以是数组 字符串 数字
     * @param v 任意数据类型
     * @param f 默认为start:从集合开头查找, end:从集合末尾开始查找
     */
    contains(data: Array<any> | string | number, v: any, f?: string): number;
    /**
     *
     * @description 对简单数组去重  string[] number[]
     */
    uniqueToArray(arr: Array<string | number>): Array<string | number>;
    /**
     * @description 对多种类型或者混合数组去重 object[] array[] number[]
     * @example ["a",1,{name:1}] ["a", "b"] [1,2,3]
     */
    uniqueToSizzArray(arr: Array<any>): Array<any>;
    /**
     * @description 对字符串去重 string
     */
    uniqueToSttring(str: string): string;
    /**
     * @description 对数字去重 number
     */
    uniqueToNumber(num: number): number;
    /**
     * @description 一个集合去重
     * @param data 集合 Array|String|Number
     */
    unique(data: Array<any> | string | number): Array<any> | string | number;
    /**
     * @description 获取数组中重复的数据 只对简单数组查找
     * @example [1,2,3] ["1","2","3"]
     */
    getRepeat(arr: Array<string | number>): Array<string | number>;
    /**
     * @description 获取多个数组并集 只对简单数组查找
     * @example [1,2,3] ["1","2","3"]
     */
    getUnion(...args: Array<any>): Array<string | number>;
    /**
     * @description 获取多个数组的交集
     */
    getIntersect(...args: Array<any>): Array<any>;
    /**
     * @description 删除数组某个元素
     * @param arr 支持混合数组 number[] string[] object[]
     * @param item
     */
    remove(arr: Array<any>, item: any): Array<any>;
}
