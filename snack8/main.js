/* SNACK8

Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero. */


//dichiaro una variabile e la inializzo con il numero di quattro cifre chiesto all'utente

const user = prompt("Inserisci un numero di quattro cifre");

/* console.log(typeof user) */


if(!isNaN(user)){

    console.log("si sei entrato")

    let sum;
    sum = 0; 

    for(let i = 0; i<user.length; i++){
        
        sum += Number(user.charAt(i));
        
    }

    console.log(`La somma delle cifre inserite è ${sum}`);
    
} else {
    
    alert("Non hai digitato un numero, riprova")
}

