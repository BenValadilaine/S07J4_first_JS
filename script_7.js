function isUpperCase(str) {
  return str === str.toUpperCase();
}

function fortnite(str){
  return str.toLowerCase().search("fortnite") !== -1;
}
function smalltalk(){
  while (true){
    let input = prompt("Tu as quelque chose à dire ? ");
    // start conversation
    if(input == "") {
      console.log("T'es en PLS ?");
    } else if (fortnite(input)){
      console.log("Ça va j'ai plus 12 ans, me parle pas de ce jeu ...");
    } else if(input.slice(-1) == "?") {
      console.log("Ouais ouais ...");
    } else if (isUpperCase(input)){
      console.log("Pwaaa calme toi ...");
    } else { // Exit conversation
      console.log("Ciao !");
      break;
    };
  };
};
