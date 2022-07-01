const formExemplo = document.querySelector("#form-exemplo")

//const form2 = document.forms["#form_exemplos"];
const isEmpty = form => {
    let state = false
    for(let field of form){
    if(!field.value && !field instanceof HTMLButtonElement){
        return true
    }
    else{
        return false

    }}
}


const disableButtonSubmit = (form) => {
    if(isEmpty(form)){
        document.querySelector("#btn_enviar").classList.add("disabled")
    }


}

// validação de envio
formExemplo.addEventListener("submit", evento => {
evento.preventDefault()


})