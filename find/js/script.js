// find array method finds a elemnt in the array and returns true or false

// 1. example
// find();

const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//find the element with value of 5
const newArray = values.find((element, index, array) => {
    // Return true if you find the element you want
    // Return false if you haven't found the element you want
});

const foundValue = values.find((currentValue) => {
    if(currentValue === 5) {
        return true
    }
    else {
        return false
    }

})
console.log("Found value of: ", foundValue);
// Result = 5


// given an array of temperature and find the first temperature over 120 degrees

const temperatures = [109.2, 115.2, 119.9, 120.8, 150.0, 175, 182];

const findTemp = temperatures.find((degrees) =>{
    if(degrees >= 120) {
        return true
    }
    else {
        return  false
    }
})
console.log(findTemp)


//complex question

const profiles = [
    {
        name: "Isac",
        id: 12343
    },
    {
        name: "William",
        id: 32452
    },
    {
        name: "Elon",
        id: 23425
    },
    {
        name: "Robert",
        id: 23093
    }
];

const findName = profiles.find((user) =>{
    if(user.name[0].toLowerCase() === "w") {
        return true
    }
});

console.log("Name starting with W: ", findName);


// second complex example

const books = [
    { title: 'Building a Spaceship', inStock: false },
    { title: 'Growing Orchids', inStock: false },
    { title: 'River Fisher', inStock: false },
];

const findBook = books.find((book) => {
    if(book.inStock === true){
        return true
    }
});


if(findBook === undefined) {
    console.log("No books in stock sorry")
}
else {
    console.log("First book in stock: ", findBook.title)
}

//Return: "no books in stock sorry"





