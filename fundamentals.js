// 1. How to declare a variable using let and const
const father = 'Monasef Mia';
let season = "Winter";
season = "summer";

// 2. conditions
// 6 basic conditions: >,<, ===, !==, <=, >= 
if(father === 'Monasef Mia'){

}
else if (season === "summer"){

}
else {

}
// multiple conditions: &&, ||
if(father === 'Monasef Mia' && season === "summer"){

}
else {
    
}

// 3. array declare
// index, 
// length, push, 
const friends = ['alia', 'kalia', 'laliga'];
friends[0] = 'habiba';

// console.log(friends.length);
// friends.push('rabeya');
// friends.pop();
// console.log(friends);

// 4. for loop 
for(let i = 0; i < friends.length; i++){
    const friend = friends[i];
    // console.log(friend);
}

// 5. function 
function multiply(num1, num2){
    const result = num1 * num2;
    return result;
}
const total = multiply(12, 12);
console.log(total);


// 6. Object
// 3 ways to access property by name 
// direct by property
// access via property name string 
// access via property name in a variable
const student = {
    name: "Amin",
    age: 22
}
const name = "name";
// console.log(student.name);
// console.log(student["name"]);
// console.log(student[name]);

