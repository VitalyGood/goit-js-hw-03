function slugify(title) {
    const string = title.split(" ").join('-').toLowerCase();
    return string;
}

console.log(slugify("Arrays for begginers"));
console.log(slugify("English for developer"));
console.log(slugify("Ten secrets of JavaScript"));
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));

// function slugify(title) {
//     return String(title)
//     .normalize('NFKD') // split accented characters into their base characters and diacritical marks
//     .replace(/[\u0300-\u036f]/g, '') // remove all the accents, which happen to be all in the \u03xx UNICODE block.
//     .trim() // trim leading or trailing whitespace
//     .toLowerCase() // convert to lowercase
//     .replace(/[^a-z0-9 -]/g, '') // remove non-alphanumeric characters
//     .replace(/\s+/g, '-') // replace spaces with hyphens
//     .replace(/-+/g, '-'); // remove consecutive hyphens
// }