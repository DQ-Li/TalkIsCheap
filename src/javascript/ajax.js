/*
* 使用步骤：
* 1.创建 XmlHttpRequest 对象
* 2.调用 open 方法设置基本请求信息
* 3.设置发送的数据，发送请求
* 4.注册监听的回调函数
* 5.拿到返回值，对页面进行更新
* */

let oAjax = new XMLHttpRequest();
oAjax.open('GET', url, true);
oAjax.send();
oAjax.onreadystatechange = () => {
    if(oAjax.readyState === 4){
        if(oAjax.status === 200){
            console.log(oAjax.responseText);
        }else{
            console.log('失败了');
        }
    }
}