//slice(elementpoczatkowy, elementkoncowy), do kopiowania fun zwaraca nową tablice
const myArray = [1,2,3,4,5,6,7,8];

const newArray = myArray.slice(5,7);

console.log(myArray);
console.log(newArray);

//Gdy chcemy dostać elementy od 5 do ostaniego, domyslny argument myArray.length
const newArray2 = myArray.slice(5);
console.log(newArray2);


//splice - modyfikuje tablice
//Usuwa wszystko za 5 indeksem
myArray.splice(5);
console.log(myArray);

//Usuwa 2 elementy za 2 indeksem
myArray.splice(2,2);
console.log(myArray);

myArray.push(9,10,11,12,13);
//Usuwa 2 elementy za 2 indeksem
myArray.splice(1, 3, 'r');
console.log(myArray);

