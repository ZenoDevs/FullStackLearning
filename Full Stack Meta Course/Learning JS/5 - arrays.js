//arrays are objects

var fruits = [];
fruits.push("apple"); // ['apple']
fruits.push('pear'); // ['apple', 'pear']

//To remove the last element you can use pop()

fruits.pop();
console.log(fruits); // ['apple']

//INSIGHT
/* 
in the exercise you can create functions to build up arrays and then instead or printing them
you can return them to further manipulations
*/


// EXERCISE
const clothes = [];
clothes.push('t-shirt');
clothes.push('jeans');
clothes.push('jacket');
clothes.push('Tie');
clothes.push('Shoes');

clothes.pop();
clothes.push('sneakers');
console.log(clothes[2]);

const favCar = {};
favCar.color = 'black';
favCar.convertible = true;

console.log(favCar);

