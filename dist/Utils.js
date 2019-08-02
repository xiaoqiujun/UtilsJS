"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utils = /** @class */ (function () {
    function Utils() {
        this._VERSION = "v1.0.0";
        this._INFO = {
            author: "肖均",
            version: this._VERSION,
            email: "1075095689@qq.com",
            blog: "www.xiaoqiujun.com"
        };
    }
    Object.defineProperty(Utils.prototype, "VERSION", {
        /**
         * 获取版本号
         */
        get: function () {
            return this._VERSION;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Utils.prototype, "INFO", {
        get: function () {
            return this._INFO;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @description 是否字符串
     */
    Utils.prototype.isString = function (v) {
        return Object.prototype.toString.call(v) === "[object String]";
    };
    /**
     * @description 是否数字
     */
    Utils.prototype.isNumber = function (v) {
        return Object.prototype.toString.call(v) === "[object Number]";
    };
    /**
     * @description 是否boolean
     */
    Utils.prototype.isBoolean = function (v) {
        return Object.prototype.toString.call(v) === "[object Boolean]";
    };
    /**
     * @description 是否 Null
     */
    Utils.prototype.isNull = function (v) {
        return Object.prototype.toString.call(v) === "[object Null]";
    };
    /**
     * @description 是否undefined
     */
    Utils.prototype.isUndefined = function (v) {
        return Object.prototype.toString.call(v) === "[object Undefined]";
    };
    /**
     * @description 判断是否数组
     */
    Utils.prototype.isArray = function (v) {
        return v.constructor === Array && Object.prototype.toString.call(v) === "[object Array]";
    };
    /**
     * @description 判断是否对象
     */
    Utils.prototype.isObject = function (v) {
        return Object.prototype.toString.call(v) === "[object Object]";
    };
    /**
     * @description 是否日期
     */
    Utils.prototype.isDate = function (v) {
        return Object.prototype.toString.call(v) === "[object Date]";
    };
    /**
     * @description 是否Function
     */
    Utils.prototype.isFunction = function (v) {
        return Object.prototype.toString.call(v) === "[object Function]";
    };
    /**
     * @description 是否Set
     */
    Utils.prototype.isSet = function (v) {
        return Object.prototype.toString.call(v) === "[object Set]";
    };
    /**
     * @description 是否Map
     */
    Utils.prototype.isMap = function (v) {
        return Object.prototype.toString.call(v) === "[object Map]";
    };
    /**
     * @description 是否Symbol
     */
    Utils.prototype.isSymbol = function (v) {
        return Object.prototype.toString.call(v) === "[object Symbol]";
    };
    /**
     *
     * @description  是否Promise
     */
    Utils.prototype.isPromise = function (v) {
        return Object.prototype.toString.call(v) === "[object Promise]";
    };
    /**
     * @description 是否基本数据类型
     */
    Utils.prototype.isPrimitive = function (v) {
        return (typeof v === 'string' ||
            typeof v === 'number' ||
            typeof v === 'symbol' ||
            typeof v === 'boolean');
    };
    /**
     * @description 获取数据类型
     */
    Utils.prototype.typeOf = function (v) {
        return (typeof v);
    };
    /**
     * 属性是否存在
     */
    Utils.prototype.hasOwn = function (obj, v) {
        if (this.typeOf(obj) === "object") {
            return obj.hasOwnProperty(v);
        }
        return false;
    };
    /**
     * @description 对象深拷贝
     * @param obj 数据源
     * @param cache 一个缓存,防止拷贝死循环
     */
    Utils.prototype.deepCopy = function (obj, cache) {
        var _this = this;
        if (cache === void 0) { cache = []; }
        if (obj === null || typeof obj !== "object")
            return obj;
        var hit = cache.filter(function (c) {
            return c.original === obj;
        })[0];
        if (hit)
            return hit.copy;
        var copy = this.isArray(obj) ? [] : {};
        cache.push({
            original: obj,
            copy: copy
        });
        Object.keys(obj).forEach(function (key) {
            copy[key] = _this.deepCopy(obj[key], cache);
        });
        return copy;
    };
    /**
     * @description 格式化日期
     * @param date 日期
     * @param format 默认是-
     */
    Utils.prototype.formatDate = function (date, format) {
        if (format === void 0) { format = "-"; }
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var hour = date.getHours();
        var minute = date.getMinutes();
        var second = date.getSeconds();
        month = month < 10 ? ('0' + month) : month;
        day = day < 10 ? ('0' + day) : day;
        hour = hour < 10 ? ('0' + hour) : hour;
        minute = minute < 10 ? ('0' + minute) : minute;
        second = second < 10 ? ('0' + second) : second;
        return year + format + month + format + day + ' ' + hour + ':' + minute + ':' + second;
    };
    /**
     * @description 转换成大写
     */
    Utils.prototype.toUpperCase = function (str) {
        var _arr = str.split("");
        var _ascii;
        var _max = "z".charCodeAt(0);
        var _min = "a".charCodeAt(0);
        for (var i = 0; i < _arr.length; i++) {
            _ascii = _arr[i].charCodeAt(0);
            if (_max >= _ascii && _min <= _ascii) {
                _arr[i] = String.fromCharCode(_ascii - 32);
            }
        }
        return _arr.join("");
    };
    /**
     * @description 转换成小写
     */
    Utils.prototype.toLowerCase = function (str) {
        var _arr = str.split("");
        var _ascii;
        var _max = "Z".charCodeAt(0);
        var _min = "A".charCodeAt(0);
        for (var i = 0; i < _arr.length; i++) {
            _ascii = _arr[i].charCodeAt(0);
            if (_max >= _ascii && _min <= _ascii) {
                _arr[i] = String.fromCharCode(_ascii + 32);
            }
        }
        return _arr.join("");
    };
    /**
     * @description 生成随机数
     * @param lower 默认是 0
     * @param upper 默认是 1
     */
    Utils.prototype.random = function (lower, upper) {
        if (lower === void 0) { lower = 0; }
        if (upper === void 0) { upper = 1; }
        return Math.floor(Math.random() * (upper - lower)) + lower;
    };
    /**
     * @description 对字符串左边去空格
     */
    Utils.prototype.trimLeft = function (str) {
        var reg = /^\s*/;
        return str.replace(reg, "");
    };
    /**
     * @description 对字符串右边去空格
     */
    Utils.prototype.trimRight = function (str) {
        var reg = /\s*$/;
        return str.replace(reg, "");
    };
    /**
     * @description 对字符串两边去空格
     */
    Utils.prototype.trim = function (str) {
        var reg = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        return str.replace(reg, "");
    };
    /**
     * @description 是否PC端
     */
    Utils.prototype.isPC = function () {
        var userAgentInfo = navigator.userAgent;
        var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone",
            "iPad", "iPod"];
        var flag = true;
        for (var i = 0; i < Agents.length; i++) {
            if (userAgentInfo.indexOf(Agents[i]) > 0) {
                flag = false;
                break;
            }
        }
        return flag;
    };
    /**
     * @description 获取浏览器类型
     */
    Utils.prototype.getBrowerType = function () {
        var types = "";
        var userAgentInfo = navigator.userAgent;
        var isOpera = userAgentInfo.indexOf("Opera") > -1;
        var isIE = userAgentInfo.indexOf("compatible") > -1 && userAgentInfo.indexOf("MSIE") > -1 && !isOpera;
        var isIE11 = userAgentInfo.indexOf('Trident') > -1 && userAgentInfo.indexOf("rv:11.0") > -1;
        var isEdge = userAgentInfo.indexOf("Edge") > -1 && !isIE;
        var isFireFox = userAgentInfo.indexOf("Firefox") > -1;
        var isSafari = userAgentInfo.indexOf("Safari") > -1 && userAgentInfo.indexOf("Chrome") === -1;
        var isChrome = userAgentInfo.indexOf("Chrome") > -1 && userAgentInfo.indexOf("Safari") > -1;
        if (isIE) {
            var regIE = new RegExp("MSIE (\\d+\\.\\d+);");
            regIE.test(userAgentInfo);
            var version = parseFloat(RegExp["$1"]);
            if (version == 7)
                types = "IE7";
            else if (version == 8)
                types = "IE8";
            else if (version == 9)
                types = "IE9";
            else if (version == 10)
                types = "IE10";
            else
                types = "[版本过低] IE7以下";
        }
        if (isIE11)
            types = "IE11";
        if (isEdge)
            types = "Edge";
        if (isFireFox)
            types = "FireFox";
        if (isOpera)
            types = "Opera";
        if (isSafari)
            types = "Safari";
        if (isChrome)
            types = "Chrome";
        return types;
    };
    /**
     * @description 正则验证
     * @param types types列表
     *      phone tel card pwd postal qq email url ip number en cn html
     */
    Utils.prototype.checkRegExp = function (str, types) {
        var result = {
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
    };
    /**
     * @description 获取身份证信息
     */
    Utils.prototype.getCardIDInfo = function (cid) {
        var city = { 11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江", 31: "上海", 32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南", 42: "湖北", 43: "湖南", 44: "广东", 45: "广西", 46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏", 61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏", 65: "新疆" };
        var result = {
            status: false,
            msg: null,
            info: {}
        };
        var info = {};
        var check = this.checkRegExp(cid, "card");
        if (!check["status"]) {
            result["msg"] = "你输入的身份证长度或格式错误";
        }
    };
    /**
     * @description 查找某元素是否存在集合当中 存在返回索引值 不存在返回-1
     * @param data 数据源 可以是数组 字符串 数字
     * @param v 任意数据类型
     * @param f 默认为start:从集合开头查找, end:从集合末尾开始查找
     */
    Utils.prototype.contains = function (data, v, f) {
        if (f === void 0) { f = "start"; }
        var index = -1;
        var _data = null;
        var from = -1;
        if (f === "start")
            from = 0;
        else if (f === "end")
            from = 1;
        else
            return -1;
        if (this.isNumber(data))
            _data = "" + data;
        else if (this.isArray(data) || this.isString(data))
            _data = data;
        else
            return -1;
        if (!this.isPrimitive(data)) {
            var len = _data.length;
            for (var i = !from ? 0 : len - 1; !from ? i < len : i > -1; !from ? i++ : i--) {
                if (index > -1)
                    break;
                var item = _data[i];
                if (this.typeOf(item) === "object" && Object.keys(item).length === Object.keys(v).length) {
                    for (var key in item) {
                        index = -1;
                        if (this.hasOwn(item, key) && this.hasOwn(v, key)) {
                            if (item[key] !== v[key])
                                break;
                            index = i;
                        }
                        else
                            break;
                    }
                }
                else if (this.typeOf(item) !== "object") {
                    return !from ? _data.indexOf(v) : _data.lastIndexOf(v);
                }
            }
            return index;
        }
        else {
            return !from ? _data.indexOf(v) : _data.lastIndexOf(v);
        }
        return -1;
    };
    /**
     *
     * @description 对简单数组去重  string[] number[]
     */
    Utils.prototype.uniqueToArray = function (arr) {
        arr = arr.filter(Boolean);
        var newArr = [];
        var obj = {};
        for (var i = 0; i < arr.length; i++) {
            if (!obj[arr[i]]) {
                obj[arr[i]] = true;
                newArr.push(arr[i]);
            }
        }
        return newArr;
    };
    /**
     * @description 对多种类型或者混合数组去重 object[] array[] number[]
     * @example ["a",1,{name:1}] ["a", "b"] [1,2,3]
     */
    Utils.prototype.uniqueToSizzArray = function (arr) {
        arr = arr.filter(Boolean);
        var newArr = [];
        var newObjArr = [];
        var obj = {};
        for (var i = 0; i < arr.length; i++) {
            var item = arr[i];
            if (this.typeOf(item) === "object") {
                if (this.contains(newObjArr, item) === -1)
                    newObjArr.push(item);
            }
            else {
                if (!obj[item]) {
                    obj[item] = true;
                    newArr.push(item);
                }
            }
        }
        return newArr.concat(newObjArr);
    };
    /**
     * @description 对字符串去重 string
     */
    Utils.prototype.uniqueToSttring = function (str) {
        str = this.trim(str); //先对其去空格
        var newStr = "";
        var obj = {};
        for (var i = 0; i < str.length; i++) {
            if (!obj[str[i]]) {
                newStr += str[i];
                obj[str[i]] = true;
            }
        }
        return newStr;
    };
    /**
     * @description 对数字去重 number
     */
    Utils.prototype.uniqueToNumber = function (num) {
        var str = "" + num; //对数字转字符串
        return Number(this.uniqueToSttring(str));
    };
    /**
     * @description 一个集合去重
     * @param data 集合 Array|String|Number
     */
    Utils.prototype.unique = function (data) {
        var result = null;
        var types = -1; //1 数组 2 字符串 3 数字  0其他类型
        if (this.isArray(data))
            types = 1;
        else if (this.isString(data))
            types = 2;
        else if (this.isNumber(data))
            types = 3;
        else
            types = 0;
        switch (types) {
            case 1:
                result = this.uniqueToSizzArray(data);
                break;
            case 2:
                result = this.uniqueToSttring(data);
                break;
            case 3:
                result = this.uniqueToNumber(data);
                break;
            default:
                result = null;
                break;
        }
        return result;
    };
    /**
     * @description 获取数组中重复的数据 只对简单数组查找
     * @example [1,2,3] ["1","2","3"]
     */
    Utils.prototype.getRepeat = function (arr) {
        if (!arr.length)
            return [];
        var newArr = [];
        var obj = {};
        for (var i = 0; i < arr.length; i++) {
            if (!obj[arr[i]]) {
                obj[arr[i]] = true;
            }
            else {
                newArr.push(arr[i]);
            }
        }
        return newArr;
    };
    /**
     * @description 获取多个数组并集 只对简单数组查找
     * @example [1,2,3] ["1","2","3"]
     */
    Utils.prototype.getUnion = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!args.length)
            return [];
        var newArr = [];
        return newArr.concat.apply(newArr, args);
    };
    /**
     * @description 获取多个数组的交集
     */
    Utils.prototype.getIntersect = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!args.length)
            return [];
        var newArr = [];
        for (var i = 0; i < args.length; i++) {
            args[i] = this.unique(args[i]);
        }
        newArr = [].concat.apply([], args);
        return this.getRepeat(newArr);
    };
    /**
     * @description 删除数组某个元素
     * @param arr 支持混合数组 number[] string[] object[]
     * @param item
     */
    Utils.prototype.remove = function (arr, item) {
        return [];
    };
    return Utils;
}());
exports.Utils = Utils;
