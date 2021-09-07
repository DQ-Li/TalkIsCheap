
// 节点
class TreeNode {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

// 先序和中序
function buildTree1(preorder,inorder) {
    // 先序和中序有一个结束说明已经结束
    if(!preorder.length || !inorder.length) return null;

    // 取先序第一个节点
    let node = new TreeNode(preorder.shift());
    let index = inorder.indexOf(node.value);

    node.left = buildTree1(preorder,inorder.slice(0,index));
    node.right = buildTree1(preorder,inorder.slice(index+1));

    return node

}

// 中序和后序
function buildTree2(inorder,postorder) {
    // 中序和后序有一个结束说明已经结束
    if(!postorder.length || !inorder.length) return null;

    // 取后序最后一个节点
    let node = new TreeNode(postorder.pop());
    let index = inorder.indexOf(node.value);

    // 后序的时候也要切分
    node.left = buildTree2(inorder.slice(0,index),postorder.slice(0,index));
    node.right = buildTree2(inorder.slice(index+1),postorder.slice(index));

    return node

}