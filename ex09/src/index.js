// Only change code below this code
const product = (...nums) => {
    const args = [...nums]
// Only change code above this line
    return args.reduce((a, b) => a * b, 1);
};
console.log(product(1, 2));
console.log(product(4, 3, 10, 2));
console.log(product(7));
console.log(product()); // change this line
module.exports = product;