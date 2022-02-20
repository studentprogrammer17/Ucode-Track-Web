let letters = /^[A-Za-z]+$/;
let animal = prompt("What animal is the superhero most similar to?");
let gender;
let age;
while(animal.length >= 20 || animal.indexOf(' ') >= 0 || !(animal.match(letters))) {
    animal = prompt("name must containts max 20characters no whitespaces and only letters");
}

gender = prompt("Is the superhero male or female? Leave blank if unknown or other.");
if(gender.localeCompare("male") == 0 || gender.localeCompare("female") == 0 || gender.localeCompare("") == 0 ) {
    age = prompt("How old is the superhero?");
    while(age.length >= 5 || animal.indexOf(' ') >= 0 || age.match(/^[0-9]+$/) == null || age.startsWith("0")) {
        age = prompt("How old is the superhero?");
    }
    if(gender.localeCompare("male") == 0 && age < 18) {
        alert("The superhero name is: " + animal + "-" + "boy")
    }
    else if(gender.localeCompare("male") == 0 && age >= 18) {
        alert("The superhero name is: " + animal + "-" + "man")
    }
    else if(gender.localeCompare("female") == 0 && age < 18) {
        alert("The superhero name is: " + animal + "-" + "girl")
    }
    else if(gender.localeCompare("female") == 0 && age >= 18) {
        alert("The superhero name is: " + animal + "-" + "woman")
    }
    else if(gender.localeCompare("") == 0 && age < 18) {
        alert("The superhero name is: " + animal + "-" + "kid")
    }
    else if(gender.localeCompare("") == 0 && age >= 18) {
        alert("The superhero name is: " + animal + "-" + "hero")
    }
    else {
        alert("Who the hell are you?")
    }
}
else {
    alert("Bad input");
}


