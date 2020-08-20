function books(){
const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];
// -----------------------------------------------------------------------------
console.log("Est-ce que tous les livres ont déjà été loué ?")
let rentedCount = 0;
books.forEach(content => {
  if(content.rented > 0){
    rentedCount ++
  }
});

if(books.length == rentedCount){
  console.log(" -> Tous les livres ont été loués au moins une fois.")
} else{console.log("Certains livres n'ont jamais été loués."
)};

// -----------------------------------------------------------------------------
console.log("Quel est le livre le plus/moins emprunté ?")
let booksSorted = books;
booksSorted.sort(function(a, b){
  return a.rented - b.rented;
});   // numeric descending sort
let lastBook = booksSorted.length -1 ;
console.log(typeof(lastBook));
console.log("Le livre le plus emprunté est : " + booksSorted[lastBook].title);
console.log("Le livre le moins emprunté est : " + booksSorted[0].title);

// -----------------------------------------------------------------------------
console.log("Quel est le livre avec l'id 873495 ?");
let found = books.find(book => book.id == 873495);
console.log(" -> " + found.title + " est le livre avec l'id " + found.id);

// -----------------------------------------------------------------------------
let copyBooks = books;
delete copyBooks[copyBooks.findIndex(book => book.id == 133712)];
console.log(copyBooks)


// -----------------------------------------------------------------------------
console.log("Trie les livres par ordre alphabétique");
let booksTitle = new Array
copyBooks.forEach(book => {
  booksTitle.push(book.title)
});
booksTitle.sort();
console.log(booksTitle);
}
