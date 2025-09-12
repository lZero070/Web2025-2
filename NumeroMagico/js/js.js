// ====== VARIABLES GLOBALES ======
let numeroSecreto;
let intentos;
const intentosMaximos = 10;

// Iniciar el juego al cargar la página
iniciarJuego();

// ====== Funciones para el inicio del juego ======
function iniciarJuego() {
    // Generar número secreto aleatorio entre 1 y 100
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    intentos = 0; // Reiniciamos el contador de intentos

    // Limpiar mensajes e historial
    document.getElementById("mensaje").textContent = "";
    document.getElementById("listaHistorial").innerHTML = "";

    // Habilitar campo y botón de probar
    document.getElementById("inputNumero").addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            verificarNumero();
        }
    });
    document.getElementById("inputNumero").disabled = false;
    document.getElementById("btnProbar").disabled = false;

    // Ocultar botón de reinicio
    document.getElementById("btnReiniciar").style.display = "none";
}

// ====== FUNCIÓN PARA VERIFICAR EL NÚMERO INGRESADO ======
function verificarNumero() {
    const input = document.getElementById("inputNumero");
    const mensaje = document.getElementById("mensaje");
    const listaHistorial = document.getElementById("listaHistorial");

    // Convertir el valor a número
    const numeroJugador = parseInt(input.value);

    // Validar que sea un número válido entre 1 y 100
    if (isNaN(numeroJugador) || numeroJugador < 1 || numeroJugador > 100) {
        mensaje.textContent = "Ingresa un número válido entre 1 y 100.";
        mensaje.style.color = "red";
        return;
    }

    // Incrementar contador de intentos
    intentos++;

    // Mostrar intento en historial
    const nuevoIntento = document.createElement("li");
    nuevoIntento.textContent = "Intento " + intentos + ": " + numeroJugador;
    listaHistorial.appendChild(nuevoIntento);

    // Verificar si el jugador acertó
    if (numeroJugador === numeroSecreto) {
        mensaje.textContent = "¡Felicidades! Adivinaste el número en " + intentos + " intentos.";
        mensaje.style.color = "green";
        finDelJuego();
    } else if (intentos >= intentosMaximos) {
        // Si se agotaron los intentos
        mensaje.textContent = "Se acabaron tus intentos. El número era: " + numeroSecreto;
        mensaje.style.color = "red";
        finDelJuego();
    } else {
        // Dar pista: mayor o menor
        if (numeroJugador < numeroSecreto) {
            mensaje.textContent = "El número mágico es mayor.";
            mensaje.style.color = "blue";
        } else {
            mensaje.textContent = "El número mágico es menor.";
            mensaje.style.color = "blue";
        }
    }

    // Limpiar el campo de entrada para el siguiente intento
    input.value = "";
    input.focus();
}

// ====== FUNCIÓN PARA FINALIZAR EL JUEGO ======
function finDelJuego() {
    // Deshabilitar campo de entrada y botón de probar
    document.getElementById("inputNumero").disabled = true;
    document.getElementById("btnProbar").disabled = true;

    // Mostrar botón de reinicio
    document.getElementById("btnReiniciar").style.display = "inline-block";
}

// ====== FUNCIÓN PARA REINICIAR EL JUEGO ======
function reiniciarJuego() {
    iniciarJuego();
}
