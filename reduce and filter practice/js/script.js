const numbers = [3, 5, 6, 6, 3, 7, 10];

const numberSum = numbers.reduce((total, value) =>{
    total += value;
    return total;
}, 0);
console.log(numberSum);

//Explained how reduce works
const numberTotal = numbers.reduce((total, value) =>{
    total += value;
    //0 + 0
    // total = 0
    // 0 + 3
    // total = 3
    // 3 + 5
    //total = 8
    // 8 + 6
    // total = 14
    // 14 + 6
    // total = 20
    // 20 + 3
    // total = 23
    // 23 + 7
    // total = 30
    // 30 + 10
    // total = 40
    return total;

}, 0);
console.log(numberTotal);

// initialValue (optional)
const values = [100, 200, 300, 400, 500];

const endResult = values.reduce(
    (previousValue, currentElement, index, array) => {
        return previousValue;
    },
);
console.log(endResult);


const arrayNumber = [9023, 3244, 52, 535, 90, 5413];

const sumNumbers = arrayNumber.reduce((total, value) => {
    total += value;
    return value;
}, 0);
console.log("Total Sum: ", sumNumbers);

// filter array method

const teslaCars = [
    {make: "tesla model 3", inStock: true, color: "red"},
    {make: "tesla model y", inStock: true, color: "gray"},
    {make: "tesla model s", inStock: false, color: "black"},
    {make: "tesla roadster", inStock: false, color: "light gray"},
    {make: "tesla cybertruck", inStock: false, color: "metal"}

];

const carsInStock = teslaCars.filter((teslaInStock) =>{
    if(teslaInStock.inStock === true) {
        return true
    }
    else {
        return  false
    }
})
console.log("tesla cars instock: ", carsInStock);

const electricCars = [
    {make: "tesla model 3", inStock: true, color: "red", kw: 24},
    {make: "tesla model y", inStock: true, color: "gray", kw: 65},
    {make: "tesla model s", inStock: false, color: "black", kw: 100},
    {make: "nissan leaf", inStock: true, color: "light gray", kw: 46},
    {make: "kia soul", inStock: true, color: "metal", kw: 64},
    {make: "hongqi", inStock: true, color: "metal", kw: 38}

];

const electricCarArray = electricCars.filter((elCar) => {
    if(elCar.inStock === true && elCar.kw >= 40) {
        return true
    }
    else {
        return false
    }
});
console.log("Cars instock and kw over 40: ", electricCarArray);


//more filter()

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

const adults = people.filter((person) => {
    if(person.age >= 18) {
        return true
    }
    else{
        return  false
    }
})
console.log("People over 18: ", adults);

// more filter()

const games = [
    { title: 'Mayhem Fighter', isMultiplayer: true, rating: 8 },
    { title: 'Build-a-farm', isMultiplayer: true, rating: 9 },
    { title: 'Ghost Story', isMultiplayer: false, rating: 8 },
    { title: 'Fast Car Racer', isMultiplayer: true, rating: 7 },
    { title: 'Elf and Dwarf RPG', isMultiplayer: false, rating: 8 },
];

const gamesArray = games.filter((game) => {
    if(game.isMultiplayer === true && game.rating >= 8) {
        return true
    }
    else {
        return  false
    }
})
console.log("Games with multiplayer and rating 8 and over: ", gamesArray);

const movies = [
    {movieTitle: "American Psyco", stock: true, grade: 9.5},
    {movieTitle: "Interstellar", stock: true, grade: 7.3},
    {movieTitle: "interception", stock: true, grade: 8.2},
    {movieTitle: "Fight Club", stock: true, grade: 10},
    {movieTitle: "GoodTime", stock: true, grade: 8.5},
    {movieTitle: "Mr & Mrs Smith", stock: true, grade: 7.2},
    {movieTitle: "Drive", stock: true, grade: 9.1},
    {movieTitle: "Prisoners", stock: false, grade: 8.8}
];

const movieArray = movies.filter((movie) => {
    if(movie.stock === true && movie.grade >= 8.2) {
        return true
    }
    else {
        return true
    }
});
console.log("Movie in stock and grade over 8.2: ", movieArray);

//const msg = function () {
//    console.log("this is auto")
//}
//setTimeout(msg, 3000)

















