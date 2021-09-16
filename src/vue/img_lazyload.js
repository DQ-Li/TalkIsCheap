function Observer(){
    let images = document.querySelectorAll('.lazyload');
    // callback函数的参数（entries）是一个数组，每个成员都是一个IntersectionObserverEntry对象。
    // 举例来说，如果同时有两个被观察的对象的可见性发生变化，entries数组就会有两个成员。
    let observer = new IntersectionObserver((entries)=>{
        entries.forEach((item)=>{
            if(item.isIntersecting){
                // 开始加载图片,把data-origin的值放到src
                item.target.src = item.target.dataset.src;
                // 停止监听已开始加载的图片
                observer.unobserve(item.target);
            }
        })
    })
    images.forEach((item)=>observer.observe(item));
}


