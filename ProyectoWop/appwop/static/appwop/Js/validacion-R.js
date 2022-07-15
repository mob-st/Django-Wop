const nom =document.getElementById("nombre2")
const ape =document.getElementById("apellido2")
const email =document.getElementById("correo2")
const pass = document.getElementById("contraseña2")
const form = document.getElementById("form2")
const parrafo = document.getElementById("warnings2")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""

    entrar="0"

    if(nom.value.trim().length == 0){
        warnings +=`Rellene el nombre<br>`
        entrar = "1"
    }else if(ape.value.trim().length == 0){
        warnings +=`Rellene el apellido<br>`
        entrar = "1"
    }else if(email.value.trim().length == 0){
        warnings +=`Correo no valido<br>`
        entrar = "1"
    }else if(pass.value.trim().length <= 7){
        warnings +=`La contraseña no es valida<br>`
        entrar = "1"
    }

    if (entrar==1){
        parrafo.innerHTML = warnings
        
    }else if(entrar!=1){
        location.replace("/login/")
    }

    
})