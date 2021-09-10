/*
* 希尔排序又叫缩小增量排序：第一个突破O(n²)的排序算法
* 是简单插入排序的改进版；不同之处在于，它会优先比较距离较远的元素
*
* 思想：
*   先将整个待排序的记录序列分割成为若干子序列分别进行直接插入排序
*   待整个序列中的记录“基本有序”时
*   再对全体记录进行依次直接插入排序
*
*   不稳定
*   时间复杂度（平均/最好/最坏）：O(nlogn)、O(nlogn)、O(nlogn)
*   空间复杂度：O(1)
*
* */

function shellSort(arr) {
    let len = arr.length;
    let gap = Math.floor(len / 2);
    let temp;
    while (gap >= 1){
        for(let i = gap; i < arr.length; i++){
            for(let j = i; j - gap >= 0; j = j - gap){ // j=i，表示当前要处理的元素，往前比较
                if(arr[j] < arr[j - gap]){
                    [arr[j], arr[j - gap]] = [arr[j - gap], arr[j]]
                }else {
                    break;
                }
            }
        }
        gap = Math.floor(gap / 2);

    }
    return arr;
}




