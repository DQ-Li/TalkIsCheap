/*
* 设置cookie
* setTime() 以一个表示从1970-1-1 00:00:00 UTC计时的毫秒数为来为 Date 对象设置时间
* escape() 对value编码
* Date.toUTCString()返回值是 date Object 的字符串表示，用世界时（UTC）表示
* */
function setCookie(name, value, days){
    let exp = new Date();
    exp.setTime(exp.getTime() + days*24*60*60*1000);
    document.cookie = name + '=' + escape(value) + ';expires=' + exp.toUTCString();
}

/*
* 获取cookie
* cookie的值可以使用document.cookie直接获得，这将获得这些名/值对包括了该域名下的所有cookie
* 一次只能获取所有的cookie值，无法通过指定cookie名称获得对应的值
* 分析字符串来获取需要的cookie值
* */
function getCookie(name) {
    let strCookie = document.cookie;
    let arr = strCookie.split(';');
    for(let i = 0; i < arr.length; i++){
        let temp = arr[i].split('=');
        if(temp[0] === name){
            return temp[1];
        };
    }
    return null;
}

/*
* 删除cookie
* 如果需要删除cookie的话，直接将过期时间设置成一个已经过去的日期即可
* */
function clearCookie(name) {
    setCookie(name,'',-1);
}

