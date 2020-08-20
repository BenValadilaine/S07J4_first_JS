///fonction factorielle
function factor() {
  let result = 1;
  let yourNumber = 1;
  let inputNumber = 1;
  function factorielle(inputNumber) {
    while(inputNumber !== 0){
      result = result*inputNumber;
      inputNumber--
    }
  }
  yourNumber = prompt("De quel nombre veux-tu calculer la factorielle ?")
  factorielle(yourNumber);
  console.log(result);
}
