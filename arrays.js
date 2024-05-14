const shoppingList = ["milk", "sugar", "rice"];
const numList = [1, 2, 3, 4, 5, 0];

//for each - loop through array
shoppingList.forEach((item) => console.log(`item is ${item}`));
shoppingList.forEach((item, index) => console.log(`item ${index} is ${item} `));

//map - copy and modfy
const newList1 = shoppingList.map((item) => item);
const newList2 = shoppingList.map((item) => item + "-nice");
const newList3 = shoppingList.map((item, index) => item + index);

console.log(newList1);
console.log(newList2);
console.log(newList3);

//filter
const aboveThree = numList.filter((item) => item >= 3);
console.log(aboveThree);
