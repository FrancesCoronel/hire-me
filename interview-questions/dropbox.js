var breadthSearch = function(Tree) {
    var Node = function(data, children) {
        Node.data = "";
        Node.children = [];
    };
    // starting at head of Tree
    var head = Tree.front();
    // repeat following
    while (Tree.children !== null) {
      for (var i in Tree.children) {
        head = i.data();
      }
    }
    console.log(head);
    // looking for neighbors
    // if neighbor exists
    // point Node to neighbor
};