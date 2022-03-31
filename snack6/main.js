/* SNACK 6

Stampa il cubo dei primi N numeri,
dove N è un numero indicato dall’utente. */

//dichiaro una variabile in cui inserirò il numero scelto dall'utente

let n = parseInt(prompt("Inserisci un numero"));

//dichiaro una variabile in cui inseriro il cubo di un numero
let cubo;

//imposto un ciclo FOR in cui farò la potenza al cubo dei primi n numeri, dove il limite sarà il numero n scelto dall'utente. Dopodichè stamperò in console n cubi;
for (let i=1; i<=n; i++){
    
    cubo = Math.pow(i,3);
    console.log(cubo);

}









