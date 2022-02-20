function copyObj(obj) {
    let copy = {};
    for(let i in obj) {
        copy[i] = obj[i];
    }
    return copy;
}

// test
const user = {
    name: 'Steve',
    surname: 'Rogers',
    age: 101,
    city: 'New York'
};

console.log(user);
let copy = copyObj(user);
console.log(copy);

