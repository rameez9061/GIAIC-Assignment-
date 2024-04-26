"use strict";
let person_name2 = "RaMeez";
console.log(person_name2.toUpperCase());
console.log(person_name2.toLowerCase());
function titleCase(person_name2) {
    const words = person_name2.toLowerCase().split(' ');
    const title_cased_words = words.map((element) => {
        return element.charAt(0).toUpperCase() + element.slice(1);
    });
    return title_cased_words.join(' ');
}
const title_cased_Name = titleCase(person_name2);
console.log(title_cased_Name);
