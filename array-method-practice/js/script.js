const employees = [
    {
        name: "Isac",
        lastName: "Holstad",
        isAdmin: true,
        mark: "90",
        age: 20
    },
    {
        name: "Lonardo",
        lastName: "Dicaprio",
        isAdmin: false,
        mark: "70",
        age: 55
    },
    {
        name: "Demarcus",
        lastName: "Cusins the third",
        isAdmin: true,
        mark: "85",
        age: 21
    },
    {
        name: "Morten",
        lastName: "Olfstad",
        isAdmin: true,
        mark: "91",
        age: 60
    },
    {
        name: "Mark",
        lastName: "Louis",
        isAdmin: false,
        mark: "25",
        age: 31
    },
    {
        name: "Leo",
        lastName: "Mortensen",
        isAdmin: false,
        mark: "34",
        age: 19
    },
];
const filteredEmployees = employees.filter((newEmployees) =>{
    if(newEmployees.isAdmin === true){
        return true
    }
})
console.log(filteredEmployees);

// map()

const values = [100, 200, 300, 400, 500];

const newTotal = values.map((value, total) =>{
    value += total;
    return total

})
console.log(newTotal);

//filter()

const numberValues = [100, 200, 300, 400, 500];

const newArray = numberValues.filter((element, index, array)=>{
    if (index >= 3) {
        return true
    }


})
console.log(newArray);

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

const adults = people.filter((adultPeople) =>{
    if(adultPeople.age >= 18) {
        return true
    }
})
console.log("people over 18: ", adults);


// in stock and out of stock


const books =[
    {title: "river book", inStock: false},
    {title: "river book 3", inStock: false},
    {title: "river book 9 two part", inStock: false},
    {title: "moon and i see", inStock: false},
    {title: "river lake", inStock: false},
    {title: "river book in moutain", inStock: true},
];

const book = books.filter((updatedBooks)=>{
    if(updatedBooks.inStock === false){
        console.log("no books in stock")

    }


})

if(book === undefined) {
    console.log("first book alvie", book.title)
}



