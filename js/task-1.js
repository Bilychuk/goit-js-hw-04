'use strict';

function slugify(title) {
    const normalizeTitle = title.toLowerCase();
    const words = normalizeTitle.split(" ");
    const result = words.join("-");
    return result;
}

console.log(slugify("Arrays for begginers"));
console.log(slugify("English for developer"));
console.log(slugify("Ten secrets of JavaScript"));
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));