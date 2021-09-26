// 需要转成树形结构的数据
const data = [
    { id: 56, parentId: 62 },
    { id: 81, parentId: 80 },
    { id: 74, parentId: null },
    { id: 76, parentId: 80 },
    { id: 63, parentId: 62 },
    { id: 80, parentId: 86 },
    { id: 87, parentId: 86 },
    { id: 62, parentId: 74 },
    { id: 86, parentId: 74 },
];

// 建立id-数组映射关系，方便后续操作
const idMap = data.reduce((arr,cur,index) => {
    arr[cur.id] = index;
    return arr;
},{})

// 构造树形结构
let root = null;
data.forEach((item) => {
    if(item.parentId === null){
        root = item;
        return;
    }
    let parent = data[idMap[item.parentId]];
    parent.children = [...(parent.children || []),item];
})

console.log(root);

