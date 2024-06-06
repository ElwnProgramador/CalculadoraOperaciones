function verificarPalindromo() {
    const phrase = document.getElementById('phrase').value.trim();
    
    if (phrase === '') {
        alert('Por favor, ingresa una frase.');
        return;
    }

    const cleanedPhrase = phrase.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedPhrase = cleanedPhrase.split('').reverse().join('');

    if (cleanedPhrase === reversedPhrase) {
        document.getElementById('result').innerText = "La frase es un palíndromo.";
    } else {
        document.getElementById('result').innerText = "La frase no es un palíndromo.";
    }
}