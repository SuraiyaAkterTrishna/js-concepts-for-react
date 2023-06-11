const numbers = [89, 35, 98, 12];
const student = {
    name: 'Salib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
};
// 1. Template string 
const about = `My name is ${student.name} age of ${student.age}, total movies are ${numbers[2]}, and my favorite movie is ${student.movies[1]}`;
// console.log(about);

// 2. arrow function
// without parameter  
const fiftyFive = () => 55;
// console.log(fiftyFive());

// single parameter 
const addSixteen = (number) => number + 16;
// console.log(addSixteen(4));
// multiple parameter 
const multiplication = (x, y, z) => x * y * z;
// console.log(multiplication (11, 1, 11));
// multiline and multiple parameter 
const total = (a, b, c) => {
    const sum = a + b + c; 
    return sum;
}
// console.log(total(1, 2, 3));

// even number 
const even = d => d % 2 === 0;
console.log(even(11));
// 3. spread operator 
const newNumbers = [...numbers];
numbers.push(99);
const newNumber = [...numbers, 23];
// console.log(newNumbers);
// console.log(numbers);
// console.log(newNumber);