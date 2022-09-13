const container = document.querySelector(".container")
// chaining

// The discount percentage being applied
const DISCOUNT_PERCENTAGE = 20;

const products = [
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
console.log("Product before discount: ", products)
const discountedProducts = products
.filter((product) => {
    if (product.inStock === true && product.price >= 5) {
        return true
    }
})
.map((product) => {
    product.discountedPrice =
        product.price - (DISCOUNT_PERCENTAGE / 100) * product.price;
    return product;
});

console.log("Disconted products: ", discountedProducts);