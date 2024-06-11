// Lista della spesa con ciclo while 1


// Lista della spesa in un array
const listaSpesa = ["latte", "coca cola", "pizza", "patatine", "biscotti"];

// Selettore dove verrà aggiunta la lista
var lista = document.getElementById("spesa");
// Creo l'UL
var ul = document.createElement("ul");
// Specifico la variabile globale prime del while
let i = 0;
// creo il ciclo con while
while (i < listaSpesa.length) {
    // creo un <li> per ogni elemento
    let li = document.createElement("li");
    // Aggancio il testo del prodotto della lista all'<li>
    li.appendChild(document.createTextNode(listaSpesa[i]));
    // Aggancio il <li> creato al <ul>
    ul.appendChild(li);
    // Faccio ripetere il ciclo fino alla fine della lista
    i++  
}
// Aggancio l'<ul> all'elemento con id "spesa"
lista.appendChild(ul);


// Alternativa*****


// Lista della spesa con ciclo while 2


// Lista della spesa in un array
const listaSpesaY = ["latte", "coca cola", "pizza", "patatine", "biscotti"];

// Selettore dove verrà aggiunta la lista
var listaY = document.getElementById("spesaY");

// Inizializzo la variabile globale del while
let j = 0;
// creo il ciclo con while
while (j < listaSpesa.length) {
    // creo un <li> per ogni elemento
    let li = document.createElement("li");
    // Aggancio il testo del prodotto della lista all'<li>
    li.appendChild(document.createTextNode(listaSpesa[j]));
    // Aggancio il <li> creato al <ul>
    listaY.appendChild(li);
    // Faccio ripetere il ciclo fino alla fine della lista
    j++  
}


















    

   

