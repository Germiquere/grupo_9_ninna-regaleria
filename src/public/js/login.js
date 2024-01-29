window.onload = function(){
    const loginForm = document.querySelector('#login-form')
    
    let errors = 0;

    loginForm.email.addEventListener('blur', ()=>{
        let validEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if(loginForm.email.value.length < 1){
            errors = 1;
            loginForm.email.style.border = 'red 1px solid';
            document.getElementById('error-email').innerText = 'Debes ingresar tu email';
        } else if(!validEmail.test(loginForm.email.value)){
            errors = 1;
            loginForm.email.style.border = 'red 1px solid'
            document.getElementById('error-email').innerText = 'Debes ingresar un email válido';
        }else {
            loginForm.email.style.border = '#CACACA 1px solid'
            document.getElementById('error-email').innerText = '';
            errors = 0;
        }
    })

    loginForm.password.addEventListener('blur', ()=>{
        if(loginForm.password.value.trim().length < 1){
            errors = 1;
            loginForm.password.style.border = 'red 1px solid'
            document.getElementById('error-password').innerText = 'Debes ingresar la contraseña';
        } else {
            loginForm.password.style.border = '#CACACA 1px solid'
            document.getElementById('error-password').innerText = '';
            errors = 0;
        }
    })

    loginForm.addEventListener('submit', (e) => {                    
        if(errors > 0) {
            e.preventDefault()
            alert('Debes completar todo el formulario!')
        }
    })
}