// objects

const person = {
    name: "Isac",
    lastName: "Holstad",
    age: "20"
}

//1. Dot notation
console.log("DOT notation:",person.name);
console.log("DOT notation:",person.lastName);

//2. bracket notation

console.log("Bracket notation:", person["name"]);
console.log("Bracket notation:", person["lastName"]);

// 3. looping in arrays with console.log();

const recipie = {
    "ingredient_0" : "Egg",
    "ingredient_1" : "Flour",
    "ingredient_2" : "Milk"

}

for(let i = 0; i <= 2; i++){
    console.log(recipie["ingredient_" + i])
}

//Result whole recipie


// For inn loop

const carProfile = {
    make: "tesla",
    year: 2021,
    vinNumber: 49294023
}


// use for in loop
// console log for me the "key:" key and value

for(const myKey in carProfile) {
    console.log("the " + myKey + "is " + carProfile[myKey]);


}


// Object methods

// 1. Object.key()
// Syntax
const userProfile = {
    name: "isac",
    age: 20
}
 const uerProfileKeys = Object.keys(userProfile);



// Object.values();
console.log(Object.values(userProfile))
// ["name" : "isac"]
// ["age" : 20]




// Object.entries();

//-Syntax
//const userProfileEntireArr = Object.entries(userProfile);
// console.log(userProfileEntireArr);


