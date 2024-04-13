// Función para mostrar u ocultar ejemplos al hacer clic en el botón
function toggleExamples(targetId) {
    var target = document.getElementById(targetId);
    target.classList.toggle("show");
}

// Función para manejar eventos de clic en los botones de la calculadora
function handleButtonClick(value) {
    var display = document.getElementById('display');
}

// Función para borrar el contenido de la pantalla
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Función para calcular el resultado de la operación
function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

// Agregar evento de clic a todos los botones con la clase toggleButton
var toggleButtons = document.querySelectorAll(".toggleButton");
toggleButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        var targetId = button.getAttribute("data-target");
        toggleExamples(targetId);
    });
});

// Agregar evento de clic a todos los botones de la calculadora
var calculatorButtons = document.querySelectorAll(".calculator .buttons button");
calculatorButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        handleButtonClick(button.textContent);
    });
});

