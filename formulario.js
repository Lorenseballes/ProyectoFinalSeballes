
    //formulario

    const formulario = document.querySelector("#formulario");
    const email = document.querySelector("#InputEmail1");
    const password = document.querySelector("#InputPassword1"); 
    let emailValue, passwordValue;

   
    formulario.addEventListener("submit", validarForm);

    function validarForm(e) {
        e.preventDefault();

        emailValue = email.value;
        passwordValue = password.value;

        email.value = "";
        password.value = "";
}