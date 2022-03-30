/* SNACK 4

In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa. */


//dichiaro variabile user_name all'interno della quale andrà il nome che chiedo di inserire all'utente 
const user_name = prompt("Inserisci il tuo nome");

//dichiaro una variabile in cui inizio un array con i nomi delle persone che sono state invitate alla festa
const lista_invitati = ["francesco", "giovanni", "giuseppe", "nicola"];

//imposto una variabile booleana 
let bool = false;

//imposto un ciclo for che mi permette di effettuare un controllo 

for(let i=0; i < lista_invitati.length; i++){

    //imposto una codizione che mi permette di stabilire se il nome inserito dall'utente è presente nella mia lista degli invitati

    if(user_name == lista_invitati[i]){
        bool =  true;
    }

}


//imposto una condizione con IF per comunicare in console all'utente se è in lista e quindi se potrà entrare e partecipare alla festa oppure no

if( bool==true){
    console.log("Sei in lista, puoi entrare");
} else {
    console.log("Non sei in lista, mi dispiace non puoi entrare");

}