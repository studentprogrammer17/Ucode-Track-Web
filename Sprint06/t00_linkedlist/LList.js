// const LLData = require("./LLData");

class LLData {
    constructor(data,next = null) {
        this.data = data;
        this.next = next;
    }
}



module.exports = class LList  {
    constructor(head) {
        this.head = null; // link to the first node in List
        this.length = 0; // length
    }

    getFirst() {
        return this.head.data;
    }

    getLast() {
        if (!this.head) {
            return null;
        }
        let node = this.head;
        while (node) {
            if (!node.next) {
                return node;
            }
        node = node.next; 
       }
    }

    add(value) {
        let node = new LLData(value); 

        if (this.length === 0) {
            this.head = node; 
        } else {
            let current = this.head;
    
            while(current.next) {
                current = current.next;
            }
    
            current.next = new LLdata(value);
        }
    
        this.length++;
    }

    addFromArray(arr) {
        for(let i = 0; i < arr.length; i++) {
            this.data = add(arr[i]);
            this.data.next;
        }
    }

    filter = (element) => {
        let curr = this.head;
        while (curr) {
            element = true;
            curr = curr.next;
        }
    } 

    removeAll(value) {
        let tmp = this.head.data;
        
        while (head.data == value) {
            head = head.next;
        }
        while (tmp.next != null) {
            if (tmp.next.data == value) {
                tmp.next = tmp.next.next;
            }
            else {
                tmp = tmp.next;
            }
        }
        return head;
    }

    count() {
        return this.length;
    }
    clear() {
        this.head = null;
    }

    remove(el) {
        if (this.head.data == el) {
            this.head = this.head.next;
            this.length--;
            return true;
        } 
        else {
            for (let q = this.head; q.next; q = q.next) {
                if (q.next.data == el) {
                    q.next = q.next.next;
                    this.length--;
                    return true;
                }
            }
            return false;
        }
    }
    contains(value) {
        var curr = this.head;
        var str = "";
        while (curr) {
            if (curr.data == value) {
                return true;
            }
            curr = curr.next;
        }
        return false;
    }
    [Symbol.iterator] = function() {
        let current = this.head;
        return {
            next() {
                if (current) {
                    let value = current.data;
                    current = current.next;
                    return {value: value, done: false};
                }
                return {done: true};
            }
        };
    };
    getIterator() {
        for(let current = this.head.data; current != null; current = current.next) {
            // yield current.data;
        }
    }
    toString() {
        var curr = this.head;
        var str = "";
        while (curr) {
            str += curr.data + ", ";
            curr = curr.next;
        }
        console.log(str);
    }
}

