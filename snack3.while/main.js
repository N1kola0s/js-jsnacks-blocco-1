/* SNACK 3
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */

let num;
let sum = 0;

let i = 0;

while (i<10){
    num = Number(parseInt(prompt("Inserisci un numero")));

    sum = sum + num;

    //inserisco la condizione che ad un certo punto del ciclo risulterà falsa perchè supererà quella impostata inizialmente, uscendo dal ciclo
    i ++

}

console.log(`la somma di tutti i numeri è ${sum}`);