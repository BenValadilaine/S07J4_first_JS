const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

// --------------------------------------------------------------------
console.log("Les entrepreneurs qui sont nés dans les années 1970 :");
entrepreneurs.forEach(content =>{
  if (content.year >= 1970 && content.year < 1980){
  console.log(content.year);
  }
});

// --------------------------------------------------------------------
console.log("Prénom et nom des entrepreneurs :");
let fullName = new Array;
entrepreneurs.forEach(content => {
  fullName.push(content.first + " " + content.last);
});
console.log(fullName);
console.log("Type d'objet : " + typeof fullName);

// --------------------------------------------------------------------
console.log("Age des entrepreneurs aujourd'hui :")
entrepreneurs.forEach(content => {
  console.log(content.first + content.last + " : " + (2020 - content.year) + " ans")
});

// --------------------------------------------------------------------
console.log("Les entrepreneurs par ordre alphabétique :")
let fullName2 = new Array;
entrepreneurs.forEach(content => {
  fullName2.push(content.last + " " + content.first);
});
fullName2.sort()
console.log(fullName2)
