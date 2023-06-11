const addToLocalStorage = () => {
    const idInput = document.getElementById('storage-id');
    const id = idInput.value;
    const valueInput = document.getElementById('storage-value');
    const value = valueInput.value;
    if(id && value){
        localStorage.setItem(id, value);
    }
    idInput.value = '';
    valueInput.value = '';
}

// add array to local storage 
const friendsAge = [22, 23, 21, 25, 27];
const friendsAgeStr = JSON.stringify(friendsAge);
localStorage.setItem('friendsAge', friendsAgeStr);

// add object to local storage 
const product = {
    name: 'Keyboard', 
    color: 'black', 
    price: 1000,
    brand: 'logitech',
};
const productStr = JSON.stringify(product);
localStorage.setItem('product', productStr); 

// get array from local storage 
const item = localStorage.getItem('product');
const itemObj = JSON.parse(item);
// console.log(itemObj);

// get object from local storage 
const numbers = localStorage.getItem('friendsAge');
const numbersArr = JSON.parse(numbers);
// console.log(numbersArr);

localStorage.clear();

