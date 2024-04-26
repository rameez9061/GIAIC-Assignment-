var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var laptop_price1 = [1200, 4000, 3500];
var laptop_price2 = [3200, 2000, 5000];
var sorted = __spreadArray(__spreadArray([], laptop_price1, true), laptop_price2, true).sort(function (a, b) { return a - b; });
console.log(sorted);
