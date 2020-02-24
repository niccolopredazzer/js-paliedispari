// Esercizio pari e dispari
//creo due prompt il primo chiede all'utente di scegliere tra pari e dispari e il secondo un numero
//creo un numero random
//sommo il numero random al numero inserito dall'utente
//controllo se la somma ottenuta sia pari o dispari
//l'utente vince se ha indovinato se la somma è pari o dispari


var sceltaPariDispari = prompt('scegli pari o dispari');
    console.log(sceltaPariDispari);
var numeroInserito = parseInt(prompt('inserisci un numero'));
    console.log(numeroInserito);
var numeroRandom = generaRandomMinMax (1, 5);
    console.log(numeroRandom);
var somma = numeroRandom + numeroInserito;
    console.log(somma);
var sommaSeconda = ''; //questa variabile mi serve per dire poi all'utente se ha vinto o perso assegnandole o pari o dispari

if (isPari(somma)) {
    console.log('la somma è pari')
    var sommaSeconda = 'pari';
} else {
    console.log('la somma è dispari');
    var sommaSeconda = 'dispari';
}
if (sommaSeconda === sceltaPariDispari) {
    console.log('hai vinto');
} else {
    console.log('mi dispiace, hai perso');
}


function isPari(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function generaRandomMinMax(min, max) {
    var numeroRandom = Math.floor(Math.random() * (max - min + 1) ) + min;
    return numeroRandom;
}
