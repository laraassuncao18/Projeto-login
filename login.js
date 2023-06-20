//código de validação de formulario de login

function verificar(){
    let email = document.getElementById('loginEmail').value;
    let senha = document.getElementById('loginSenha').value;
    if(!email || !senha){
        alert("campos de preenchimento obrigatorio. favor preencher");
    }
    
}

