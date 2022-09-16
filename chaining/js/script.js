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
console.log( "Chaining:",discountedInventoryProducts);



