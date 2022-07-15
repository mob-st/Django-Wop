const email =document.getElementById("correo")
const pass = document.getElementById("contraseña")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""

    entrar="0"

    if(email.value.trim().length == 0){
        warnings +=`El correo no es valido<br>`
        entrar = "1"
    }else if(pass.value.trim().length <= 7){
        warnings +=`La contraseña no es valida<br>`
        entrar = "1"
    }

    if (entrar==1){
        parrafo.innerHTML = warnings
        
    }else if(entrar!=1){
        location.replace("/wop/")
    }

    
})


// function recibir(event){

//     e.preventDefault();
//     location.replace("index.html")

//  }

