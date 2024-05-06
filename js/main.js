'use strict';
//CREAZIONE VARIABILI PER IL CONTENUTO
const shopping = ['dentifricio', 'scottex', 'carne', 'biscotti'];
let count = 0;
// PRENDERE UL CREATA IN HTML ATTRAVERSO L' ID
const list = document.getElementById('shop');
//CICLO WHILE
while (count < shopping.length) {
    //CREAZIONE DI ELEMENTO ATTRAVERSO JS SU HTML
    const li = document.createElement('li');
    //INSERIMENTO DEL TESTO PRESO DA ARRAY SHOPPING, DANDO CONTENUTO DI TESTO TRAMITE INNER.TEXT
    li.innerText = shopping[count];//COUNT TRA QUADRE RAPPRESENTA UNA i, ASSEGNATA PRECEDENTEMENTE
    //ATTACCARE UN ELEMENTO ALL UL CREATO SU HTML, ATTRVERSO APPEND
    shop.append(li);
    // AUMENTARE IL CONTATORE ATTRAVERSO COUNT++ (COUNT = COUNT + 1)
    count++;
    console.log('bella sta spesa');
}
