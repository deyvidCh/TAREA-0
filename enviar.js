function showAlert() {
    const Nombres = document.getElementById('Nombres').value;
    const Apellidos = document.getElementById('Apellidos').value;
    const NumeroTel = document.getElementById('NumeroTelefonico').value;
    const Correo = document.getElementById('CorreoElectronico').value;
    const Fecha = document.getElementById('Fecha').value;
    const Mensaje = document.getElementById('Mensaje').value;

    const alertMessage = ` ${Nombres}\n ${Apellidos}\n ${NumeroTel}\n ${Correo}\n ${Fecha}\n ${Mensaje}`;

    alert(alertMessage);
}
