let beginRange = prompt("Insert the first number (beging of range) (from 1 to 100): ");
let endRange = prompt("Insert the second number (end of range) (from 1 to 100): ");

while(beginRange.match(/^[0-9]+$/) == null || beginRange > 100 || beginRange < 1) {
    beginRange = prompt("Insert the first number (begining of range) (from 1 to 100): ");
}

while(endRange.match(/^[0-9]+$/) == null || endRange > 100 || endRange < 1) {
    endRange = prompt("Insert the second number (end of range) (from 1 to 100): ");
}

checkDivision(beginRange,endRange);

function checkDivision(a,b) {
    for(let i = a; i <= b; i++) {
        if(i % 2 == 0 && i % 3 == 0 && i % 10 == 0) {
            console.log(i + " is even, a multiple of 3, a multiple of 10\n");
        }
        else if(i % 2 == 0 && i % 3 == 0) {
            console.log(i + " is even, a multiple of 3\n");
        }
        else if(i % 2 == 0 && i % 10 == 0) {
            console.log(i + " is even, a multiple of 10\n");
        }
        else if(i % 3 == 0 && i % 10 == 0) {
            console.log(i + " is a multiple of 3, a multiple of 10\n");
        }
        else if(i % 2 == 0) {
            console.log(i + " is even\n");
        }
        else if(i % 3 == 0) {
            console.log(i + " is multiple of 3\n");
        }
        else if(i % 10 == 0) {
            console.log(i + " is multiple of 10\n");
        }
        else {
            console.log(i + " -\n");
        }
    }
}
