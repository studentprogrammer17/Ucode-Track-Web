module.exports = class Access {
    constructor(){
        if (!this.mark_LXXXV) {
            return this.mark_LXXXV = "undefined";
        }
        else if (this.mark_LXXXV == 'null' || this.mark_LXXXV == null) {
            return this.mark_LXXXV = "null";
        }
        else {
            return this.mark_LXXXV;
        }
      }
}

