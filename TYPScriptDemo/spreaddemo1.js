var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var nums = [10, 20, 40, 50];
var num1 = [60, 70, 80, 90];
//spread the array
///create a new array by spreading the values
var tensarr = __spreadArray(__spreadArray(__spreadArray([], nums, true), num1, true), [100], false);
console.log("".concat(tensarr));
var EMP1 = { name: 'Jo', department: 'Admin' };
var address = { city: 'Ban', state: 'Kar' };
var details = __assign(__assign(__assign({}, EMP1), address), { mbile: 56514354, allowance: tensarr });
console.log(details);
