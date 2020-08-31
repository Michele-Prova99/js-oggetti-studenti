// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome ed età.
// Stampare a schermo attraverso il for in tutte le proprietà.
// - Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno nome e cognome.
// - Dare la possibilità all’utente attraverso 3 prompt
// di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

$(document).ready(function(){

  // 1) Creo un oggetto che descriva uno studente

  var studente = {

    "nome": "Harry",

    "cognome": "Potter",

    "eta": 17,

  };

  // 2) Stampo a schermo attraverso il "for in" in tutte le propietà

  for (var key in studente) {

    console.log(studente[key]);

  }

  // 3) Creo un array di oggetti di studenti

  var classe = [

    {

      "nome": "Albus",

      "cognome": "Dumbledore",

      "eta": 115

    },

    {

      "nome": "Severus",

      "cognome": "Snape",

      "eta": 38

    },

    {

      "nome": "Tom",

      "cognome": "Riddle",

      "eta": 71

    },

  ];

  // 3) Ciclo su tutti gli studenti e stampo per ognuno nome e cognome.

  for (var i = 0; i < classe.length; i++) {

    for (var key in classe[i]) {

      console.log(key + ": " + classe[i][key]);

    }

  }

  // 4) Do la possibilità all’utente attraverso 3 prompt
  // di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

 var nuovoStudente = {

   "nome" : prompt("Scrivi il nome del mago:"),

   "cognome" : prompt("Scrivi il cognome del mago:"),

   "eta" : parseInt(prompt("Scrivi l'età del mago:"))

 };

  classe.push(nuovoStudente);

  console.log(classe);

});

// BONUS con "handlebars"
//
// $(document).ready(function() {
//
//   var classe = [
//
//     {
//
//       "nome": "Albus",
//
//       "cognome": "Dumbledore",
//
//       "eta": 115
//
//     },
//
//     {
//
//       "nome": "Severus",
//
//       "cognome": "Snape",
//
//       "eta": 38
//
//     },
//
//     {
//
//       "nome": "Tom",
//
//       "cognome": "Riddle",
//
//       "eta": 71
//
//     },
//
//   ];
//
//   var nome = prompt("Scrivi il nome del mago:");
//
//   var cognome = prompt("Scrivi il cognome del mago:");
//
//   var eta = parseInt(prompt("Scrivi l\'eta del mago:"));
//
//    classe.push({"nome":nome,"cognome":cognome,"eta":eta});
//
//   for (var i = 0; i < classe.length; i++) {
//
//     var student = classe[i];
//
//
//     var source = $("#entry-template").html();
//
//     var template = Handlebars.compile(source);
//
//
//     var html = template(student);
//
//     $("#stud").append(html);
//
//
//   }
//
//
// });
