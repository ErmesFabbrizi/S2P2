// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/




let utenti = [];

function aggiungiUtente(nome, cognome, isAmbassador) {
    utenti.push({ nome, cognome, isAmbassador });
}

aggiungiUtente('Ermes', 'Fabbrizi', true);
aggiungiUtente('Michele', 'Placido', false);
aggiungiUtente('Giovanni', 'Storti', true);
aggiungiUtente('Aldo', 'Baglio', false);


function calcolaCarrello (prezzoCarrello, costoSpedizione) {
    utenti.forEach (utente => {
        if (utente.isAmbassador) {
            console.log(`${utente.nome} ${utente.cognome} è un ambassador`);
        } 
        else {
            console.log(`${utente.nome} ${utente.cognome} non è un ambassador`); 
        }

        let prezzoScontato = utente.isAmbassador ? prezzoCarrello * 0.7 : prezzoCarrello;

        let costoFinale = prezzoScontato > 100 ? prezzoScontato : prezzoScontato + costoSpedizione;

        console.log (`Prezzo finale per ${utente.nome} ${utente.cognome} : €${costoFinale.toFixed(2)}`);
    });
}

let ambassador = utenti.filter (utente => utente.isAmbassador);


console.log ('Lista degli ambassador:');
ambassador.forEach (utente => {
    console.log (`${utente.nome} ${utente.cognome}`);
});

calcolaCarrello (194, 10);
