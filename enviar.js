function showAlert() {
    const Nombres = document.getElementById('Nombres').value;
    const Apellidos = document.getElementById('Apellidos').value;
    const NumeroTel = document.getElementById('NumeroTelefonico').value;
    const Correo = document.getElementById('CorreoElectronico').value;
    const Fecha = document.getElementById('Fecha').value;
    const Mensaje = document.getElementById('Mensaje').value;

    const alertMessage = `Nombres: ${Nombres}\nApellidos: ${Apellidos}\nNumeroTelefonico: ${NumeroTel}\nCorreoElectronico: ${Correo}\nFecha: ${Fecha}\nMensaje: ${Mensaje}`;

    alert(alertMessage);
}
