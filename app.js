/* 
El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
Aquí deberás desarrollar la lógica para resolver el problema.
*/

// Variables
let participantes = [];
let amigosSorteados = []; 
let indiceSorteado = -1; 
let nombreSorteado = ""; 


// Esta función toma el nombre del amigo desde un campo de entrada y lo agrega a la lista
function agregarAmigo(){
    let nombre = document.getElementById("amigo").value;
    if (nombre) {
        participantes.push(nombre);
        document.getElementById("amigo").value = "";
        listarAmigos(); 
    } else {
        alert("Por favor, ingresa un nombre o un alias.");
    }
}

/* Esta función muestra la lista de amigos en un elemento HTML
y limpia el campo de entrada después de agregar un amigo */
function listarAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 
    console.log(participantes)
    participantes.forEach(function(nombre) {
        let item = document.createElement("li");
        item.textContent = nombre;
        lista.appendChild(item);
    });
}

// Esta función sortea un amigo secreto de la lista de participantes
function sortearAmigo() {
    // Esta condicional verifica si hay amigos en la lista para sortear
    if (participantes.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    // Esta condicional verifica si ya se han sorteado todos los amigos 
    if (amigosSorteados.length === participantes.length) {
        alert("Ya se sortearon todos tus amig@s.");
        return;
    }

    let indiceSorteado;
    do {
        indiceSorteado = Math.floor(Math.random() * participantes.length);
    } while (amigosSorteados.includes(indiceSorteado));

    amigosSorteados.push(indiceSorteado);
    let nombreSorteado = participantes[indiceSorteado];

    let resultado = document.getElementById("resultado");
    let item = document.createElement("li");
    item.textContent = `El amigo secreto sorteado es: ${nombreSorteado}`;
    resultado.appendChild(item);
    console.log(nombreSorteado);
}
