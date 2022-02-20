class HardWorker {
    constructor(name,age,salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
        
    }

    set age(value) { // setter // here check range age
        if (value < 0 || value > 100) {
            this._age = 0;
        } else {
            this._age = value;
        }
    }


    set salary(value) { // setter // here check range salary
        if (value < 100 || value > 10000) {
            this._salary = 100;
        } else {
            this._salary = value;
        }
    }

    get age() { // getter
        return this._age;
    }

    get salary() { // getter
        return this._salary;
    }

    toObject() {
        const worker = {
            name: this.name,
            age: this.age,
            salary: this.salary,
        };
        return worker;
    }
}

export { HardWorker };

// tests

// worker = new HardWorker;

// worker.name = 'Bruce';
// console.log(worker.name);

// worker.age = 20;
// worker.salary = 1000;
// console.log(worker.toObject());

// worker.name = 'Linda';
// worker.age = 140;
// console.log(worker.toObject());
