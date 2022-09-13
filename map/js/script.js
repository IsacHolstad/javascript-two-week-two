// map();

const names = [
    { firstName: 'Ola', lastName: 'Nordmann' },
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'Mario', lastName: 'Rossi' },
    { firstName: 'Jan', lastName: 'Jansen' },
];

console.log("before map:", names);

// Destructed arrow function
const newValues = names.map(({firstName, lastName}) =>{
    // modify and return element
    return `${firstName} ${lastName}`;

});

console.log("after map: ", newValues);


// Please calculate the area of the triangle inside the given
// triangle array
// please use the map function to return an array
// Return : [1000, 2500, 2.1*105]

const triangles = [
    {base: 100, height: 200},
    {base: 50, height: 100},
    {base: 600, height: 700},
];


const triangleArea = triangles.map(({base, height}) =>{
    return 0.5 * base * height;


})

console.log("Answear to question:", triangleArea);

//  almost had it, thought was using string in the return

// own example of getting area of a square

const square = [
    {base: 100, height: 100},
    {base: 100, height: 100},
    {base: 100, height: 100},
    {base: 100, height: 100},
];

console.log(square);

