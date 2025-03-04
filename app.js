//El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres de los amigos.

let amigos = [];

// Función para agregar un amigo a la lista.

function agregarAmigo() {
    // Obtenemos el valor del input.
    let inputAmigo = document.getElementById("amigo").value;

    // Validamos que el input no esté vacío.
    if (inputAmigo === "") {
        alert("Por favor, debes ingresar un nombre");
        return;
    }
    //Validamos que el nombre no este duplicado.
    if(amigos.includes(inputAmigo)){
        alert(`El nombre ${inputAmigo} ya existe en la lista. Ingresa otro nombre`);
        return;
    }
    
    // Agregamos el amigo al array.
    amigos.push(inputAmigo);
    
    // Limpiamos el input.
    document.getElementById("amigo").value = "";
    
   //Actualizamos la lista de amigos.
    actualizarListaAmigos();


}

// Función para actualizar la lista de amigos.

function actualizarListaAmigos() {

    let listaAmigos = document.getElementById("listaAmigos");

    // Limpiamos la lista.
    listaAmigos.innerHTML = "";

    // Recorremos el array de amigos y agregamos cada uno a la lista.
    for (let i = 0; i < amigos.length; i++) {
        let itemLi = document.createElement("li");
        itemLi.textContent = amigos[i];
        listaAmigos.appendChild(itemLi);
    }
}

// Funcion para seleccionar un amigo al azar.

function sortearAmigo() {
    // Validamos que la lista de amigos no esté vacía.
    if (amigos.length === 0) {
        alert("Debes agregar al menos un amigo para poder seleccionar");
        return;
    }

    // Obtenemos un número aleatorio.
    let numeroAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtenemos el amigo seleccionado.
    let amigoSeleccionado = amigos[numeroAleatorio];

    // Mostramos el amigo seleccionado.
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Tu amigo secreto es: <strong>${amigoSeleccionado}</strong>`;
}

// Función para reiniciar la lista de amigos.

function reiniciarLista() {
    // Limpiamos el array de amigos.
    amigos = [];

    // Limpiamos la lista de amigos.
    actualizarListaAmigos();

    // Limpiamos el resultado.
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = "";
}

// funcion para bloquear el boton reiniciar lista si no hay amigos en la lista.
function bloquearBoton(){
    const botonReiniciar = document.getElementById('reiniciar');
    if(amigos.length === 0){
        botonReiniciar.disabled = true;
    }else{
        botonReiniciar.disabled = false;
    }
}