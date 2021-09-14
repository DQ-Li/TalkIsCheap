function buildMaxHeap(arr,len) {   // 建立大顶堆

    for (let i = Math.floor(len/2); i >= 0; i--) {
        heapify(arr, i,len);
    }
}
function heapify(arr, i, len) {     // 堆调整
    let left = 2 * i + 1,
        right = 2 * i + 2,
        largest = i;
    if (left < len && arr[left] > arr[largest]) {
        largest = left;
    }
    if (right < len && arr[right] > arr[largest]) {
        largest = right;
    }
    if (largest != i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, largest, len);
    }
}
function heapSort(arr) {
    let len = arr.length;
    buildMaxHeap(arr,len);
    for (let i = arr.length-1; i > 0; i--) {
        [arr[i], arr[0]] = [arr[0], arr[i]];
        len--;
        heapify(arr, 0,len);
    }
    return arr;
}
let arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(heapSort(arr));