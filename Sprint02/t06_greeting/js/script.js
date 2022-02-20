let letters = /^[A-Za-z]+$/;
let = first_name = prompt("Enter your first name: ");
let error = false;

if(first_name.length >= 20 || first_name.indexOf(' ') >= 0 || !(first_name.match(letters))) {
    console.log("Wrong input!");
    alert("Wrong input!");
    error = true;
}

let = last_name = prompt("Enter your last name: ");

if(last_name.length >= 20 || last_name.indexOf(' ') >= 0 || !(last_name.match(letters))) {
    console.log("Wrong input!");
    alert("Wrong input!");
    error = true;
}

if(error == false) {
    let capitalizeFirstName = first_name.charAt(0).toUpperCase() + first_name.slice(1);
    let capitalizeLastName = last_name.charAt(0).toUpperCase() + last_name.slice(1);

    alert("Hello, " + capitalizeFirstName + " " + capitalizeLastName);
    console.log("Hello, " + capitalizeFirstName + " " + capitalizeLastName);
}

