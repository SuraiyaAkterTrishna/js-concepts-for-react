// Truthy Value: 'almas', 5, true, {}, []
// Falsy Value: '', 0, false, null, undefined

// check truthy 
// let myNum = 5;
// check any truthy
/* if(myNum){
    myNum *=100;    
}
else{
    myNum = 0;
}
console.log(myNum); */
//check any falsy
/* if(!myNum){
    myNum *=100;    
}
else{
    myNum = 0;
}
console.log(myNum); */

/* let myMoney = 50;
// you check negative or falsy anything
if (!myMoney) {

} */

const money = 810;
const designation = 'developer';
let food; 
/* if(money > 100){
    food = 'biryani';
}
else{
    food = 'cha biscuit';
} */
// console.log(food);

// ternary operator 
let food1 = money > 100 ? 'biryani' : 'cha buscuit';
// console.log(food1);
let drink = (money >= 100 && designation === 'developer') ? 'coke' : 'filter water';
// console.log(drink);

// number to string conversion
/* const firstNumber = 21;
console.log(firstNumber);
const numStr = firstNumber + '';
console.log(numStr); */

// string to number
/* const id = '5467678';
const idNumber = +id;
console.log(idNumber); */

/* let isActive = true;
const showUser = () => console.log('display User');
const hideUser = () => console.log('hide User');
// isActive ? showUser() : hideUser();
// use && if the left side is true then right side will be executed
isActive && showUser();
// use || if the left side is false then right side will be executed
isActive || hideUser(); */

/* toggle boolean
isActive = !isActive; */

