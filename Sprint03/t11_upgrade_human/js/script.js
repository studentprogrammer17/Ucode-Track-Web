let letters = RegExp('^[a-zA-Z]+$');

function setFirstName(name) {
    let firstName = document.getElementById('firstName');
    if(name == undefined) {
        while(firstName.innerText == "" || firstName.innerText == null) {
            firstName.innerText = prompt("What's your first name? ");
            if (firstName.innerText.length > 20 || !letters.test(firstName.innerText)) {
                alert("Insert only letters and no more than 20");
                firstName.innerText = null;
            }
        }
    }
    else {
        firstName.innerText = name;
    }
    return firstName.innerText;
}

function setLastName(name) {
    let lastName = document.getElementById('lastName');
    if(name == undefined) {
        while(lastName.innerText == "" || lastName.innerText == null) {
            lastName.innerText = prompt("What's your last name?");
            if (lastName.innerTextlength > 20 || !letters.test(lastName.innerText)) {
                alert('ERROR: Accepts only one word, which consists only of Latin letters and its length does not exceed 20 characters.');
                lastName.innerText = null;
            }
        }
    }
    else lastName.innerText = name;
    console.log(`lastName set to ${lastName.innerText}`);
    return lastName.innerText;
}

function setGender() {
    let gender = document.getElementById('gender');
    while(gender.innerText === "" || gender.innerText === null) {
        gender.innerText = prompt("Is your hero male or female?");
        let regex = RegExp('^male$|^female$|^$', 'i');
        if (!regex.test(gender.innerText)) {
            alert('ERROR: Accepts only male, female gender!');
            gender.innerText = null;
        }
    }
    console.log(`gender set to ${gender.innerText}`);
    return gender.innerText;
}

function setAge() {
    let age = document.getElementById('age');
    while(age.innerText === "" || age.innerText === null) {
        age.innerText = prompt("What's the age of your hero?");
        let regex = RegExp(/^[1-9]|[0-9]{0,4}$/)
        if (age.innerText.length > 2 || !regex.test(age.innerText)) {
            alert('ERROR: Accepts only digits, cannot start with a zero, no more than 3 characters!');
            age.innerText = null;
        }
    }
    console.log(`age set to ${age.innerText}`);
    return age.innerText;
}

function setCalories(calories) {
    let cl = document.getElementById('calories');
    cl.innerText = calories;
    console.log(`calories set to ${cl.innerText}`);
    return cl.innerText;
}




class Human {
    constructor(options) {
        this.firstName = options.firstName;
        this.lastName = options.lastName;
        this.gender = options.gender;
        this.age = options.age;
        this.calories = options.calories ;
        this.img = options.img;
        this.hero = false;
    }
    sleepFor() {
        document.querySelector('#info').innerHTML = "I'm sleeping";
    }
    feed() {
        document.querySelector('#info').innerHTML = "Nom nom nom";
    }
}

class Superhero extends Human{
    fly() {
        document.querySelector('#info').innerHTML = `I'm reloading`;
        setTimeout(()=> {
            document.querySelector('#info').innerHTML = "Oracle";
            document.querySelector('img').src = 'assets/images/oracle.jpeg';
        }, 10000);
    }
    fight () {
        document.querySelector('#info').innerHTML ="Khhhh-chh..." + "Bang-g-g-g... Evil is defeated!";
    }
}

let human = new Human({
    firstName: setFirstName(),
    lastName: setLastName(),
    gender: setGender(),
    age: setAge(),
    calories: setCalories(600),
    hero: false
});
let superhero = new Superhero(human);

document.querySelector('img').src = 'assets/images/fresko.jpeg';
document.querySelector('#fly').disabled = true;
document.querySelector('#fight').disabled = true;

setTimeout(() => {
    loop()
}, 5000);
setInterval(loop, 60000);

function loop() {
    if (superhero.hero === false) 
    {
        if (human.calories > 0) {
            human.calories -= 200;
            setCalories(human.calories);
        }
        if (human.calories < 500)
            document.querySelector('#info').innerHTML = "I'm still hungry";
    }
    else {
        if (superhero.calories > 0) {
            superhero.calories -= 200;
            setCalories(superhero.calories);
        }
        if (superhero.calories < 500)
            document.querySelector('#info').innerHTML = "I'm still hungry";
    }
}

function hero() {
    if(human.hero === false) {
        if(human.calories > 500) {
            setFirstName("Oracle");
            setLastName("The Destroyer");
            superhero.hero = true;
            human.hero = true;
            superhero.calories = human.calories;
            document.querySelector('img').src = 'assets/images/oracle.jpeg';
            document.querySelector('#info').innerHTML = "Oracle";
            document.querySelector('#hero').innerText = 'Back to human';
            enableButtons();
            console.log(`human extended to superhero`);
        }
        else {
            document.querySelector('#info').innerHTML = "Not enough calories";
            console.log(`FAIL: human extended to superhero`);
        }
    }
    else if (superhero.hero === true) {
        setFirstName(human.firstName);
        setLastName(human.lastName);
        superhero.hero = false;
        human.hero = false;
        human.calories = superhero.calories;
        document.querySelector('#info').innerHTML = "I'm human";
        document.querySelector('img').src = 'assets/images/fresko.jpeg';
        document.querySelector('#hero').innerText = 'Oracle!';
        document.querySelector('#fly').disabled = true;
        document.querySelector('#fight').disabled = true;
        console.log(`superhero decreased to human`);
    }
}

function feed() {
    if (superhero.hero === false) {
        if (human.calories < 500) {
            human.feed()
            disableButtons();
            setTimeout(() => {
                human.calories += 200;
                setCalories(human.calories);
                document.querySelector('img').src = 'assets/images/fresko.jpeg';
                document.querySelector('#info').innerHTML = "I'm Fresko";
                enableButtons();
            }, 10000)
            console.log(`feeding successful`);
        }
        else {
            document.querySelector('#info').innerHTML = "I am not hungry";
            console.log(`feeding failed`);
        }
    }
    else {
        if (superhero.calories < 500) {
            superhero.feed()
            disableButtons();
            setTimeout(() => {
                superhero.calories += 200;
                setCalories(superhero.calories);
                document.querySelector('img').src = 'assets/images/oracle.jpeg';
                document.querySelector('#info').innerHTML = "Oracle!";
                enableButtons();
            }, 10000)
            console.log(`feeding successful`);
        } 
        else {
            document.querySelector('#info').innerHTML = "I am not hungry";
            console.log(`feeding failed`);
        }
    }
}

function sleep() {
    if (superhero.hero === false) {
        // document.querySelector('img').src = 'assets/images/sleeping.gif';
        disableButtons();
        human.sleepFor();
        setTimeout(() => {
            document.querySelector('#info').innerHTML = "I'm awake now";
            setTimeout(() => {
                document.querySelector('img').src = 'assets/images/fresko.jpeg';
                document.querySelector('#info').innerHTML = "I'm human";
                enableButtons();
            },2000);
        },10000);
        console.log(`sleeping successful`);
    }
    else {
        disableButtons();
        superhero.sleepFor();
        setTimeout(() => {
            document.querySelector('#info').innerHTML = "I'm awake now";
            setTimeout(() => {
                document.querySelector('#info').innerHTML = "Ready to rock!";
                enableButtons();
            },2000);
            enableButtons();
        },10000);
        console.log(`sleeping successful`);
    }
}

function fly() {
    superhero.fly();
    disableButtons();
    setTimeout(() => {
        document.querySelector('#info').innerHTML = "Oracle!"
        enableButtons();
    },10000);
    console.log(`flying successful`);
}

function fight() {
    document.querySelector('img').src = 'assets/images/oracle.jpeg';
    superhero.fight();
    disableButtons();
    setTimeout(() => {
        document.querySelector('#info').innerHTML = "Oracle!"
        enableButtons();
    },10000);
    console.log(`fighting successful`);
}



function disableButtons() {
    document.querySelector('#feed').disabled = true;
    document.querySelector('#sleep').disabled = true;
    document.querySelector('#hero').disabled = true;
    document.querySelector('#fly').disabled = true;
    document.querySelector('#fight').disabled = true;
}

function enableButtons() {
    document.querySelector('#feed').disabled = false;
    document.querySelector('#sleep').disabled = false;
    document.querySelector('#hero').disabled = false;
    document.querySelector('#fly').disabled = false;
    document.querySelector('#fight').disabled = false;
}