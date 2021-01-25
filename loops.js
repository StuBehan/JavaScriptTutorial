var age = 5;

while(age < 10) {
    console.log("Your age is less than 10.");
    age++;
}

document.write("You are now over 10.");

for(anotherAge = 5; anotherAge < 10; anotherAge++){
    console.log("Your age is less than 10.")
}

document.write("You are now over 10.");

var links = document.getElementsByTagName("a");

for(i = 1; i < links.length; i++){
    console.log("this is the number of links " + i);
}

document.write("This is the total number of links " + i)