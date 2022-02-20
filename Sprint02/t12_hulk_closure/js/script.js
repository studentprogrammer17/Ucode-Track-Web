function concat(...args) {
    getPrompt.count = 0;
    if (arguments.length == 1) {
        return getPrompt;
    }
    if (arguments.length == 2) {
        return args[0] + ' ' + args[1];
    }
    function getPrompt() {
        let str2 = prompt("Enter string: ");
        if (str2 == null) {
            return args[0];
        }
        getPrompt.count++;
        return args[0] + ' ' + str2;
    }
}


// let phrase1 = concat("Hulk", "smash!");
// let output = phrase1;
// console.log(output); // Hulk smash!
// let phrase2 = concat("Leave");
// output = phrase2();
// // a prompt appears. Enter "Hulk alone!" into the prompt
// console.log(output); // Leave Hulk alone!
// console.log(phrase2.count); // 1
// output = phrase2();
// // a prompt appears. Enter "me alone, please!" into the prompt
// console.log(output); // Leave me alone, please!
// output = phrase2();
// // a prompt appears. Enter "HULK ALONE!" into the prompt
// console.log(output); // Leave HULK ALONE!
// console.log(phrase2.count); // 3
// let phrase3 = concat("Go");
// output = phrase3();
// // a prompt appears. Enter "away!" into the prompt
// console.log(output); // Go away!
// console.log(phrase3.count); // 1
// console.log(phrase2.count); // 3
