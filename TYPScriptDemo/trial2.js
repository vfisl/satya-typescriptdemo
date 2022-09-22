"use strict";
exports.__esModule = true;
// 
//import as module
var trails_1 = require("./trails");
var mymodule = require("./trails");
mymodule.greet('sdaik'); //from trial1
(0, trails_1.greet)('sri'); //from te same file
var prod = new mymodule.Product('car', 23456);
prod.printdetails();
