//Variables
const btnEnviar = document.querySelector("#enviar");
const formulario = document.querySelector("#enviar-mail");
//VARIABLES PARA CAMPOS(tenemos 3 campos)
const email = document.querySelector("#email");
const asunto = document.querySelector("#asunto");
const mensaje = document.querySelector("#mensaje");

const er =
/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


eventListeners();
  function eventListeners() {
  //CUANDO LA APP ARRANCA
  document.addEventListener("DOMContentLoaded", iniciarApp);
  //CAMPOS DEL FORMULARIO
  email.addEventListener("blur", validarFormulario);
  asunto.addEventListener("blur", validarFormulario);
  mensaje.addEventListener("blur", validarFormulario);
} //Funciones
function iniciarApp() {
  //esta funcion se va a encargar de arrancar todo
  btnEnviar.disabled = true;
  btnEnviar.classList.add("cursor-not-allowed", "opacity-50");
} //VALIDANDO FORMULARIO

function validarFormulario(e) {
  if (e.target.value.length > 0) {
    //eliminar del DOM
    const error = document.querySelector("p.error");
    
    if (error) {
      error.remove();
    }

    e.target.classList.remove("border", "border-red-500");
    e.target.classList.add("border", "border-green-500");
  } else {
    e.target.classList.remove("border", "border-green-500");
    e.target.classList.add("border", "border-red-500");
    mostrarError("Todos los campos son obligatorios");
  }
  if (e.target.type === "email") {
    if (er.test(e.target.value)) {
      const error = document.querySelector("p.error");

      if (error) {
        error.remove();
      }
      e.target.classList.remove("border", "border-red-500");
      e.target.classList.add("border", "border-green-500");
    } else {
      e.target.classList.remove("border", "border-green-500");

      e.target.classList.add("border", "border-red-500");
      mostrarError("Email no valido");
    }
  }
 
  if (er.test(email.value) && asunto.value !== "" && mensaje.value !== "") {
    btnEnviar.disabled = false;
    btnEnviar.classList.remove("cursor-not-allowed", "opacity-50");
    console.log("pasaste la validacion");

  }
}
function mostrarError(mensaje) {
  const mensajeError = document.createElement("p");
  mensajeError.textContent = mensaje;
  mensajeError.classList.add(
    "border","border-red-500","background-red-100","text-red-500","p-3","mt-5","text-center","error");
  
  const errores = document.querySelectorAll(".error");
  if (errores.length === 0) {
    formulario.appendChild(mensajeError);
  }
}
