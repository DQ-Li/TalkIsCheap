/*
* 思想：
*   通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。
*
*   稳定
*   时间复杂度（平均/最好/最坏）：O(n²)、O(n)、O(n²)
*   空间复杂度：O(1)
*
* */

function insertSort(arr) {
    for(let i = 1; i < arr.length; i++){
        for(let j = i; j > 0; j--){ // j=i，表示当前要处理的元素
            if(arr[j] < arr[j - 1]){
                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
            }else {
                break;
            }
        }
    }
    return arr
}
