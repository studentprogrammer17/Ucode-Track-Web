module.exports = class Avengers {
    constructor(name,allias,gender,age,power) {
        this.name = name;
        this.allias = allias;
        this.gender = gender;
        this.age = age;
        this.power = power;
    }

    toString() {
        return `name: ${this.name} \n gender: ${this.gender} \n age: ${this.age}\n`;
    }
    call() {
        console.log(this.allias.toUpperCase());
        for(let i = 0; i < this.power.length; i++) {
            console.log(this.power[i]);
        }
    }
}

