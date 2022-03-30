/* SNACK 5
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. */

//dichiaro un array vuoto
const list_number = [];

//dichiaro una variabile booleana
let bool =  true;

//imposto un ciclo FOR in cui chiedo per sei volte il numero all'utente

for(let i=0; i<6; i++){

    //dichiaro una variabile all'interno della quale inserisco il numero chiesto all'utente 

    const num = parseInt(prompt("Inserisci un numero"));  

    /*  console.log(i); */

    if(num % 2 == 0){
        bool = false; 
    } else {
    
        list_number.push(num(i));
    }

} 



console.log(list_number);