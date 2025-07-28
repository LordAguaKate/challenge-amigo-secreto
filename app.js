/* 
El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
Aquí deberás desarrollar la lógica para resolver el problema.
*/

// Variables
let participantes = [];

// Esta función toma el nombre del amigo desde un campo de entrada y lo agrega a la lista
function agregarAmigo(){
    let nombre = document.getElementById("amigo").value;
    if (nombre) {
        participantes.push(nombre);
        document.getElementById("amigo").value = "";
        listarAmigos(); 
    } else {
        alert("Por favor, ingresa un nombre o alias.");
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
