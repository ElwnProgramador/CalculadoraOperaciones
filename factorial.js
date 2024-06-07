function calcularFactorial() {
    const number = parseInt(document.getElementById('number').value);
    const resultElement = document.getElementById('result');

    if (isNaN(number)) {
        alert("Por favor, ingrese un número.");
        resultElement.innerText = ""; // Limpiar el resultado
        return;
    }

    if (number < 0) {
        alert("Por favor, ingrese un número positivo.");
        resultElement.innerText = ""; // Limpiar el resultado
        return;
    }

    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }

    resultElement.innerText = `El factorial de ${number} es ${factorial}.`;
    resultElement.className = "output success"; // Aplica estilos dinámicos
}
