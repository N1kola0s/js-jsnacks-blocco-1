/* SNACK 2 

L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga. */


//dichiaro due variabili in cui inseriro i valori dell'utente;
let word1;
let word2;

//Domando all'utente di inserire due parole e le stampo in console

word1 = prompt("Inserisci una parola");

console.log(word1);

word2 = prompt ("inserisci un' altra parola");

console.log(word2);

//imposto condizione che stabilisca quale delle due parole è la più lunga e restituisca in console la parola più lunga

if(word1.length > word2.length){

    console.log(`la parola più lunga è ${word1}`);
    
} else if (word1.length < word2.length){

    console.log(`la parola più lunga è ${word2}`);

    
} else {
    console.log("le due parole hanno la stessa lunghezza");
}










