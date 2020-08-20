let adn1 = "CCGUCGUUGCGCUACAGC";
let adn2 = "CCUCGCCGGUACUUCUCG";
let aminoAcid = {
  serine: ["UCU", "UCC", "UCA", "UCG", "AGU", "AGC"],
  proline: ["CCU", "CCC", "CCA", "CCG"],
  leucine: ["UUA", "UUG"],
  phenylalaline: ["UUU", "UUC"],
  arginine: ["CGU", "CGC", "CGG","CGA", "AGA", "AGG"],
  tyrosine: ["UAU", "UAC"]
};

//Let's cut them!
let adn1Cut = adn1.match(/.{1,3}/g);
let adn2Cut = adn2.match(/.{1,3}/g);

function adn(x){
  let adnT = new Array;
  x.forEach(codon => {
    Object.keys(aminoAcid).forEach(key => {
      aminoAcid[key].forEach(value => {
        if(codon == value){
          adnT.push(" " + value + " : " + key)
        };
      });
    });
  });
  console.log("Résultat : " + adnT);
};
