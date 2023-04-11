/*
Descrizione:
Visualizzare in pagina 5 numeri casuali.


Da lì parte un timer di 30 secondi.



Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().


Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.

*/

let spazioNumeri = document.getElementById('containerNum')
let spazioDomanda = document.getElementById('containerAn')
let scritta = document.querySelector('main')
let btnGioca = document.getElementById('gioca')

console.log(spazioNumeri)
console.log(spazioDomanda)

btnGioca.addEventListener('click', function(){
    
    arrayCasuali = []
    for(let i = 0; i <5; i++){
        arrayCasuali.push(randomNumber()) 
        spazioNumeri.innerHTML+=`<div class="box">${arrayCasuali[i]}</div>`;
    }
    console.log(arrayCasuali)
    scritta.innerHTML += `<p>ricorda questi 5 numeri</p>`;

    console.log(spazioNumeri.classList)
        console.log(spazioDomanda.classList)

    setTimeout(function () {
        let spazioNumeri = document.getElementById('containerNum')
        let spazioDomanda = document.getElementById('containerAn')
        let scritta = document.querySelector('main')
        let btnGioca = document.getElementById('gioca')
        let btnVerifica = document.getElementById('verifica')
        


        console.log('maiale')
        spazioNumeri.innerHTML = "";
        spazioDomanda.innerHTML = "";
        //spazioNumeri.className = 'container none'
        spazioNumeri.classList.add('none')
        spazioNumeri.classList.remove('active')
        btnGioca.classList.add('none')
        btnGioca.classList.remove('active')
        btnVerifica.classList.add('active')
        btnVerifica.classList.remove('none')
        

        
        //spazioDomanda.className = 'container active'
        spazioDomanda.classList.add('active')
        spazioDomanda.classList.remove('none')
        for(let i = 0; i <5; i++){ 
            spazioDomanda.innerHTML+=`<input type="number" id="verificaId${i}">`;
            
        }
        console.log(spazioDomanda)

        btnVerifica.addEventListener('click', function(){

            let arrayInseriti = []
            let nameInp0 = parseInt(document.getElementById('verificaId0').value)
            let nameInp1 = parseInt(document.getElementById('verificaId1').value)
            let nameInp2 = parseInt(document.getElementById('verificaId2').value)
            let nameInp3 = parseInt(document.getElementById('verificaId3').value)
            let nameInp4 = parseInt(document.getElementById('verificaId4').value)

            arrayInseriti.push(nameInp0)
            arrayInseriti.push(nameInp1)
            arrayInseriti.push(nameInp2)
            arrayInseriti.push(nameInp3)
            arrayInseriti.push(nameInp4)
           
            console.log(arrayInseriti)
            let score = 0

            for(let k=0;k<arrayInseriti.length;k++){

                if(arrayCasuali.includes(arrayInseriti[k]) ){
                    score = score + 1
                }
            }
            scritta.innerHTML=`ne hai indovinate ${score}/5`
        })


        console.log(spazioNumeri.classList)
        console.log(spazioDomanda.classList)
    
    }, 5000)
})



function randomNumber() {
    return Math.floor(Math.random()*100)+1;
}