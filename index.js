const telaNormal = document.getElementById("telaNormal");
const telaInscrito = document.getElementById("telaSucesso");
const idEmail = document.getElementById("confirmEmail");

let emailEnviado = null;
// Mudar de Tela.
// Confirmar Email.

function confirmEmail() {
        const confirmarEmail = document.getElementById("emailConfirmacao");
        emailEnviado = idEmail.value;
        telaNormal.style.display = "none";
        telaInscrito.style.display = "flex";
        confirmarEmail.innerText = emailEnviado;
        console.log(typeof(emailEnviado));
}
function trocarTela() {
        telaInscrito.style.display = "none"
        telaNormal.style.display = "Flex"
};