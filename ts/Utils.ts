export class Utils {
    private _VERSION:string = "v1.0.0"
    private _INFO:object = {
        author:"肖秋均",
        version:this._VERSION,
        email: "1075095689@qq.com",
        blog:"www.xiaoqiujun.com"
    }
    constructor() {

    }
    /**
     * 获取版本号
     */
    public get VERSION():string {
        return this._VERSION;
    }
    public get INFO():object {
        return this._INFO;
    }
    /**
     * @description 是否字符串
     */
    public isString(v:any):boolean {
        return Object.prototype.toString.call(v) === "[object String]";
    }
    /**
     * @description 是否数字
     */
    public isNumber(v:any):boolean {
        return Object.prototype.toString.call(v) === "[object Number]";
    }
    /**
     * @description 是否boolean
     */
    public isBoolean(v:any):boolean {
        return Object.prototype.toString.call(v) === "[object Boolean]";
    }
    /**
     * @description 是否 Null
     */
    public isNull(v:any):boolean {
        return Object.prototype.toString.call(v) === "[object Null]";
    }
    /**
     * @description 是否undefined 
     */
    public isUndefined(v:any):boolean {
        return Object.prototype.toString.call(v) === "[object Undefined]";
    }
    /**
     * @description 判断是否数组
     */
    public isArray(v: any): boolean {
        return v.constructor === Array && Object.prototype.toString.call(v) === "[object Array]";
    }
    /**
     * @description 判断是否对象
     */
    public isObject(v: any): boolean {
        return Object.prototype.toString.call(v) === "[object Object]";
    }
    /**
     * @description 是否日期
     */
    public isDate(v:any):boolean {
        return Object.prototype.toString.call(v) === "[object Date]";
    }
    /**
     * @description 是否Function
     */
    public isFunction(v:any):boolean {
        return Object.prototype.toString.call(v) === "[object Function]";
    }
    /**
     * @description 是否Set
     */
    public isSet(v:any):boolean {
        return Object.prototype.toString.call(v) === "[object Set]";
    }
    /**
     * @description 是否Map
     */
    public isMap(v:any):boolean {
        return Object.prototype.toString.call(v) === "[object Map]";
    }
    /**
     * @description 是否Symbol
     */
    public isSymbol(v:any):boolean {
        return Object.prototype.toString.call(v) === "[object Symbol]";
    }
    /**
     * 
     * @description  是否Promise
     */
    public isPromise(v:any):boolean {
        return Object.prototype.toString.call(v) === "[object Promise]";
    }
    /**
     * @description 是否基本数据类型
     */
    public isPrimitive(v: any): boolean {
        return (typeof v === 'string' ||
            typeof v === 'number' ||
            typeof v === 'symbol' ||
            typeof v === 'boolean')
    }
    /**
     * @description 获取数据类型
     */
    public typeOf(v:any):string {
        return (typeof v);
    }
    /**
     * 属性是否存在
     */
    public hasOwn(obj:any, v:string|number):boolean {
        if(this.typeOf(obj) === "object") {
            return obj.hasOwnProperty(v);
        }
        return false;
    }
    /**
     * @description 对象深拷贝
     * @param obj 数据源
     * @param cache 一个缓存,防止拷贝死循环
     */
    public deepCopy(obj: any, cache:Array<any> = []): any {
        if (obj === null || typeof obj !== "object") return obj;
        let hit:any = cache.filter(function(c) {
            return c.original === obj;
        })[0];
        if(hit) return hit.copy;
        let copy:any = this.isArray(obj) ? []: {};
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
     * @description 格式化日期 
     * @param date 日期
     * @param format 默认是-
     */
    public formatDate(date: Date, format:string = "-"): string {
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
     * @description 转换成大写
     */
    public toUpperCase(str: string): string {
        let _arr: string[] = str.split("");
        let _ascii;
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
     * @description 转换成小写
     */
    public toLowerCase(str: string): string {
        let _arr: string[] = str.split("");
        let _ascii;
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
     * @description 生成随机数
     * @param lower 默认是 0
     * @param upper 默认是 1
     */
    public random(lower:number = 0, upper:number = 1):number {
        return Math.floor(Math.random() * (upper - lower)) + lower;
    }
    /**
     * @description 对字符串左边去空格
     */
    public trimLeft(str:string):string {
        let reg:RegExp = /^\s*/;
        return str.replace(reg, "");
    }
    /**
     * @description 对字符串右边去空格
     */
    public trimRight(str:string):string {
        let reg:RegExp = /\s*$/;
        return str.replace(reg, "");
    }
    /**
     * @description 对字符串两边去空格
     */
    public trim(str:string):string {
        let reg:RegExp = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        return str.replace(reg, "");
    }
    /**
     * @description 是否PC端
     */
    public isPC():boolean {
        let userAgentInfo:string = navigator.userAgent;
        let Agents:Array<string> = ["Android", "iPhone", "SymbianOS", "Windows Phone",
        "iPad", "iPod"];
        let flag:boolean = true;
        for(let i:number = 0; i < Agents.length; i++) {
            if(userAgentInfo.indexOf(Agents[i]) > 0) {
                flag = false;
                break;
            }
        }
        return flag;
    }
    /**
     * @description 获取浏览器类型
     */
    public getBrowerType():string {
        let types:string = "";
        let userAgentInfo:string = navigator.userAgent;
        let isOpera:boolean = userAgentInfo.indexOf("Opera") > -1;
        let isIE:boolean = userAgentInfo.indexOf("compatible") > -1 && userAgentInfo.indexOf("MSIE") > -1 && !isOpera;
        let isIE11:boolean = userAgentInfo.indexOf('Trident') > -1 && userAgentInfo.indexOf("rv:11.0") > -1;
        let isEdge:boolean = userAgentInfo.indexOf("Edge") > -1 && !isIE;
        let isFireFox:boolean = userAgentInfo.indexOf("Firefox") > -1;
        let isSafari:boolean = userAgentInfo.indexOf("Safari") > -1 && userAgentInfo.indexOf("Chrome") === -1;
        let isChrome:boolean = userAgentInfo.indexOf("Chrome") > -1 && userAgentInfo.indexOf("Safari") > -1;
        
        if(isIE) {
            let regIE:RegExp = new RegExp("MSIE (\\d+\\.\\d+);");
            regIE.test(userAgentInfo);
            let version:number = parseFloat(RegExp["$1"]);
            if(version == 7) types = "IE7";
            else if(version == 8) types = "IE8";
            else if(version == 9) types = "IE9";
            else if(version == 10) types = "IE10";
            else types = "[版本过低] IE7以下";
        }
        if (isIE11) types = "IE11";
        if (isEdge) types = "Edge";
        if (isFireFox) types = "FireFox";
        if (isOpera) types =  "Opera";
        if (isSafari) types = "Safari";
        if (isChrome) types = "Chrome";
        return types;
    }
    /**
     * @description 正则验证
     * @param types types列表
     *      phone tel card pwd postal qq email url ip number en cn html
     */
    public checkRegExp(str:string, types:string):any {
        let result:any = {
            status:false,
            data:null
        };
        switch(types) {
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
     * @description 获取身份证信息
     */
    public getCardIDInfo(cid:string):any {
        let city = {11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆"};
        
        let result:any = {
            status: false,
            msg: null,
            info:{}
        };
        let info:any = {};
        let check:any = this.checkRegExp(cid, "card");
        if(!check["status"]) {
            result["msg"] = "你输入的身份证长度或格式错误";
        }
    }

    /**
     * @description 查找某元素是否存在集合当中 存在返回索引值 不存在返回-1
     * @param data 数据源 可以是数组 字符串 数字
     * @param v 任意数据类型
     * @param f 默认为start:从集合开头查找, end:从集合末尾开始查找
     */
    public contains(data:Array<any>|string|number, v:any, f:string = "start"):number {
        let index:number = -1;
        let _data:any = null;
        let from:number = -1;
        if(f === "start") from = 0;
        else if(f === "end") from = 1;
        else return -1;
        if(this.isNumber(data)) _data = "" + data;
        else if(this.isArray(data) || this.isString(data))  _data = data;
        else return -1;
        if(!this.isPrimitive(data)) {
            let len:number = _data.length;
            for(let i:number = !from ? 0:len - 1; !from ? i < len : i > -1; !from ? i++ : i--) {
                if(index > -1) break;
                let item:any = _data[i];
                if(this.typeOf(item) === "object" && Object.keys(item).length === Object.keys(v).length) {
                    for(let key in item) {
                        index = -1;
                        if(this.hasOwn(item, key) && this.hasOwn(v, key)) {
                            if(item[key] !== v[key]) break;
                            index = i;
                        }else break;
                    }
                }else if(this.typeOf(item) !== "object") {
                    return !from ? _data.indexOf(v) : _data.lastIndexOf(v);
                }
            }
            return index;
        }else {
            return !from ? _data.indexOf(v) : _data.lastIndexOf(v);
        }
        return -1;
    }
    /**
     * 
     * @description 对简单数组去重  string[] number[]
     */
    public uniqueToArray(arr:Array<string|number>):Array<string|number> {
        arr = (arr as []).filter(Boolean);
        let newArr:Array<string|number> = [];
        let obj:any = {};
        for(let i:number = 0; i < arr.length; i++) {
            if(!obj[arr[i]]) {
                obj[arr[i]] = true;
                newArr.push(arr[i]);
            }
        }
        return newArr;
    }

    /**
     * @description 对多种类型或者混合数组去重 object[] array[] number[]
     * @example ["a",1,{name:1}] ["a", "b"] [1,2,3]
     */
    public uniqueToSizzArray(arr:Array<any>):Array<any> {
        arr = (arr as []).filter(Boolean);
        let newArr:Array<any> = [];
        let newObjArr:Array<any> = [];
        let obj:any = {};
        for(let i = 0; i < arr.length; i++) {
            let item:any = arr[i];
            if(this.typeOf(item) === "object") {
                if(this.contains(newObjArr, item) === -1) newObjArr.push(item);
            }else {
                if(!obj[item]) {
                    obj[item] = true;
                    newArr.push(item);
                }
            }
        }
        return newArr.concat(newObjArr);
    }

    /**
     * @description 对字符串去重 string
     */
    public uniqueToSttring(str:string):string {
        str = this.trim(str);   //先对其去空格
        let newStr:string = "";
        let obj:any = {};
        for(let i = 0; i < str.length; i++) {
            if(!obj[str[i]]) {
                newStr += str[i];
                obj[str[i]] = true;
            }
        }
        return newStr;
    }

    /**
     * @description 对数字去重 number
     */
    public uniqueToNumber(num:number):number {
        let str:string = "" + num;  //对数字转字符串
        return Number(this.uniqueToSttring(str));
    }

    /**
     * @description 一个集合去重
     * @param data 集合 Array|String|Number
     */
    public unique(data:Array<any>|string|number):Array<any>|string|number {
        let result:any = null;
        let types:number = -1; //1 数组 2 字符串 3 数字  0其他类型
        if(this.isArray(data)) types = 1;
        else if(this.isString(data)) types = 2;
        else if(this.isNumber(data)) types = 3;
        else types = 0;
        switch(types) {
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
     * @example [1,2,3] ["1","2","3"]
     */
    public getRepeat(arr:Array<string|number>):Array<string|number> {
        if(!arr.length) return [];
        let newArr:Array<string|number> = [];
        let obj:any = {};
        for(let i = 0; i < arr.length; i++) {
            if(!obj[arr[i]]) {
                obj[arr[i]] = true;
            }else {
                newArr.push(arr[i]);
            }
        }
        return newArr;
    }

    /**
     * @description 获取多个数组并集 只对简单数组查找
     * @example [1,2,3] ["1","2","3"]
     */
    public getUnion(...args:Array<any>):Array<string|number> {
        if(!args.length) return [];
        let newArr:Array<any> = [];
        return newArr.concat(...args);
    }

    /**
     * @description 获取多个数组的交集
     */
    public getIntersect(...args:Array<any>):Array<any> {
        if(!args.length) return [];
        let newArr:Array<any> = [];
        for(let i:number = 0; i < args.length; i++) {
            args[i] = this.unique(args[i]);
        }
        newArr = [].concat(...args);
        return this.getRepeat(newArr);
    }
    /**
     * @description 删除数组某个元素
     * @param arr 支持混合数组 number[] string[] object[]
     * @param item 
     */
    public remove(arr:Array<any>, item:any):Array<any> {
        return [];
    }
}