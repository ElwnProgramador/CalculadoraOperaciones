function calcularFactorial() {
    const number = document.getElementById('number').value.trim();
    
    if (number === '' || isNaN(number)) {
        alert('Por favor, ingresa un número válido.');
        return;
    }

    const parsedNumber = parseInt(number);
    let factorial = 1;

    for (let i = 1; i <= parsedNumber; i++) {
        factorial *= i;
    }

    document.getElementById('result').innerText = `El factorial de ${parsedNumber} es ${factorial}.`;
}