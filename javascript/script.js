"use strict"

// creare una variabile che esprime l'anno di nascita del cliente 

const birthYear = document.getElementById("birth-year");

// creare una variabile che esprime il numero di kilometri che il cliente vuole percorrere 

const kiloM = document.getElementById("kilometres");

// variabile legata al pulsante "Richiedi il biglietto"

const buttonTicket = document.getElementById("button-ticket");


buttonTicket.addEventListener("click", function() {
    const birth = parseInt(birthYear.value);

    // console.log(birth);

    let today = new Date();

    let currentYear = today.getFullYear();

    // console.log(currentYear);

    let age = currentYear - birth;

    // console.log(age);

    const tripKm = parseInt(kiloM.value);

    // console.log(tripKm);

    let priceRegular = tripKm * 0.21;

    let priceUnderAge = priceRegular / 100 * 80;

    let priceRetired = priceRegular / 100 * 60;

    let responcePrice = document.getElementById("responce");

    if (age < 18) {
        responcePrice.innerHTML = priceUnderAge;
    } else if (age > 64) {
        responcePrice.innerHTML = priceRetired;
    } else {
        responcePrice.innerHTML = priceRegular
    }

    event.preventDefault();

})