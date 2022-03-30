
/* SNACK7
Stampa le potenze di 2 fino a 1000. */

//stabilisco che number è uguale a 2
number = 2;

//stabilisco il risultato della potenza di number
let esp;


//imposto un ciclo in cui elevo number fino ad una potenza pari a 1000
for(let i=0; i<=1000; i++){
    
    esp = Math.pow(number,i);
    console.log(esp);

}