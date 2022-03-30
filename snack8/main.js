/* SNACK8

Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero. */


//dichiaro una variabile e la inizializzo con il numero di quattro cifre chiesto all'utente

const user = prompt("Inserisci un numero di quattro cifre");

/* console.log(typeof user) */

//imposto una condizione per stabilire se il dato inserito dall'utente sia un numero, in caso contrario eseguo un alert
if(!isNaN(user)){

    /* console.log("si sei entrato") */

    //diachiaro una variabile per la somma e la inizializzo con un valore pari a 0
    let sum;
    sum = 0; 

    //imposto un ciclo for il cui limite è la lunghezza delle cifre inserite e faccio la somma delle singole cifre che lo compongono il mio numero
    for(let i = 0; i<user.length; i++){
        
        sum += Number(user.charAt(i));
        
    }

    //stampo in console la somma
    console.log(`La somma delle cifre inserite è ${sum}`);
    
} else {
    
    //inserisco l'alert nel caso il dato inserito dall'utente non sia un numero
    alert("Non hai digitato un numero, riprova")
}

