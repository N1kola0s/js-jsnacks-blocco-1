/* SNACK 5
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. */

//dichiaro un array vuoto
const list_number = [];


//dichiaro una variabile num in cui andranno i valori numerici inseriti dall'utente
let num;

//dichiaro una variabile booleana
let bool =  true;

//imposto un ciclo FOR in cui chiedo per sei volte il numero all'utente

for(let i=0; i<6; i++){

    //dichiaro una variabile all'interno della quale inserisco il numero chiesto all'utente 

    num = parseInt(prompt("Inserisci un numero"));  

    /*  console.log(i); */

    //imposto la condizione che solo se il numero inserito dall'utente è dispari viene successivamente aggunto nel nostro array

    if(num % 2 == 0){
        bool = false; 
    } else {
    
        list_number.push(num);
    }
    

} 

//stampo l'array in console che corrisonde alla lista dei numeri dispari inseriti dall'utente
console.log(list_number);