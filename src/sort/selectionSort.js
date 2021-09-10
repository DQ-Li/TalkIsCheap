/*
* 思想：
*   首先，在未排序序列中找到最小（大）元素，存放到排序序列的起始位置
*   然后，再从剩余未排序元素中继续寻找最小（大）元素，放到已排序序列的末尾
*   以此类推，直到所有元素均排序完毕
*
*   有跨节点交换，所以不稳定
*   时间复杂度：所有情况都是O(n²)
*   空间复杂度：O(1)
*
* */

function selectionSort(arr) {
    let len = arr.length;
    let minIndex;
    for(let i = 0; i < len - 1; i++){
        minIndex = i; // 保存最小值的索引
        for(let j = i + 1; j < len; j++){
            if(arr[j] < arr[minIndex]){ // 寻找最小数
                minIndex = j;
            }
        }
        [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]]
    }
    return arr;
}
