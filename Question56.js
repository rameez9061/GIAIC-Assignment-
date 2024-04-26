var string = [1, "Bottle", 34, "Cycle", "Bike", "computer", 87];
var filtered = function (element) {
    return typeof element === "string";
};
console.log(string.filter(filtered));
