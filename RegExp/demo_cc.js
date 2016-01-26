function f(str){
    var res = str.match(/(([01]+?)[01]*?)\1+\2$/);
    return {
        src: str,
        tail: res[0],
        sub: res[1],
        len: res[0].length / res[1].length
    }
}
console.log(f('11111111101001001001001001'));



var str = "apple1 banana apple2";
var reg = /apple\w/g;

console.log(reg.exec(str));
console.log(reg.exec(str));
console.log(str.match(reg));



var str = "apple1 banana \napple2";
var reg = /^apple\w/gm;

console.log(reg.exec(str));
console.log(reg.exec(str));
console.log(str.match(reg));



var re = /o/g; //全局匹配
console.log(re.lastIndex); //0,lastIndex属性的初始值为0
console.log(re.test("foo")); //true,匹配了第二个字符
console.log(re.lastIndex); //2,lastIndex属性的值被设置为2,也就是第二个字符之后
console.log(re.test("foo")); //true,从第二个字符(lastIndex属性的值)之后开始匹配,匹配了第三个字符
console.log(re.lastIndex); //3,lastIndex属性的值被设置为2,也就是字符串的末尾
console.log(re.test("foo")); //false,已经没有字符了,匹配失败.
console.log(re.lastIndex); //0,lastIndex属性的值被重置为0
console.log(re.test("foo")); //true,又一次重新开始匹配
console.log(re.lastIndex); //2,一直循环下去
re.lastIndex = 3; //手动修改为3
console.log(re.test("foo")); //false,从第三个字符后开始匹配,所以匹配失败



var re = /./y; //粘滞匹配
console.log(re.test("foo")); //true
console.log(re.lastIndex); //1
console.log(re.test("foo")); //true
console.log(re.lastIndex); //2
console.log(re.test("foo")); //true
console.log(re.lastIndex); //3
console.log(re.test("foo")); //false
console.log(re.lastIndex); //3,匹配失败后,lastIndex属性没有归零
console.log(re.test("foo")); //false,所以匹配会一直失败下去
re.lastIndex = 0; //同样可以手动修改lastIndex属性的值
console.log(re.test("foo")); //true



var re = /^./y;
console.log("lastIndex : ",re.lastIndex," result : ",re.exec("foo"));
console.log("lastIndex : ",re.lastIndex," result : ",re.exec("foo"));
console.log("lastIndex : ",re.lastIndex," result : ",re.exec("foo"));
console.log("lastIndex : ",re.lastIndex," result : ",re.exec("foo"));



var re = /o/y; //相当于/^o/y
console.log("lastIndex : ",re.lastIndex," result : ",re.exec("foo")); //false
re.lastIndex = 1; //手动跳过了第一个字符f,^现在匹配的位置就是f和o之间的位置,所以^o能匹配.
console.log("lastIndex : ",re.lastIndex," result : ",re.exec("foo")); //false
console.log("lastIndex : ",re.lastIndex," result : ",re.exec("foo")); //false
console.log("lastIndex : ",re.lastIndex," result : ",re.exec("foo")); //false


var testTime = 10000;
var reg1 = /(?:[a-g])+/;
var reg2 = /([a-g])+/;

var str = "aabceedffg";
for(var i=0;i<10;++i){
    str += str;
}

console.time("reg1 time");
for(var i=0;i<testTime;++i){
    reg1.exec(str);
}
console.timeEnd("reg1 time");

console.time("reg2 time");
for(var i=0;i<testTime;++i){
    reg2.exec(str);
}
console.timeEnd("reg2 time");



var str = "selectHomeClass";

function formatStr(str){
    var reg = /([A-Z])/g;
    return str.replace(reg,function(re){
        return "_"+re.toLowerCase();
    });
}

function formatStr2(str){
    return str.replace(/([a-z\d])([A-Z])/g, '$1_$2').toLowerCase();
    //return str.replace(/([A-Z])(?=[a-z\d])/g, '_$1').toLowerCase();
}

console.log(formatStr(str));
console.log(formatStr2(str));


var reg = /^.*([0-9]+)/;
var str = "Copyright 2015";

console.log(reg.exec(str));



var reg = /water|to|watermelon/;
var str = "a watermelon is a large, heavy fruit with green skin, pink flesh, and black seeds";

console.log(str.match(reg));



var reg = /jan *(?:0?[1-9]|[12][0-9]|3[01])/gi;
var str = "Jan 01 Mar 04 Big 2333 jan  9 Jun  23 Oct 10 hello world Jan 31";

console.log(str.match(reg));
