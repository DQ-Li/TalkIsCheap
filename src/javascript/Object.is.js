/*
* 修复特殊情况下的错误，+0和-0，NaN和NaN
*
* */

function is(x,y) {
    // 1/+0 = +Infinity，1/-0 = -Infinity
    if(x === y){
        return x !== 0 || y !== 0 || 1/x === 1/y
    }else {
        // x !== x 为true时，x一定为 NaN
        // 两个都为NaN时，返回true
        return x !== x && y !== y
    }
}