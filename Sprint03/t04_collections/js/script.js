const guestList = new Set(); // create Set

// add guests to Set
guestList.add('Diman'); // add element to set
guestList.add('Sanya');
guestList.add('Artem');
guestList.add('Kostya');
guestList.add('Bebra');

// Tests for guestList

console.log("Guest list - Collection: Set")
guestList.delete('Diman'); // delete from Set
for(let el of guestList) { // iterate over elements of Set
    console.log(el);
}

guestList.clear(); // clear set
for(let el of guestList) {
    console.log(el);
}

console.log("Is Dima in Set? " +  guestList.has('Dima')); // check if elements in Set

console.log("Size of Set: " + guestList.size); // size of set



console.log("\nMENU - Collection: MAP")
const menu = new Map(); // Create Map ( unique )
menu.set('Borsht','2$'); // add key and value to Map
menu.set('Kotletka','3$');
menu.set('Okroshka','1.5$');
menu.set('Pizza','4$');

for(let el of menu) {
    console.log(el); // iterate at map
}



console.log("Borsht has price: " + menu.get('Borsht')); // return value by key
menu.delete('Borsht'); // delete element from Set
menu.size; // size of set
menu.delete('Borsht'); // delete from Set
menu.clear(); // clear Set



console.log("\nBank Vault - Collection: WEAK MAP")
const bankVault = new WeakMap();
let obj1 = {}; // create objects
let obj2 = {};
let obj3 = {};
let obj4 = {};
bankVault.set(obj1, '500$'); // add object to set and get them a value
bankVault.set(obj2, '11500$');
bankVault.set(obj3, '20$');
bankVault.set(obj4, '900$');

// Weak map is not iterable
console.log(bankVault);

console.log("This user has money: " + bankVault.get(obj1)); // return value by key
bankVault.delete(obj2); // delete element from Weak Set
bankVault.size; // size of Weak set



console.log("\nCoin Collection - Collection: WEAK SET")
const coinCollection = new WeakSet(); // unique

let coin_1 = { name: "Grivna" }; // create object
let coin_2 = { name: "Rubl" };
let coin_3 = { name: "Dollar" };
let coin_4 = { name: "Euro" };

coinCollection.add(coin_1); // add an object to set
coinCollection.add(coin_2);
coinCollection.add(coin_3);
coinCollection.add(coin_4);

console.log("is grivna exists in weak set? " + coinCollection.has(coin_1)); // true
coinCollection.delete(coin_2); // delete rubl
console.log(coinCollection);
