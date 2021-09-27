function myObject() {
    'use strict';
    const MATH_CONSTANT = {
        E: 2.71828
    };
    // Only change code below this line
    Object.freeze(MATH_CONSTANT.freeze);
    // Only change code above this line
    try {
        MATH_CONSTANT.E = 23;
    } catch(error) {
        console.log(error.message);
    }
    console.log(MATH_CONSTANT.E);
    return MATH_CONSTANT.E;
}
const E = myObject();

module.exports = myObject;