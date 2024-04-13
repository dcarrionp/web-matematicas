// Funci�n para mostrar u ocultar ejemplos al hacer clic en el bot�n
function toggleExamples(targetId) {
    var target = document.getElementById(targetId);
    target.classList.toggle("show");
}

// Funci�n para manejar eventos de clic en los botones de la calculadora
function handleButtonClick(value) {
    var display = document.getElementById('display');
}

// Funci�n para borrar el contenido de la pantalla
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Funci�n para calcular el resultado de la operaci�n
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

