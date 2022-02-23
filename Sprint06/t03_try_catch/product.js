module.exports = class Product {
    constructor(name,kcal_per_portion) {
        this.name = name;
        this.kcal_per_portion = kcal_per_portion;
    }


    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }



    get kcal_per_portion() {
        return this._kcal_per_portion;
    }

    set kcal_per_portion(value) {
        this._kcal_per_portion = value;
    }
}

