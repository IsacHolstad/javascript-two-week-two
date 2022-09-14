// Reduce

const values = [2, 5, 3, 5, 6, 7];

// we want to use the reduce method to calculate the sum
// of the items in the array values

const sum = values.reduce((total, item)=>{
    // 0 + 0
    //total = 0
    //total + 2
    //total = 2
    //and so on

    total += item;
    return total;


}, 0);
console.log("Sum: ", sum);

const garages = [
    {make: "bmw", cars: 10},
    {make: "tesla",cars: 20},
    {make: "volvo",cars: 5},
    {make: "mercedes",cars: 40},
    {make: "toyota",cars: 90},
];

// dask is to calculate the total of cars in each garage
// bear in mind that there is 50 cars in maintenance
// using the reduce method

const garageSum = garages.reduce((totalOfCars, garage) => {
    totalOfCars += garage.cars;
    return totalOfCars;



}, 50);

console.log("Total number of cars: ", garageSum);


const products = [
    {
        title: "Pudding",
        isInStock: false,
        quantity: 2,
        price: 23,
        currency: "NOK",
    },
    {
        title: "egg",
        isInStock: true,
        quantity: 30,
        price: 30,
        currency: "NOK",
    },
    {
        title: "Bear",
        isInStock: false,
        quantity: 6,
        price: 160.99,
        currency: "NOK",
    },
    {
        title: "energy drink",
        isInStock: true,
        quantity: 1,
        price: 23.50,
        currency: "NOK",
    },
    {
        title: "Steak",
        isInStock: true,
        quantity: 1,
        price: 200.90,
        currency: "NOK",
    }
];

// get the total price of isInStock items
// to calculate the total you need to multiply
// price * quantity
//please use reduce array method

const totalCost = products.reduce((total, items) =>{
    if (items.isInStock === true){
        total += items.price * items.quantity;
    }
    return total;
}, 0);

console.log("Price:", totalCost);



/// Training after lecture

const phones = [
    {make: "Iphone", year: 2021, model:"Iphone 12 pro max", inStock: true, price: 9000},
    {make: "samsung", year: 2018, model:"samsung 4s", inStock: false, price: 4400},
    {make: "Iphone", year: 2018, model:"Iphone 8 plus", inStock: true, price: 2000},
    {make: "Iphone", year: 2022, model:"Iphone 14 pro max", inStock: true, price: 14000},
];
console.log(phones);


const phonesInstock = phones.filter((phone) =>{
    if(phone.inStock === true) {
        return true
    }
    else {
        return  false
    }
});
console.log("Filtered out phone not in stock: ", phonesInstock);

/// Reduce method
/// Own examples

const numberArray = [4, 5, 45, 92, 20, 60];

const numberSum = numberArray.reduce((total, value) => {
    total += value;
    return value;
}, 0);
console.log(numberSum)





















