// original array
//const arrayValues = [5, 6, 7, 10];

//new array called "newArray" to contain the
// results from the '.map' method
//const newArray = arrayValues.map(/*code here*/);

// Callback functions

// 1.anonymous function (mostly used one)
// 2. separate named function.


// 1.anonymous function (mostly used one)

// function keyword

const values = [100, 200, 400, 600];

const newValues = values.map(function (element, index,array){
    // modify and return element
    return array;

});

console.log(newValues);


// with arrow function
const newValue = values.map((element, index,array) =>{
    // modify and return element
    return array;

});

// seprate callback function

const values = [100, 200, 400, 600];

function callBackFn(element, index, array) {

}
const newValues = value.map(callBackFn);

// errors because of using same function names








