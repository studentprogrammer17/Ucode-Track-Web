let prev = 1;
function step_generator() {
    while (true) {
        let temp = prompt("Previous result: " + prev +  " Enter a new number: ");
        if (prev > 10000) {
            prev = 1;
        }
        else if (!Number.isNaN(temp)) {
            prev += (+temp);
        }
        else {
            console.error('Invalid number!');
            prev = 1;
        }
    }
}

step_generator();

