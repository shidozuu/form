let form = document.querySelector("#form")
let pseudo = document.querySelector("#pseudo")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let password2 = document.querySelector("#password2")
let errorContainer = document.querySelector(".message-error")
let errorList = document.querySelector(".message-error ul")

form.addEventListener('submit', valider)

function valider (evenement) {
    errorContainer.classList.remove('visible')
    let errorCount = 0
    errorList.innerHTML = ''
    if(pseudo.value.length < 6) {
        pseudo.classList.remove("success")
        pseudo.classList.add("error")

        let err = document.createElement("li")
        err.innerText = "le champ pseudo doit contenir au moins 6 caractères"

        errorList.appendChild(err)
        evenement.preventDefault()
        errorCount = errorCount + 1
    } else {
        pseudo.classList.add("success")
        pseudo.classList.remove("error")
    }
    
    if(email.value=="") {
        email.classList.remove("success")
        email.classList.add("error")

        let err = document.createElement("li")
        err.innerText = "l'email ne peut pas être vide"

        errorList.appendChild(err)
        evenement.preventDefault()
        errorCount = errorCount + 1
    } else {
        email.classList.add("success")
        email.classList.remove("error")
    }
    
    if(password.value.length < 8) {
        password.classList.remove("success")
        password.classList.add("error")

        let err = document.createElement("li")
        err.innerText = "le mot de passe doit contenir au moins 8 caractères"

        errorList.appendChild(err)
        evenement.preventDefault()
        errorCount = errorCount + 1
    } else {
        password.classList.add("success")
        password.classList.remove("error")
    }
    
    if(password2.value!=password.value) {
        console.log(password.value, password2.value);
        
        password2.classList.remove("success")
        password2.classList.add("error")

        let err = document.createElement("li")
        err.innerText = "le mot de passe n'est pas bon "

        errorList.appendChild(err)
        evenement.preventDefault()
        errorCount = errorCount + 1
    } else {
        password2.classList.add("success")
        password2.classList.remove("error")
    }
    
    if(errorCount > 0) {
        errorContainer.classList.add('visible')
    }
}



