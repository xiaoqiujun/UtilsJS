/**
 * @description 封装JS常用方法工具类
 * @version v1.0.0
 * @author XiaoQiuJun
 * @github https://github.com/xiaoqiujun
 * @Update 2019-6-15 22:43:26
 */
export class Utils {
    private _VERSION: string = "v1.0.0"
    private _INFO: object = {
        author: "XiaoQiuJun",
        version: this._VERSION,
        email: "1075095689@qq.com",
        github: "https://github.com/xiaoqiujun",
        blog: "https://www.xiaoqiujun.com | https://www.idevst.com"
    }
    constructor() {

    }
    /**
     * @description 获取版本号
     */
    public get VERSION(): string {
        return this._VERSION;
    }
    public get INFO(): object {
        return this._INFO;
    }
    /**
     * @description 获取数据类型
     * @param v any 任意类型
     * @return string 返回一个字符串
     * @example typeOf("") => "string" typeOf(1) => "number"
     */
    public typeOf(v: any): string {
        return (typeof v);
    }
    /**
     * @description 是否字符串
     * @param v any 任意类型
     * @return boolean 返回一个boolean值
     * @example isString([1]) => false isString("") => true
     */
    public isString(v: any): boolean {
        return Object.prototype.toString.call(v) === "[object String]";
    }
    /**
     * @description 是否数字
     * @param v any 任意类型
     * @return boolean 返回一个boolean值
     * @example isNumber("") => false isNumber(1) => true
     */
    public isNumber(v: any): boolean {
        return Object.prototype.toString.call(v) === "[object Number]";
    }
    /**
     * @description 是否boolean
     * @param v any 任意类型
     * @return boolean 返回一个boolean值
     * @example isBoolean("") => false isBoolean(false) => true
     */
    public isBoolean(v: any): boolean {
        return Object.prototype.toString.call(v) === "[object Boolean]";
    }
    /**
     * @description 是否 Null
     * @param v any 任意类型
     * @return boolean 返回一个boolean值
     * @example isNull("") => false isNull(null) => true
     */
    public isNull(v: any): boolean {
        return Object.prototype.toString.call(v) === "[object Null]";
    }
    /**
     * @description 是否undefined 
     * @param v any 任意类型
     * @return boolean 返回一个boolean值
     * @example isUndefined("") => false isUndefined(undefined) => true
     */
    public isUndefined(v: any): boolean {
        return Object.prototype.toString.call(v) === "[object Undefined]";
    }
    /**
     * @description 判断是否数组
     * @param v any 任意类型
     * @return boolean 返回一个boolean值
     * @example isArray("") => false isArray([]) => true
     */
    public isArray(v: any): boolean {
        return v.constructor === Array && Object.prototype.toString.call(v) === "[object Array]";
    }
    /**
     * @description 判断是否Object对象
     * @param v any 任意类型
     * @return boolean 返回一个boolean值
     * @example isObject([]) => false isObject({}) => true
     */
    public isObject(v: any): boolean {
        return Object.prototype.toString.call(v) === "[object Object]";
    }
    /**
     * @description 是否日期
     * @param v any 任意类型
     * @return boolean 返回一个boolean值
     * @example isDate(new Date()) => true;
     */
    public isDate(v: any): boolean {
        return Object.prototype.toString.call(v) === "[object Date]";
    }
    /**
     * @description 是否Function
     * @param v any 任意类型
     * @return boolean 返回一个boolean值
     * @example isFunction(function(){}) => true isFunction(Date) => true
     */
    public isFunction(v: any): boolean {
        return Object.prototype.toString.call(v) === "[object Function]";
    }
    /**
     * @description 是否Set
     * @param v any 任意类型
     * @return boolean 返回一个boolean值
     * @example isSet(new Set()) => true
     */
    public isSet(v: any): boolean {
        return Object.prototype.toString.call(v) === "[object Set]";
    }
    /**
     * @description 是否Map
     * @param v any 任意类型
     * @return boolean 返回一个boolean值
     * @example isMap(new Map()) => true
     */
    public isMap(v: any): boolean {
        return Object.prototype.toString.call(v) === "[object Map]";
    }
    /**
     * @description 是否Symbol
     * @param v any 任意类型
     * @return boolean 返回一个boolean值
     * @example isSymbol(Symbol()) => true
     */
    public isSymbol(v: any): boolean {
        return Object.prototype.toString.call(v) === "[object Symbol]";
    }
    /**
     * 
     * @description  是否Promise
     * @param v any 任意类型
     * @return boolean 返回一个boolean值
     * @example isPromise(Promise.resolve()) => true
     */
    public isPromise(v: any): boolean {
        return Object.prototype.toString.call(v) === "[object Promise]";
    }
    /**
     * @description 是否基本数据类型
     * @param v any 任意类型
     * @return boolean 返回一个boolean值
     * @example isPrimitive(1) => true isPrimitive({}) => false
     */
    public isPrimitive(v: any): boolean {
        return (this.typeOf(v) === 'string' ||
            this.typeOf(v) === 'number' ||
            this.typeOf(v) === 'symbol' ||
            this.typeOf(v) === 'boolean')
    }
    /**
     * @description 属性是否存在
     * @param obj any 引用数据类型 Array Object
     * @param v 通常是一个字符串类型
     * @return boolean 返回一个boolean值
     * @example hasOwn({age:12}, "age") => true
     */
    public hasOwn(obj: any, v: string | number): boolean {
        if (this.typeOf(obj) === "object") {
            return obj.hasOwnProperty(v);
        }
        return false;
    }
    /**
     * @description 对象深拷贝
     * @param obj any 引用数据类型 Array Object
     * @param cache Array<any> 数组 一个缓存,防止拷贝死循环 默认[]
     * @return any 返回一个任意类型
     * @example deepCopy({age:12}, [])
     */
    public deepCopy(obj: any, cache: Array<any> = []): any {
        if (obj === null || typeof obj !== "object") return obj;
        let hit: any = cache.filter(function (c) {
            return c.original === obj;
        })[0];
        if (hit) return hit.copy;
        let copy: any = this.isArray(obj) ? [] : {};
        cache.push({
            original: obj,
            copy
        })
        Object.keys(obj).forEach(key => {
            copy[key] = this.deepCopy(obj[key], cache);
        })
        return copy;
    }
    /**
     * @description 简单的日期格式化 
     * @param date Data 日期
     * @param format string 默认-
     * @return string 返回一个字符串类型
     * @example formatData(new Date()) => 2019-6-12 13:43:23
     */
    public formatDate(date: Date, format: string = "-"): string {
        let year: number | string = date.getFullYear();
        let month: number | string = date.getMonth() + 1;
        let day: number | string = date.getDate();
        let hour: number | string = date.getHours();
        let minute: number | string = date.getMinutes();
        let second: number | string = date.getSeconds();
        month = month < 10 ? ('0' + month) : month;
        day = day < 10 ? ('0' + day) : day;
        hour = hour < 10 ? ('0' + hour) : hour;
        minute = minute < 10 ? ('0' + minute) : minute;
        second = second < 10 ? ('0' + second) : second;
        return year + format + month + format + day + ' ' + hour + ':' + minute + ':' + second;
    }
    /**
     * @description 小写转换成大写
     * @param str string 接收一个字符串类型
     * @return string 返回一个字符串类型
     * @example toUpperCase("abc") => ABC
     */
    public toUpperCase(str: string): string {
        let _arr: string[] = str.split("");
        let _ascii: number;
        let _max: number = "z".charCodeAt(0);
        let _min: number = "a".charCodeAt(0);
        for (let i: number = 0; i < _arr.length; i++) {
            _ascii = _arr[i].charCodeAt(0);
            if (_max >= _ascii && _min <= _ascii) {
                _arr[i] = String.fromCharCode(_ascii - 32);
            }
        }
        return _arr.join("");
    }
    /**
     * @description 大写转换成小写
     * @param str string 接收一个字符串类型
     * @return string 返回一个字符串类型
     * @example toUpperCase("ABC") => abc
     */
    public toLowerCase(str: string): string {
        let _arr: string[] = str.split("");
        let _ascii: number;
        let _max: number = "Z".charCodeAt(0);
        let _min: number = "A".charCodeAt(0);
        for (let i: number = 0; i < _arr.length; i++) {
            _ascii = _arr[i].charCodeAt(0);
            if (_max >= _ascii && _min <= _ascii) {
                _arr[i] = String.fromCharCode(_ascii + 32);
            }
        }
        return _arr.join("");
    }
    /**
     * @description 生成简单随机数
     * @param lower number 默认是 0
     * @param upper number 默认是 1
     * @return number 返回一个number类型
     * @example random(1, 5) => 3
     */
    public random(lower: number = 0, upper: number = 1): number {
        return Math.floor(Math.random() * (upper - lower)) + lower;
    }
    /**
     * @description 对字符串左边去空格
     * @param str string 一个字符串类型
     * @return string 返回一个字符串类型
     * @example trimLeft("  abc  ") => "abc  "
     */
    public trimLeft(str: string): string {
        let reg: RegExp = /^\s*/;
        return str.replace(reg, "");
    }
    /**
     * @description 对字符串右边去空格
     * @param str string 一个字符串类型
     * @return string 返回一个字符串类型
     * @example trimRight("  abc  ") => "  abc"
     */
    public trimRight(str: string): string {
        let reg: RegExp = /\s*$/;
        return str.replace(reg, "");
    }
    /**
     * @description 对字符串两边去空格
     * @param str string 一个字符串类型
     * @return string 返回一个字符串类型
     * @example trim("  abc  ") => "abc"
     */
    public trim(str: string): string {
        let reg: RegExp = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        return str.replace(reg, "");
    }
    /**
     * @description 是否PC端
     * @return boolean 返回一个boolean值
     * @example isPC() => false|true
     */
    public isPC(): boolean {
        let userAgentInfo: string = navigator.userAgent;
        let Agents: Array<string> = ["Android", "iPhone", "SymbianOS", "Windows Phone",
            "iPad", "iPod"];
        let flag: boolean = true;
        for (let i: number = 0; i < Agents.length; i++) {
            if (userAgentInfo.indexOf(Agents[i]) > 0) {
                flag = false;
                break;
            }
        }
        return flag;
    }
    /**
     * @description 获取浏览器类型
     * @return string 返回一个字符串类型
     * @example getBrowerType() => IE11|FireFox|Opera|Edge|Safari|Chrome
     */
    public getBrowerType(): string {
        let types: string = "";
        let userAgentInfo: string = navigator.userAgent;
        let isOpera: boolean = userAgentInfo.indexOf("Opera") > -1;
        let isIE: boolean = userAgentInfo.indexOf("compatible") > -1 && userAgentInfo.indexOf("MSIE") > -1 && !isOpera;
        let isIE11: boolean = userAgentInfo.indexOf('Trident') > -1 && userAgentInfo.indexOf("rv:11.0") > -1;
        let isEdge: boolean = userAgentInfo.indexOf("Edge") > -1 && !isIE;
        let isFireFox: boolean = userAgentInfo.indexOf("Firefox") > -1;
        let isSafari: boolean = userAgentInfo.indexOf("Safari") > -1 && userAgentInfo.indexOf("Chrome") === -1;
        let isChrome: boolean = userAgentInfo.indexOf("Chrome") > -1 && userAgentInfo.indexOf("Safari") > -1;

        if (isIE) {
            let regIE: RegExp = new RegExp("MSIE (\\d+\\.\\d+);");
            regIE.test(userAgentInfo);
            let version: number = parseFloat(RegExp["$1"]);
            if (version == 7) types = "IE7";
            else if (version == 8) types = "IE8";
            else if (version == 9) types = "IE9";
            else if (version == 10) types = "IE10";
            else types = "[版本过低] IE7以下";
        }
        if (isIE11) types = "IE11";
        if (isEdge) types = "Edge";
        if (isFireFox) types = "FireFox";
        if (isOpera) types = "Opera";
        if (isSafari) types = "Safari";
        if (isChrome) types = "Chrome";
        return types;
    }
    /**
     * @description 正则验证
     * @param str string 将要被验证的数据
     * @param types string 接收一个字符串 types列表如下
     *    phone|tel|card|pwd|postal|qq|email|url|ip|number|en|cn|html
     * @return any 返回一个object对象 {status:true, data:123456}
     * @example checkRegExp("123456", "number") => {status:true, data:123456}
     */
    public checkRegExp(str: string, types: string): any {
        let result: any = {
            status: false,
            data: null
        };
        switch (types) {
            case "phone":
                result["status"] = /^1[3|4|5|6|7|8|9][0-9]{9}$/.test(str);
                result["data"] = result["status"] ? str : "输入的手机号码有误";
                break;
            case "tel":
                result["status"] = /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
                result["data"] = result["status"] ? str : "输入的座机号码有误";
                break;
            case "card":
                result["status"] = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(str);
                result["data"] = result["status"] ? str : "输入的身份证号码有误";
                break;
            case "pwd":
                result["status"] = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(str);
                result["data"] = result["status"] ? str : "密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线";
                break;
            case "postal":
                result["status"] = /[1-9]\d{5}(?!\d)/.test(str);
                result["data"] = result["status"] ? str : "输入的邮政编码有误";
                break;
            case "qq":
                result["status"] = /^[1-9][0-9]{4,9}$/.test(str);
                result["data"] = result["status"] ? str : "输入的QQ号码有误";
                break;
            case "email":
                result["status"] = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
                result["data"] = result["status"] ? str : "输入的邮箱有误";
                break;
            case "url":
                result["status"] = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(str);
                result["data"] = result["status"] ? str : "输入的URL有误";
                break;
            case "ip":
                result["status"] = /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(str);
                result["data"] = result["status"] ? str : "输入的IP地址有误";
                break;
            case "number":
                result["status"] = /^[0-9]$/.test(str);
                result["data"] = result["status"] ? str : "输入的数字有误";
                break;
            case "en":
                result["status"] = /^[a-zA-Z]+$/.test(str);
                result["data"] = result["status"] ? str : "输入的英文有误";
                break;
            case "cn":
                result["status"] = /^[\u4E00-\u9FA5]+$/.test(str);
                result["data"] = result["status"] ? str : "输入的中文有误";
                break;
            case "html":
                result["status"] = /<("[^"]*"|'[^']*'|[^'">])*>/.test(str);
                result["data"] = result["status"] ? str : "输入的HTML标签有误";
                break;
            default:
                result["status"] = false;
                result["data"] = "传入的参数有误";
                break;
        }
        return result;
    }
    /**
     * @description 查找某元素是否存在集合当中 存在返回索引值 不存在返回-1
     * @param data array|string|number 可以是数组 字符串 数字类型
     * @param v any 任意数据类型
     * @param f string 默认为start:从集合开头查找, end:从集合末尾开始查找
     * @return number 返回该元素的索引值 -1为没找到或出错
     * @example contains([1,2,3], 3) => 2
     */
    public contains(data: Array<any> | string | number, v: any, f: string = "start"): number {
        let index: number = -1;
        let _data: any = null;
        let from: number = -1;
        if (f === "start") from = 0;
        else if (f === "end") from = 1;
        else return -1;
        if (this.isNumber(data)) _data = "" + data;
        else if (this.isArray(data) || this.isString(data)) _data = data;
        else return -1;
        if (!this.isPrimitive(data)) {
            let len: number = _data.length;
            for (let i: number = !from ? 0 : len - 1; !from ? i < len : i > -1; !from ? i++ : i--) {
                if (index > -1) break;
                let item: any = _data[i];
                if (this.typeOf(item) === "object" && Object.keys(item).length === Object.keys(v).length) {
                    for (let key in item) {
                        index = -1;
                        if (this.hasOwn(item, key) && this.hasOwn(v, key)) {
                            if (item[key] !== v[key]) break;
                            index = i;
                        } else break;
                    }
                } else if (this.typeOf(item) !== "object") {
                    return !from ? _data.indexOf(v) : _data.lastIndexOf(v);
                }
            }
            return index;
        } else {
            return !from ? _data.indexOf(v) : _data.lastIndexOf(v);
        }
        return -1;
    }
    /**
     * @description 对简单数组去重  
     * @param arr array 可以是string[] number[]
     * @return array 返回一个array类型
     * @example uniqueToArray([1,2,3,3,2]) => [1,2,3]
     */
    public uniqueToArray(arr: Array<string | number>): Array<string | number> {
        arr = (arr as []).filter(Boolean);
        let newArr: Array<string | number> = [];
        let obj: any = {};
        for (let i: number = 0; i < arr.length; i++) {
            if (!obj[arr[i]]) {
                obj[arr[i]] = true;
                newArr.push(arr[i]);
            }
        }
        return newArr;
    }

    /**
     * @description 对多种类型或者混合数组去重
     * @param arr arrya 可以是object[] array[] number[]
     * @return array 返回一个array类型
     * @example  uniqueToSizzArray([{age:12},{age:13}]) uniqueToSizzArray(["a","b","b"])
     */
    public uniqueToSizzArray(arr: Array<any>): Array<any> {
        arr = (arr as []).filter(Boolean);
        let newArr: Array<any> = [];
        let newObjArr: Array<any> = [];
        let obj: any = {};
        for (let i = 0; i < arr.length; i++) {
            let item: any = arr[i];
            if (this.typeOf(item) === "object") {
                if (this.contains(newObjArr, item) === -1) newObjArr.push(item);
            } else {
                if (!obj[item]) {
                    obj[item] = true;
                    newArr.push(item);
                }
            }
        }
        return newArr.concat(newObjArr);
    }

    /**
     * @description 对字符串去重
     * @param str string 接收一个字符串类型
     * @return string 返回一个字符串类型
     * @example uniqueToSttring("abcbbbc") => abc
     */
    public uniqueToSttring(str: string): string {
        str = this.trim(str);   //先对其去空格
        let newStr: string = "";
        let obj: any = {};
        for (let i = 0; i < str.length; i++) {
            if (!obj[str[i]]) {
                newStr += str[i];
                obj[str[i]] = true;
            }
        }
        return newStr;
    }

    /**
     * @description 对数字去重
     * @param num number 接收一个数字类型
     * @return number 返回一个数字类型
     * @example uniqueToNumber(111123) => 123
     */
    public uniqueToNumber(num: number): number {
        let str: string = "" + num;  //对数字转字符串
        return Number(this.uniqueToSttring(str));
    }

    /**
     * @description 对一个集合去重
     * @param data array|string|number 
     * @return 返回 array|string|number
     * @example unique([1,2,3,3]) => [1,2,3]
     */
    public unique(data: Array<any> | string | number): Array<any> | string | number {
        let result: any = null;
        let types: number = -1; //1 数组 2 字符串 3 数字  0其他类型
        if (this.isArray(data)) types = 1;
        else if (this.isString(data)) types = 2;
        else if (this.isNumber(data)) types = 3;
        else types = 0;
        switch (types) {
            case 1:
                result = this.uniqueToSizzArray((data as Array<any>));
                break;
            case 2:
                result = this.uniqueToSttring((data as string));
                break;
            case 3:
                result = this.uniqueToNumber((data as number));
                break;
            default:
                result = null;
                break;
        }
        return result;
    }

    /**
     * @description 获取数组中重复的数据 只对简单数组查找
     * @param arr array 接收一个数组类型
     * @return array 返回一个数组类型
     * @example getSame([1,2,3,3,4]) => [3]
     */
    public getSame(arr: Array<string | number>): Array<string | number> {
        if (!arr.length) return [];
        let newArr: Array<string | number> = [];
        let obj: any = {};
        for (let i = 0; i < arr.length; i++) {
            if (!obj[arr[i]]) {
                obj[arr[i]] = true;
            } else {
                newArr.push(arr[i]);
            }
        }
        return newArr;
    }
    /**
     * @description 获取多个数组并集 只对简单数组查找
     * @param args array ...args指的是可以接收多个参数
     * @return array 返回一个数组类型
     * @example getUnion([1,2,2,3], [4,5,6]) => [1,2,2,3,4,5,6]
     */
    public getUnion(...args: Array<any>): Array<string | number> {
        if (!args.length) return [];
        let newArr: Array<any> = [];
        return newArr.concat(...args);
    }

    /**
     * @description 获取多个数组的交集
     * @param args array ...args指的是可以接收多个参数
     * @return array 返回一个数组类型
     * @example getIntersect([1,2,2,3,4], [4,5,6]) => [4]
     */
    public getIntersect(...args: Array<any>): Array<any> {
        if (!args.length) return [];
        let newArr: Array<any> = [];
        for (let i: number = 0; i < args.length; i++) {
            args[i] = this.unique(args[i]);
        }
        newArr = [].concat(...args);
        return this.getSame(newArr);
    }
    /**
     * @description 获取多个数组的补集
     * @param args array ...args指的是可以接收多个参数
     * @return array 返回一个数组类型 包含两个arr[0] => 补集 arr[1] => 交集
     * @example getComplement([1,2,2,3,4], [4,5,6]) => [[1,2,3,5,6], [4]]
     */
    public getComplement(...args: Array<any>): Array<Array<string | number>> {
        if (!args.length) return [];
        let newArr: Array<any> = [];
        let intersect: Array<any> = [];
        let same: Array<string | number> = this.getSame(newArr) || [];
        for (let i: number = 0; i < args.length; i++) {
            args[i] = this.unique(args[i]);
        }
        newArr = [].concat(...args);
        for (let i = 0; i < same.length; i++) {
            if (this.contains(newArr, same[i]) > -1) {
                let index: number = this.contains(newArr, same[i]);
                newArr.splice(index, 1);
                intersect.push(same[i]);
            }
        }
        return [newArr, intersect];
    }
    /**
     * @description 删除数组某个元素
     * @param arr array 支持混合数组 number[] string[] object[]
     * @param item any 类型类型
     * @return array 返回一个数组类型
     * @example remove([1,2,3,4], 3) => [1,2,4]
     */
    public remove(arr: Array<any>, item: any): Array<any> {
        return [];
    }
}