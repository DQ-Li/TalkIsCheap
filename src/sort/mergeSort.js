/*
* 思想：
*   将数组分为左和右两部分，然后继续将左右两部分继续(递归)拆分，直到拆分成单个为止；
*   然后将拆分为最小的两个数组，进行比较，合并排成一个数组.
*   接着继续递归比较合并，直到最后合并为一个数组.
*
*   稳定
*   时间复杂度（平均/最好/最坏）：O(nlogn)
*   空间复杂度：O(n)
* */

function merge(leftArr, rightArr) {
    let result = [];
    while (leftArr.length > 0 && rightArr.length > 0){
        if(leftArr[0] < rightArr[0]){
            result.push(leftArr.shift()); //把最小的最先取出，放到结果中
        }else {
            result.push(rightArr.shift());
        }
    }

    return result.concat(leftArr,rightArr); //合并剩余数组
}

function mergeSort(arr) {
    if(arr.length === 1){
        return arr;
    }
    let middle = Math.floor(arr.length / 2)
    let left = arr.slice(0, middle)
    let right = arr.slice(middle)
    return merge(mergeSort(left), mergeSort(right))
}
