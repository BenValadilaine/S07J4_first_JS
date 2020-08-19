let adn1 = "CCGUCGUUGCGCUACAGC";
let adn2 = "CCUCGCCGGUACUUCUCG";
let aminoAcid = {
  serine: ["UCU", "UCC", "UCA", "UCG", "AGU", "AGC"],
  proline: ["CCU", "CCC", "CCA", "CCG"],
  leucine: ["UUA", "UUG"],
  phenylalaline: ["UUU", "UUC"],
  arginine: ["CGU", "CGC", "CGA", "AGA", "AGG"],
  tyrosine: ["UAU", "UAC"],
};

//Let's cut them!
let adn1cut = adn1.match(/.{1,3}/g);
console.log("adn1 : " + adn1cut)
let adn2cut = adn2.match(/.{1,3}/g);
console.log("adn2 : " + adn2cut)

aminoAcid.forEach(amino => {
  if (amino.includes(adn1)){
// vérifier s'il y a une séquence d'acide aminé contenu dans l'adn1
  }
});
