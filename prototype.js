/*!
 * Prototype.js , A JavaScript Support Library v0.0.1
 *
 * Released under the MIT license
 *
 * Github:https://github.com/tuanzisama/prototype.js
 * 
 * Date: Mon, 15 Apr 2019 12:54:58 GMT
 */


/* ============================== String ============================== */

// 把指定位置的字符替换成指定字符  switchword:替换的字符 from开始 to结束
// eg. 可以生成这样的字符串：138****8000
String.prototype.switch = function (switchword, from, to) {
    let these = this.toString();
    let retuenstr = "";
    for (let i = 0; i < these.length; i++) {
        if (i >= from && i <= to)
            retuenstr += switchword;
        else
            retuenstr += these[i];
    }
    return retuenstr;
}

// 文本切割 超出的用...代替
// @len : 切割长度 默认30
String.prototype.splits = function (len = 30) {
    if (this.length >= len) {
        return this.substring(0, len) + '...';
    } else {
        return this
    }
}
// 将2018-01-01 12:00:00 转换为Date对象
String.prototype.toDate = function () {
    var dateString = this.replace(/-/g, '/');
    return new Date(dateString)
}
// 首字母大写
String.prototype.tofirstUpperCase = function () {
    return this.toLowerCase().replace(/( |^)[a-z]/g, L => L.toUpperCase());
};


/* ============================== Number ============================== */
// 把数字转换成1k,2w等
Number.prototype.toShortCase = function () {
    let num = this;
    if (this >= 100000) {
        num = (Math.round(this / 100000 * 1000) / 100).toFixed(1) + 'w';
    } else if (num >= 10000) {
        num = Math.round(num / 10000 * 100) / 100 + 'w';
    } else {
        num = num;
    }
    return num;
}

// 对Date的扩展，将 Date 转化为指定格式的String
// 将Unix时间转换为传入的指定格式（使用及传入参数同：Date.prototype.Format）
Number.prototype.toNormalDate = function (fmt) {
    let UnixTime = this;
    if (UnixTime.toString().length == 13) {
        UnixTime = Math.round(UnixTime / 1000);
    } else if (UnixTime.toString().length !== 10) {
        return "--";
    }
    var date = new Date(UnixTime * 1000);

    var o = {
        "M+": date.getMonth() + 1, //月份 
        "d+": date.getDate(), //日 
        "h+": date.getHours(), //小时 
        "m+": date.getMinutes(), //分 
        "s+": date.getSeconds(), //秒 
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度 
        "S": date.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

/* ============================== Array ============================= */
// Array 指定元素的位置
Array.prototype.indexOf = function (val) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == val) return i;
    }
    return -1;
};
// Array 移除指定元素
Array.prototype.remove = function (val) {
    var index = this.indexOf(val);
    if (index > -1) {
        this.splice(index, 1);
    }
};
// Array中是否包含元素
Array.prototype.contains = function (needle) {
    for (let i in this) {
        if (this[i] == needle) return true;
    }
    return false;
}

// 移动元素到指定位置
// @index:待移动的数组下表
// @tindex:欲移动的数组下表
Array.prototype.move = function (index, tindex) {
    let that = this;
    if (index > tindex) {
        that.splice(tindex, 0, that[index]);
        that.splice(index + 1, 1)
    } else {
        that.splice(tindex + 1, 0, that[index]);
        that.splice(index, 1)
    }
    return that;
}
/*  深拷贝  */
Array.prototype.deepClone = function () {
    var result = new Array();
    for (var key in this) {
        if (this.hasOwnProperty(key)) {
            if (typeof this[key] === 'object') {
                result[key] = this[key].deepClone(); //递归复制
            } else {
                result[key] = this[key];
            }
        }
    }
    return result;
}


/* ============================== Object ============================== */
/*  深拷贝  */
Object.prototype.deepClone = function () {
    var result = new Object();
    for (var key in this) {
        if (this.hasOwnProperty(key)) {
            if (typeof this[key] === 'object') {
                result[key] = this[key].deepClone();
            } else {
                result[key] = this[key];
            }
        }
    }
    return result;
}
/*  让Object可以共用Array原型链上的forEach  */
Object.prototype.forEach = function (callback) {
    for (let i = 0; i < Object.values(this).length; i++) {
        if (typeof callback !== "function") {
            throw new TypeError(callback + ' is not a function');
        }
        var resultElement = Object.values(this)[i];
        callback(resultElement, i, this);
    }
}


/* ============================== Date ============================== */
// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符， 
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) 
// eq: yyyy-MM-dd hh:mm:ss.S ==> 2006-07-02 08:09:04.423 
Date.prototype.format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

Date.prototype.addDays = function (days) {
    return new Date(this.setDate(this.getDate() + days));
}


/* ============================== Math ============================== */
// 生成指定区间随机数
Math.rand = function (min, max) {
    let Range = max - min;
    let Rand = Math.random();
    let num = min + Math.round(Rand * Range); //四舍五入
    return num;
}

/*
 ** randomWord 产生任意长度随机字母数字组合
 ** randomFlag-是否任意长度 min-任意长度最小位[固定位数] max-任意长度最大位
 */
Math.randStr = function (max = 8) {
    var text = "";
    var possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < max; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
};



/* ============================== JSON ============================== */
// 验证JSON是否合法
JSON.validate = function (str) {
    if (typeof str == 'string') {
        try {
            var obj = JSON.parse(str);
            if (typeof obj == 'object' && obj) {
                return true;
            } else {
                return false;
            }

        } catch (e) {
            console.error('[JSON Validate]: This JSON is does not match! \n' + e);
            return false;
        }
    }
    console.warn('[JSON Validate]: It is not a string!')
}