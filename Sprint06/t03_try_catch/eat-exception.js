module.exports = class EatException extends Error {
    constructor(message) {
        super(message)
        this.name = 'No more junk food, dumpling'
        this.message = message
      }
    
}
