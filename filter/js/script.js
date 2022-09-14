// 1. filtering an array
// Example 1
//               0   1   2   3    4   5
const numbers = [1, 3, 10, 20, 13, 21];



const filterdNumbers = numbers.filter((number) =>{
    // filters out numbers under 5
    if(number >= 5){
        return true;
    } else{
        return false;
    }

});
console.log("Numbers under 5: ", filterdNumbers);
//  new array [ 10, 20, 13, 21];


// Shorter version
const filteredNumbers = numbers.filter((number)  => number >= 4);

console.log("shorter version: ", filteredNumbers);


const values = [0, 23, 55, 66, 777, 100, 500, 250];

//write a function which filters for me values which is greater then or equal 100
//using filter method

const filterValues = values.filter((value) =>{
    if(value >= 100) {
        return true
    }
    else {
        return  false
    }

});

console.log("Over or equal 100: ", filterValues);
// Return


// own version

const arrayOfNumbers = [532, 324, 324, 532,629, 520,];

const filterNumbers = arrayOfNumbers.filter((array) => array >= 500);

console.log("Over or equal 500: ", filterNumbers);

const people = [
    { name: 'Kari', age: 28 },
    { name: 'Astrid', age: 32 },
    { name: 'Hans', age: 22 },
    { name: 'Inger', age: 19 },
    { name: 'Liv', age: 42 },
    { name: 'Kristoffer', age: 12 },
    { name: 'Anne', age: 12 },
    { name: 'Martin', age: 17 },
    { name: 'Joakim', age: 45 },
    { name: 'Ellen', age: 7 },
];

// filter over or equal ages from 22

const adults = people.filter((person) =>{
    if(person.age >= 22){
        return true
    }
    else{
        return false
    }
})
console.log("With age over 22: ", adults);

// Destructing
const adult = people.filter(({age}) => age >= 22);

console.log("Destructed version: ", adult);

const games = [
    { title: 'Mayhem Fighter', isMultiplayer: true, rating: 8 },
    { title: 'Build-a-farm', isMultiplayer: true, rating: 9 },
    { title: 'Ghost Story', isMultiplayer: false, rating: 8 },
    { title: 'Fast Car Racer', isMultiplayer: true, rating: 7 },
    { title: 'Elf and Dwarf RPG', isMultiplayer: false, rating: 8 },
];

//filter games greater og equal 8

const filteredGames = games.filter((arr) =>{
    if(arr.isMultiplayer === true && arr.rating >= 8) {
        return true
    }
    else{
        return  false
    }
})
console.log("Games with multiplayer and rating over 8: ", filteredGames);


//own example

const food = [
    { name: 'snickers', isDiet: false, stars: 2 },
    { name: 'mars', isDiet: true, stars: 5 },
    { name: 'chicken', isDiet: true, stars: 9 },
    { name: 'sandwich', isDiet: false, stars: 4 },
    { name: 'wrap', isDiet: true, stars: 5 },
    { name: 'steak', isDiet: true, stars: 8 },
];

const filteredFood = food.filter((filterArr) => {
    if(filterArr.isDiet === true && filterArr.stars >= 5){
        return true
    }
    else{
        return  false
    }
});

console.log("Food with diet and stars over 5: ", filteredFood);





