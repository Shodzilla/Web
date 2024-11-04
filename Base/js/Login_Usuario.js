//Ejecutando funciones
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPage);

//Declarando variables
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");

    //FUNCIONES

function anchoPage(){

    if (window.innerWidth > 1000){
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "block";
    }else{
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";   
    }
}

anchoPage();



function iniciarSesion(){
    if (window.innerWidth > 1000){
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "10px";
            formulario_register.style.display = "none";
            caja_trasera_register.style.opacity = "1";
            caja_trasera_login.style.opacity = "0";
    }else{
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "0px";
            formulario_register.style.display = "none";
            caja_trasera_register.style.display = "block";
            caja_trasera_login.style.display = "none";
    }
}

function register(){
    if (window.innerWidth >1000){
            formulario_register.style.display = "block";
            contenedor_login_register.style.left = "410px";
            formulario_login.style.display = "none";
            caja_trasera_register.style.opacity = "0";
            caja_trasera_login.style.opacity = "1";
    }else{
            formulario_register.style.display = "block";
            contenedor_login_register.style.left = "0px";
            formulario_login.style.display = "none";
            caja_trasera_register.style.display = "none";
            caja_trasera_login.style.display = "block";
            caja_trasera_login.style.opacity = "1";
    }

}

const Registrar = async ()=>{

    const name=document.getElementById('name').value;
    const correo=document.getElementById('correo').value;
    const telefono=document.getElementById('telefono').value;
    const cedula=document.getElementById('cedula').value;
    const password=document.getElementById('password').value;

    const data = {
        "nombre": name,
        "password": password,
        "correo": correo,
        "telefono": telefono,
        "cedula" : cedula
    }
    
    const result = await axios.post('http://localhost:3000/api/bdd/',data);
    console.log(result);

}

const Iniciar = async ()=>{

    const form=document.getElementById("formu");
    console.log("OLA")
    form.addEventListener("submit",(event)=>{
        event.preventDefault();
    })

    const Correo=document.getElementById('Usuario').value;
    const Passw = document.getElementById('Passw').value;
    const Data={
        "correo":Correo,
        "password":Passw
    }

    const result = await axios.post(`http://localhost:3000/api/bdd/usuario/`,Data);
    console.log(result.data);
}

