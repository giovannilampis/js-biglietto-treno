"use strict"

// creare una variabile che esprime l'anno di nascita del cliente 

const birthYear = document.getElementById("birth-year");

// creare una variabile che esprime il numero di kilometri che il cliente vuole percorrere 

const kiloM = document.getElementById("kilometres");

// variabile legata al pulsante "Richiedi il biglietto"

const buttonTicket = document.getElementById("button-ticket");


buttonTicket.addEventListener("click", function() {
    const year = birthYear.value;
    console.log(year);

    const tripKm = kiloM.value;
    console.log(tripKm);

})