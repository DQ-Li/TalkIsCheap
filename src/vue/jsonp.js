/*
* Jsonp就是利用src属性可以请求不同源地址，利用script标签实现跨域请求
* 如果存在其他传入参数，需要进行拼接
*
* */

function jsonp(url,data,callback) {
  let funcName = 'jsonp_' + Date.now()

  if(typeof data === 'object' && data !== null){
    const temp = []
    for(let [key,value] of Object.entries(data)){
      temp.push(key+'='+value)
     }
    data = temp.join('&')
  }

  let script = document.createElement('script')
  script.src = url+'?'+data+'&callback='+funcName
  document.body.appendChild(script)

  window[funcName] = function (data) {
    callback(data)
    delete window[funcName]
    document.body.removeChild(script)
  }
}