// 1. JSON (stringify, parse)
/* const student = {
    name: 'Sakib Khan',
    age: 56,
    movies: ['king khan', 'Dhakar Mastan']
}
const studentJSON = JSON.stringify(student);
console.log(studentJSON);

const studentObject = JSON.parse(studentJSON);
console.log(studentObject); */

// 2. fetch, async await 
// const url = `https://jsonplaceholder.typicode.com/users`;
/* fetch(url)
.then(res => res.json())
.then(data => console.log(data)); */

/* const loadData = async() => {
    const url = `https://jsonplaceholder.typicode.com/users`;
    const res = await fetch(url);
    const data = res.json();
    console.log(data);
} */

// 3. keys, values
/* const student = {
    name: 'Sakib Khan',
    age: 56,
    movies: ['king khan', 'Dhakar Mastan']
}
const keys = Object.keys(student);
const values = Object.values(student);
console.log(keys, values); */

// for 
/* const numbers = [23, 54, 67, 87, 23, 78];
numbers.forEach(num => console.log(num));
numbers.map(num => num * 2);

for of on array like object
loop on an object using for in  */

// 4. add or remove from an array
const products = [
    { name: 'laptop', price: 3200, brand: 'len', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'HTC', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sungalss', price: 300, brand: 'ray', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];
const newProduct = { name: 'webcam', price: 700, brand: 'Lal' };
const newProducts = [...products, newProduct];  // copy products array and then add newProduct 
// console.log(newProducts);

// create a new array without one specific item 
// remove phone means create a new array without the phone
const remaining = products.filter(product => product.name !== 'phone');
console.log(remaining);

