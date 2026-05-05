const formRegister = document.getElementById("form-register");

const inputNome = document.getElementById("nome");
const inputSobrenome = document.getElementById("sobrenome");
const inputEmail = document.getElementById("email");
const inputSenha = document.getElementById("senha");

function mostrarErro(input, mensagem) {
    const divPai = input.parentElement;

    input.classList.add("erro");

    const span = document.createElement("span");
    span.classList.add("erro-mensagem");
    span.textContent = mensagem;

    divPai.appendChild(span);
}


function removerErro(input) {
    const divPai = input.parentElement;
     
    input.classList .remove("erro");

    const span = divPai.querySelector("span.erro-mensagem");

    if(span) {
        divPai.removeChild(span);
    }
}


formRegister.addEventListener("submit", function(evento) {
     evento.preventDefault();

     let formularioValido = true;

      if(inputNome.value.trim() === "") {
        mostrarErro(inputNome, "Nome não pode estar vazio");
           formularioValido = false;
      } else {
         removerErro(inputNome);
      }

      if(inputSobrenome.value.trim() === "") {
        mostrarErro(inputSobrenome, "Sobrenome não pode estar vazio");
         formularioValido = false;
      } else {
        removerErro(inputSobrenome);
      }

      if(inputEmail.value.trim() === "" ) {
         mostrarErro(inputEmail, "E-mail não pode estar vazio");
          formularioValido = false;
      } else if(!emailValido(inputEmail.value.trim())) {
         mostrarErro(inputEmail, "Parece que isso não é um e-mail válido");
          formularioValido = false;
      } else {
        removerErro(inputEmail);
      }

      if(inputSenha.value.trim() === "") {
         mostrarErro(inputSenha, "Senha não pode estar vazia");
          formularioValido = false;
      } else if(!SenhaValida(inputSenha.value)) {
           mostrarErro(inputSenha, "Mínimo 8 caracteres, letras, números e um caractere especial");
            formularioValido = false;
      }  else {
        removerErro(inputSenha);
      }

      if(formularioValido) {
        window.location.href = "./sucesso.html";
      }
}); 

function emailValido(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
} 

function SenhaValida(senha) {
    const temMinimo8 = senha.length >= 8;
    const temLetra = /[a-zA-Z]/.test(senha);
    const temNumero = /[0-9]/.test(senha);
    const temEspecial = /[!@#$%^&*]/.test(senha);

    return temMinimo8 && temLetra && temNumero && temEspecial;
}
