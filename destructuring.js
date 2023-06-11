// 1. array destructuring
const numbers = [42, 65];
// const x = numbers[0];
// const y = numbers[1];

// const [x, y] = [42, 65];
const [x, y] = numbers;
// console.log(x, y);

function boxify(num1, num2) {
    const nums = [num1, num2];
    return nums;
}
const [first, second] = boxify(10, 20);
// console.log(first, second);

const nayok = {
    name: 'Anata Jalil', 
    age: 16, 
    movies: ['buker vitor agun', 'jibonta bedona', 'bidai fitibi'],
}
const [movie1, movie2] = nayok.movies;
// console.log(movie1, movie2);


// 2. object destructuring
const student = {
    name: 'Borsha', 
    age: 12, 
    movies: ['kala pakhi', 'glamour girl', 'oviram drama'],
};
const {name, age} = student;
// console.log(name, age);

const [firstM, secondM] = student.movies;
// console.log(firstM, secondM);

const employee = {
    ide: 'VS Code',
    designation: 'developer',
    machine: 'mac',
    languages: ['html', 'css', 'js'],
    specification: {
        height: 66,
        weight: 67,
        address: 'kumarkhali',
        drink: 'water',
        watch: {
            color: 'black',
            price: 500,
            brand: 'garmin'
        }
    }
}

const {ide, machine} = employee;
// console.log(ide, machine);

const {address, weight} = employee.specification;
// console.log(address, weight);

const {brand} = employee?.specification?.watch;
console.log(brand);

