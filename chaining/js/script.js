// chaining

const products = [

    // Here we create an object and each
    // object has a name and a price
    { oldName: 'dress', oldPrice: 600 },
    { oldName: 'cream', oldPrice: 60 },
    { oldName: 'book', oldPrice: 200 },
    { oldName: 'bottle', oldPrice: 50 },
    { oldName: 'bedsheet', oldPrice: 350 }
];

// 1.filter those elements over 100  using filter method
// Chaining filter method and map filter method (chained together)

const filterProducts = products
    .filter((product) => {
    if(product.oldPrice > 100) {
        return true
    }
// 2. map on the elements to a new array sales price with 50% off
}).map((newProducts) => {
    return `${newProducts.oldName} new price now:  ${newProducts.oldPrice / 2} NOK`;
});
console.log("Products with price over 100: ", filterProducts);

// 2. map on the elements to a new array sales price with 50% off

// Answer =
//dress = 300
// book = 100
// bedsheet = 175



const inventoryProducts = [
    { name: 'Milk', price: 5.0, inStock: true },
    { name: 'Cheese', price: 10.0, inStock: true },
    { name: 'Bread', price: 8.0, inStock: false },
    { name: 'Beans', price: 3.0, inStock: true },
    { name: 'Eggs', price: 12.0, inStock: true },
    { name: 'Rice', price: 4.0, inStock: false },
    { name: 'Meat', price: 25, inStock: true },
    { name: 'Coffee', price: 12.0, inStock: true },
    { name: 'Tea', price: 8.0, inStock: false },
    { name: 'Bottled Water', price: 4.0, inStock: false },
];
// In this example, we have a list of products that
// we want to apply a discount to it for a sale, but only products where:
// 1. the price is 5 or higher (>= 5)
// 2. the products are in stock (inStock === true)
// use the map method to calculate a new property called discountedPrice
// to calculate the discount = price - (discount percentage / 100) * price
// discount percentage will be 20
// {name: 'Milk', price: 5, inStock: true, discountedPrice: 4}


const discountedInventoryProducts = inventoryProducts
    .filter(({price, inStock}) => price >= 5 && (inStock === true))
    .map((product) =>{
        //price * 0.8
        product.discountedPrice = product.price * 0.8;
        return product
    });
console.log("Chaining :",discountedInventoryProducts);


// 3. example

const students = [
    { name: 'Victoria', age: 19, isOnline: true, results: [80, 61, 66, 50, 91] },
    { name: 'Theo', age: 32, isOnline: false, results: [57, 99, 96, 72, 96] },
    { name: 'Markus', age: 54, isOnline: true, results: [50, 92, 70, 66, 90] },
    { name: 'Aksel', age: 21, isOnline: true, results: [77, 86, 70, 71, 75] },
    { name: 'Felix', age: 29, isOnline: false, results: [99, 76, 59, 74, 68] },
    { name: 'Benjamin', age: 48, isOnline: true, results: [65, 85, 74, 83, 54] },
    { name: 'Ulrik', age: 39, isOnline: true, results: [92, 72, 55, 69, 58] },
    { name: 'Alma', age: 28, isOnline: false, results: [92, 91, 66, 77, 71] },
    { name: 'July', age: 37, isOnline: true, results: [78, 70, 59, 76, 95] },
    { name: 'Leo', age: 42, isOnline: true, results: [55, 64, 88, 88, 95] },
];

const results = students.filter((student) =>{
    if(student.age >= 30 && student.isOnline === true){
        return true
    }
});
console.log("age of 30 and online: ",results);

const classAverage = results.reduce((classAverage, student, index, studentArray) =>{
    //reduce all the strings results to a single average
    const studentsTotalMarks = student.results.reduce((studentAverage, result, index, resultsArray)=>{
        studentAverage += result / resultsArray.length;
        return studentAverage;

    }, 0);
return classAverage += studentsTotalMarks / studentArray.length;
}, 0);
console.log("Average:",classAverage);


// own practice examples

//const result = values
//   .filter(/* This filter first runs */)
//   .reduce(/* This reduce acts on the result of the filter */)
//   .map(/* This map acts on the result of the reduce above */);


const users = [
    { name: 'Kari', id: 19313 },
    { name: 'Hans', id: 40202 },
    { name: 'Joakim', id: 59230 },
    { name: 'Inger', id: 14023 },
    { name: 'Ellen', id: 76339 },
];

const foundUser = users.find(({ name }) => name[0].toLowerCase() === 'j');

console.log("joakim in lower case:",foundUser);

////////





