// You are asked to create a class Register with a private variable `cash` that could be used this way:
// var myRegister = new Register(10);
// cash is private
// myRegister.cash; // undefined
// myRegister.getCashValue(); // 10

// add Cash and dispenseCash methods should be chain able
// myRegister.addCash(4).addCash(1).getCashValue(); // 15
// myRegister.dispenseCash(10).getCashValue(); // 5

function Register(cash) {
    this.cash = cash;
}

Register.prototype = {
    dispenseCash: function(cash) {
        var toReturn = this.cash - cash;
        if (toReturn < 0) {
            return 0;
        } else {
            return toReturn;
        }
    },
    addCash: function(cash) {
        this.cash += cash;
    },
    getCashValue: function() {
        return this.cash;
    }
};
