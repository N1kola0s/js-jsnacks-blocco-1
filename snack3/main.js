/* SNACK 3
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */


//dichiaro una variabile in cui andrà il numero che sarà chiesto all'utente
let num;

//dichiaro una variabile in cui andrà la somma dei numeri chiesti all'utente e la inizializzo da zero
let sum;
sum = 0;


//immposto un ciclo in cui verrà chiesto per dieci volte all'utente un numero e verrà fatta la somma dei numeri
for (let i=0; i< 10; i++){

    num = Number(parseInt(prompt("Inserisci un numero")));

    sum = sum + num;
    
}

//stampo in console la somma di tutti i numeri inseriti dall'utente
console.log(`la somma di tutti i numeri è ${sum}`);