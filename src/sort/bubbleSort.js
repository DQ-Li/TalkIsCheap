/*
* 思想：
*   它重复地走访过要排序的数列，依次比较两个元素，如果它们的顺序错误就把它们交换过来
*
*   稳定
*   时间复杂度（平均/最好/最坏）：O(n²)、O(n)、O(n²)
*   空间复杂度：O(1)
*
* 两个优化:
*   1. 每次遍历都可以确定至少一个元素的位置，已经确定位置的不需重复遍历
*   2. 如果某次遍历，没有产生交换，说明已经排序结束
* */

function bubbleSort(arr) {
    const len = arr.length;
    for(let i = 0; i < len; i++){
        let flag = true;
        for(let j = 0; j < len - 1 - i; j++){
            if(arr[j] > arr[j + 1]){
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                flag = false;
            }
        }
        if (flag){
            return arr;
        }
    }
    return arr;
}
