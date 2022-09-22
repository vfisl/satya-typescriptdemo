// 
//import as module
import {  Product,add,greet} from "./trails";

import * as mymodule from "./trails"
mymodule.greet('sdaik')//from trial1
greet('sri')//from te same file
var prod=new mymodule.Product('car',23456)
prod.printdetails()