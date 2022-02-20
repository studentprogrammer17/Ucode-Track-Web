String.prototype.removeDuplicates = function removeDuplicates() {
    let arr = ((this + ' ' + this).trim()).split(/\s+/);  // delete whitespaces
    arr = arr.filter(function(item, pos, self){ // here delete duplicates
        return self.indexOf(item) == pos; 
    }).join(' ');
    return arr;
};


// let str = "Giant Spiders?   What’s next? Giant Snakes?";
// console.log(str);
// // Giant Spiders?   What’s next? Giant Snakes?
// str = str.removeDuplicates();
// console.log(str);
// // Giant Spiders? What’s next? Snakes?
// str = str.removeDuplicates();
// console.log(str);
// // Giant Spiders? What’s next? Snakes?

// str = ". . . . ? . . . . . . . . . . . ";
// console.log(str);
// // . . . . ? . . . . . . . . . . .
// str = str.removeDuplicates();
// console.log(str);
// // . ?
