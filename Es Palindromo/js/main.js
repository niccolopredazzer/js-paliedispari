//esericizio palindromo
//1.Fare inserire una parola all'utente  -->   prompt
//2.Fare una funzione che sia in grado di dirmi se una parola è palindroma o no
//2.1 usando split reverse join ordino la parola inserita dall'utente al contrario
//3.Stampare il risultato all'utente

var parolaInserita = prompt('inserisci una parola');
    console.log(parolaInserita);
var parolaAlContrario = stringaAlContrario (parolaInserita);


if (funzionePalindromo (true)) {
    console.log('la parola è un palindromo');
}else {
    console.log('la parola non è un palindromo');
}


function stringaAlContrario(stringa) {
    return stringa.split("").reverse().join("");
}

function funzionePalindromo() {
    if (parolaInserita === parolaAlContrario) {
        return true;
    }else {
        return false;
    }
}
