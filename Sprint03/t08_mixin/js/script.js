// import { HouseBuilder } from './js/houseBuilder.js';
// var customer=new Customer();

function houseBlueprint(address,description,owner,size)  {
    this.address = address;
    this.date = new Date();
    this.description = description;
    this.owner = owner;
    this.size = size;
    this._averageBuildSpeed = 0.5;

    this.getDaysToBuild = () => {
        return this.size / this._averageBuildSpeed;
    }
}

class HouseBuilder {
    constructor(address,description,owner,size, roomCount) {
        this.roomCount = roomCount;
        houseBlueprint.call(this,address,description,owner,size);
    }
}

function rot13(str) { // encryption
    var input     = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var output    = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
    var index     = x => input.indexOf(x);
    var translate = x => index(x) > -1 ? output[index(x)] : x;
    return str.split('').map(translate).join('');
  }

const houseMixin = {
    wordReplace(s1,s2) {
        this.description = this.description.replace(s1, s2);
    },
    wordInsertAfter(s1,s2) {
        this.description = this.description.replace(s1, (s1 + " " + s2));
    },
    wordDelete(s1) {
        this.description = this.description.replace(s1, "");
    },
    wordEncrypt(s1) {
        this.description = rot13(this.description);
    },
    wordDecrypt(s1) {
        this.description = rot13(this.description);
    },
}


// test

// const house = new HouseBuilder('88 Crescent Avenue',
// 'Spacious town house with wood flooring, 2-car garage, and a back patio.',
// 'J. Smith', 110, 5);

// Object.assign(house, houseMixin);

// console.log(house.getDaysToBuild()); 
// // 220
// console.log(house.description);
// // Spacious town house with wood flooring, 2-car garage, and a back patio.

// house.wordReplace("wood", "tile");
// console.log(house.description);
// // Spacious town house with tile flooring, 2-car garage, and a back patio.

// house.wordDelete("town ");
// console.log(house.description);
// // Spacious house with tile flooring, 2-car garage, and a back patio.

// house.wordInsertAfter ("with", "marble");
// console.log(house.description);
// // Spacious house with marble tile flooring, 2-car garage, and a back patio.

// house.wordEncrypt();
// console.log(house.description);
// // Fcnpvbhf ubhfr jvgu zneoyr gvyr sybbevat, 2-pne tnentr, naq n onpx cngvb.

// house.wordDecrypt();
// console.log(house.description);
// // Spacious house with marble tile flooring, 2-car garage, and a back patio.
