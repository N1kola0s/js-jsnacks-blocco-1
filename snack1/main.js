/*SNACK 1 

L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.*/


//dichiaro le variabili che conterranno i dati immessi da due utenti
let user1;
let user2;


//inizio user 1 inserendo dati domandati all'utente
user1 = parseInt(prompt("Inserisci un numero"));


//inizio user2 inserendo dati domandati aell'utente
user2 = parseInt(prompt("inserisci un numero"))


//inserisco condizione per stabilire il numero maggiore e stamparlo in console
if(user1>user2){

    console.log(`il numero più grande è ${user1}`);
    
} else if (user1>user2){

    console.log(`il numero più grande è ${user2}`);

    
} else {
    console.log("i due numeri sono uguali")
}