///pyramide mario
let number;
number = prompt("Choisissez un nombre:");
let hashtag = "#";
let space = " ";
let counter = 1;
while (number > 0) {
    console.log(space.repeat(number) + hashtag.repeat(counter));
    counter++;
    number--;
}
