///fonction factorielle
function factor() {
  let result = 1;
  function factorielle(input) {
    while(input !== 0){
      result = result*input;
      input--
    }
  }
  let yourNumber = prompt("De quel nombre veux-tu calculer la factorielle ?")
  factorielle(yourNumber);
  console.log(result);
}
