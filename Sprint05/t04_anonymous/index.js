const getAnonymous = class {
        constructor(a,b,c) {
            this.a = a;
            this.b = b;
            this.c = c;
        }
        get name() {
            return this.a;
        }
        get allias() {
            return this.b;
        }
        get affiliaton() {
            return this.c;
        }
    }


module.exports.getAnonymous = getAnonymous;

