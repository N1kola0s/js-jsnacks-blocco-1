/* SNACK 3
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */

let num;
let sum;
/* let arr = []; */



for (let i=0; i< 10; i++){

    num = Number(parseInt(prompt("Inserisci un numero")));

    console.log(i);

    sum =  num(i) + num (i-1);

    /* arr = num.split(",")

    sum= arr.push(number(i)); */
    
}


console.log(`la somma di tutti i numeri è ${sum}`);