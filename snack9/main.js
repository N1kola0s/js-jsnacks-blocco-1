
/* SNACK9
Calcola la somma e la media dei primi 10 numeri. */

//dichiaro una variabile per la somma
let sum = 0;

//dichiaro una variabile per la media
let media;


//imposto un ciclo for per la somma dei primi 10 numeri
for( let i=1; i<=10; i++){
    sum += i ;
}

//calcolo la media dei primi 10 numeri
media = sum / 10 ;


//stampo in console la somma dei primi 10 numeri
console.log(`La somma dei primi 10 numeri è uguale a ${sum}`);


//stampo in console la media dei primi 10 numeri
console.log(`La media dei primi 10 numeri è ${media}`);