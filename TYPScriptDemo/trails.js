"use strict";
exports.__esModule = true;
exports.Product = exports.greet = exports.add = void 0;
function add(x, y) {
    if (y === void 0) { y = 10; }
    console.log(x + y);
}
exports.add = add;
add(10);
var greet = function (msg) {
    console.log("good morning  ".concat(msg));
};
exports.greet = greet;
var Product = /** @class */ (function () {
    function Product(itemname, price) {
        var _this = this;
        this.itemname = itemname;
        this.price = price;
        this.printdetails = function () {
            console.log("itemname :".concat(_this.itemname));
            console.log("price  :".concat(_this.price));
        };
    }
    return Product;
}());
exports.Product = Product;
