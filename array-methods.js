const products = [
    { name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sungalss', price: 300, brand: 'ray', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];

// map
const brands = products.map(product => product.brand);
const names = products.map(product => product.name);
// console.log(names);

// forEach 
// products.forEach(product => console.log(product.name));

// filter 
const cheapest = products.filter(product => product.price <= 5000);
// console.log(cheap);

const specificProduct = products.filter(product => product.name.includes("n"));
// console.log(specificProduct);

// find 
const cheap = products.find(product => product.price <= 5000);
// console.log(cheap);

const specificName = products.find(product => product.name.includes("n"));
console.log(specificName);