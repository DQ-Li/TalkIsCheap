/*
* 思想：
*   找到一个数作为基准
*   比这个数字大的放在数字左边，比它小的放在右边；
*   然后，分别再对左边和右边的序列做相同的操作(递归)
*
*   不稳定
*   时间复杂度（平均/最好/最坏）：O(nlogn)、O(nlogn)、O(n²)
*   空间复杂度：O(logn)，空间复杂度等于递归深度
*
* */

function partition(arr,low,high) {
    let pivot = arr[low];
    while (low < high){
        while (low < high && arr[high] > pivot){ //从后往前，找一个比基准小的数
            --high;
        }
        arr[low] = arr[high];

        while (low < high && arr[low] <= pivot){ //从前往后，找一个比基准大的数
            ++low;
        }
        arr[high] = arr[low];
    }
    arr[low] = pivot;
    return low;
}

function quickSort(arr,low,high) {
    if(low < high){
        let pivot = partition(arr,low,high)
        quickSort(arr, low, pivot - 1);
        quickSort(arr, pivot + 1, high);
    }
    return arr;
}


