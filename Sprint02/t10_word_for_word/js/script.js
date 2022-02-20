function addWords(obj, wrds){
    let arr = ((obj.words + ' ' + wrds).trim()).split(/\s+/); // here we delete extra white spaces
    arr = arr.filter(function(item, pos, self){ // here delete duplicates
        return self.indexOf(item) == pos; 
    });
    obj.words = arr.join(' '); // join strings
    return obj;
}

function removeWords(obj, wrds){
    let arr = ((obj.words + ' ' + wrds).trim()).split(/\s+/);
    let to_remove = ((wrds + ' ' + wrds).trim()).split(/\s+/);
    arr = arr.filter(function(item, pos, self){ // here delete duplicates
        return self.indexOf(item) == pos; 
    });
    to_remove = to_remove.filter(function(item, pos, self){ // here delete duplicates
        return self.indexOf(item) == pos; 
    });

    for(let el of to_remove) {
        if(arr.indexOf(el) === -1) {
            el = 0;
        }
        else {
            el = arr.splice(arr.indexOf(el), 1);
        }
    }

    obj.words = arr.join(" ");  
    return obj;
}

function changeWords(obj, oldWrds, newWrds){
    let arr = ((obj.words + ' ' + oldWrds).trim()).split(/\s+/);
    let arrOld = ((oldWrds + ' ' + oldWrds).trim()).split(/\s+/);
    let arrNew = ((newWrds + ' ' + newWrds).trim()).split(/\s+/);

    arr = arr.filter(function(item, pos, self){ // here delete duplicates
        return self.indexOf(item) == pos; 
    });
    arrOld = arrOld.filter(function(item, pos, self){ // here delete duplicates
        return self.indexOf(item) == pos; 
    });
    arrNew = arrNew.filter(function(item, pos, self){ // here delete duplicates
        return self.indexOf(item) == pos; 
    });


    for(let el of arrOld) {
        if(arr.indexOf(el) === -1) {
            el = 0;
        }
        else {
            el = arr.splice(arr.indexOf(el), 1);
        }
    }

    obj.words = arrNew.join(" ");
}


const obj= {
    words: 'newspapers newspapers  books magazines'
};

console.log(obj); // {words: "newspapers newspapers  books magazines"}

addWords(obj, 'radio newspapers');
console.log(obj); // {words: "newspapers books magazines radio"}

removeWords(obj, 'newspapers   radio');
console.log(obj); // {words: "books magazines"}

changeWords(obj, 'books radio  magazines', 'tv internet');
console.log(obj); // {words: "tv internet"}