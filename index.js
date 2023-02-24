class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this._insertNode(this.root, newNode);
    }
  }

  _insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this._insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this._insertNode(node.right, newNode);
      }
    }
  }

  inOrderTraversal(callback) {
    this._inOrderTraversalNode(this.root, callback);
  }

  _inOrderTraversalNode(node, callback) {
    if (node !== null) {
      this._inOrderTraversalNode(node.left, callback);
      callback(node.value);
      this._inOrderTraversalNode(node.right, callback);
    }
  }
}

const tree = new BinarySearchTree();
const treeDiv = document.querySelector('.tree');

document.addEventListener('keydown', event => {
  if (event.code === 'Space') {
    const randomValue = Math.floor(Math.random() * 201) - 100; // генерируем случайное значение в диапазоне [-100, 100]
    tree.insert(randomValue);
    renderTree();
  }
});

function renderTree() {
  treeDiv.innerHTML = '';
  tree.inOrderTraversal(value => {
    const node = document.createElement('div');
    node.classList.add('node');
    node.textContent = value;
    treeDiv.appendChild(node);
  });
}