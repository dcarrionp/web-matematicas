
function toggleExamples(targetId) {
    var target = document.getElementById(targetId);
    target.classList.toggle("show");
}

var toggleButtons = document.querySelectorAll(".toggleButton");
toggleButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        var targetId = button.getAttribute("data-target");
        toggleExamples(targetId);
    });
});


function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}