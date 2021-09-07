/*
二叉树节点
function TreeNode(value) {
    this.value = value
    this.left = null
    this.right = null
}
*/


function mirror(root) {
    if(root === null) return root;
    let left = mirror(root.left);
    let right = mirror(root.right);
    [root.left,root.right] =[right,left];
    return root;
}

