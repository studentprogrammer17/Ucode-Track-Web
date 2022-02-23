const EatException = require("./eat-exception");
const Product = require("./product");

module.exports = class Ingestion extends Product {
    constructor(meal_type, id) {
        super();
        this.id = id;
        this.meal_type = meal_type;
        this.day_of_diet;
        this.products;
      }

      getFromFridge(product) {
          if(this.products[product].kcal_per_portion > 200) {
              throw new EatException(`Too many calories in ${product} for ${this.meal_type}`)
          }
      }

      set products(value) {
        this._products[value.name] = value;
      }

      setProduct(value) {
        this._products = value;
      }

      get products() {
          return this._products;
      }

      getProductInfo() {
            return this.products;
      }
    
}

