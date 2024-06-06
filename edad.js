function calcularEdad() {
    const birthdate = document.getElementById('birthdate').value.trim();
    
    if (birthdate === '') {
        alert('Por favor, ingrese su fecha de nacimiento.');
        return;
    }

    const birthdateDate = new Date(birthdate);
    const today = new Date();
    let age = today.getFullYear() - birthdateDate.getFullYear();
    const monthDifference = today.getMonth() - birthdateDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthdateDate.getDate())) {
        age--;
    }

    document.getElementById('result').innerText = `Tu edad es ${age} años.`;
}