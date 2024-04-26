var laptop = {
    make: "HP",
    model: "Intel6",
    year: 2021,
    describe: function () {
        console.log("I bought a laptop of ".concat(laptop.make, " with model ").concat(laptop.model, " in ").concat(laptop.year));
    }
};
laptop.describe();
