function outputValues(values) {
    for (var i = 0; i < values.length; i++) {
      (function(i){
        setTimeout(function() {
            console.log("item " + i + " is " + values[i]);
        }, i * 200);
      })(i, values);
    }

}

console.log(outputValues(["a", "b", "c", "d"]));

/**
item 0 is a
item 1 is b
item 2 is c
item 3 is d
 */