
/*
step

1. creare un array contenente 5 numeri casuali
2. creare un intervallo 
    - che visualizzi in pagina i numeri casuali
    - dopo 30 secondi i numeri scompaiono e creare dei prompt dove l'utente deve inserire 5 numeri
3. creare un alert che visualizza quanti e quali numeri l'utente ha indovinato
*/

const cpuNumbers = [];
const userNumbers = [];
const numberCpu = document.getElementById('number-cpu-container');
let userNumber;
let count = 0;
let counter = 30;
let i ;
for (i = 0; cpuNumbers.length < 5 ; i ++) {

        rndNumber = getRndInteger(1, 100);
        
            if (!cpuNumbers.includes(rndNumber)) {

            cpuNumbers.push(rndNumber);

        } 
 
        
        const square = document.createElement('div');
        square.classList.add('square');
        square.innerHTML += (rndNumber);
        numberCpu.append(square);

}

console.log (cpuNumbers);
const clock = setInterval( function(){

    console.log(counter);
    if (counter == 1){

        numberCpu.remove();
        clearInterval(clock);
        
    }

    else{

        counter --;
    }

}, 1000);
let j;
setTimeout ( function(){

    for (j = 0; j < 5; j ++){

            
        userNumber = parseInt(prompt('inserisci un numero che hai visto'));
        
        if ( cpuNumbers.includes(userNumber)){

            userNumbers.push(userNumber);
            count = count + 1;
        }
            
        }
        
        console.log(userNumbers);

        if (count == 5) {
            alert('Complimenti, hai indovinato tutti i numeri! HAI VINTO!');
        } else if (count == 0) {
            alert('Mi dispiace, non hai indovinato nessun numero. Riprova');
        } else {
            alert(`Hai indovinato ${count} numeri: ${userNumbers}`);
        }
         
}, 31000);


 




// funzioni

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


 

