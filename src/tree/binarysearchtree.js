// 节点
class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

// 二叉搜索树
class binarySearchTree {
    constructor(){
        this.root = null
    }

    insertNode(node,newNode){
        if(newNode.value > node.value){
            if(node.right === null){
                node.right = newNode
            }else{
                this.insertNode(node.right,newNode)
            }
        }else if(newNode.value < node.value){
            if(node.left === null){
                node.left = newNode
            }else{
                this.insertNode(node.left,newNode)
            }
        }
    }

    // 插入操作
    insert(value){
        let newNode = new Node(value)
        if(this.root === null){
            this.root = newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }

    // 搜索操作
    search(value){
        const searchNode = (value,node) => {
            if(node === null) return false
            if(node.value === value) return true
            return searchNode(value,value>node.value?node.right:node.left)
        }
        return searchNode(value,this.root)
    }
}