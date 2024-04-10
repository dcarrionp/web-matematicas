// JavaScript source code
function toggleEjemplos(operacion) {
    var ejemplos = document.getElementById('ejemplos' + operacion);
    if (ejemplos.style.display === 'none') {
        ejemplos.style.display = 'block';
    } else {
        ejemplos.style.display = 'none';
    }
}