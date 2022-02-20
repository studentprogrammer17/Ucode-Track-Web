// class Building {
//     constructor(floors, material, address) {
//         this.floors = floors;
//         this.material = material;
//         this.address = address;
//     }
//     toString() {
//         return [
//             `Floors: ${this.floors}`,
//             `Material: ${this.material}`,
//             `Address: ${this.address}`,
//         ].join('\n');
//     }
// };


class Tower extends Building {
    constructor(...args) {
        super(...args);
    }

    getFloorHeight() {
        return this.height / this.floors;
    }
    isElevator(hasElevator) {
        if (hasElevator == true) {
            hasElevator = "+";
        }
        else {
            hasElevator = "-";
        }
        return hasElevator;
    }

    toString() {
        return [
            `Floors: ${this.floors}`,
            `Material: ${this.material}`,
            `Address: ${this.address}`,
            `Elevator: ${this.isElevator(this.hasElevator)}`,
            `Arc reactor capacity: ${this.arcCapacity}`,
            `Height: ${this.height}`,
            `Floor height: ${this.getFloorHeight()}`,
        ].join('\n');
    }
}


// tests

// const starkTower = new Tower(93, 'Different', 'Manhattan, NY');
// starkTower.hasElevator = true;
// starkTower.arcCapacity = 70;
// starkTower.height = 1130;
// console.log(starkTower.toString());


