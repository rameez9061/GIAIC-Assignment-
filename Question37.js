var make_shirt = function (size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love Typescript"; }
    console.log("Make a shirt of size ".concat(size, " and with ").concat(message, " written on it "));
};
make_shirt();
make_shirt("medium");
make_shirt("small", "lets learn typescript");
