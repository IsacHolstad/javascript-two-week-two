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
