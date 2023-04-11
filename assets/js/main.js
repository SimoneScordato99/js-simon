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
            spazioDomanda.innerHTML+=`<input type="number" name="verificaId${i}">`;
            
        }

        btnVerifica.addEventListener('click', function(){

            let arrayInseriti = []
            for(let k=0;k<5;k++){
                let nameInp = document.querySelector('input').nextElementSibling.value 
                
                console.log(nameInp)
                
            }
            console.log(arrayInseriti)
        })


        console.log(spazioNumeri.classList)
        console.log(spazioDomanda.classList)
    
    }, 2000)
})



function randomNumber() {
    return Math.floor(Math.random()*100)+1;
}