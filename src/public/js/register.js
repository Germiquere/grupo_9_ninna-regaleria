window.onload = function(){
    const registerForm = document.querySelector('#register-form');
    
    registerForm.fullname.focus();
    let errors = 0;

    registerForm.fullname.addEventListener('blur', ()=>{
        if (registerForm.fullname.value.trim() == '') {
            errors = 1;
            registerForm.fullname.style.border = 'red 1px solid';
            document.getElementById('error-fullname').innerText = 'Debe ingresar un nombre';
        } else if(registerForm.fullname.value.trim().length < 1){
            errors = 1;
            registerForm.fullname.style.border = 'red 1px solid';
            document.getElementById('error-fullname').innerText = 'Debe ingresar un nombre';
        } else {
            registerForm.fullname.style.border = '#CACACA 1px solid';
            document.getElementById('error-fullname').innerText = '';
            errors = 0;
        }
    });
    registerForm.username.addEventListener('blur', ()=>{
        if (registerForm.username.value.trim() == '') {
            errors = 1;
            registerForm.username.style.border = 'red 1px solid';
            document.getElementById('error-username').innerText = 'Debe ingresar un nombre de usuario';
        } else if(registerForm.fullname.value.trim().length < 1){
            errors = 1;
            registerForm.username.style.border = 'red 1px solid';
            document.getElementById('error-username').innerText = 'Debe ingresar un nombre de usuario valido';
        } else {
            registerForm.username.style.border = '#CACACA 1px solid';
            document.getElementById('error-username').innerText = '';
            errors = 0;
        }
    });

    registerForm.age.addEventListener('blur', ()=>{
        if(registerForm.age.value.trim().length < 1){
            errors = 1;
            registerForm.age.style.border = 'red 1px solid';
            document.getElementById('error-age').innerText = 'Debe ingresar tu edad';
        } else if(registerForm.age.value < 18){
            errors = 1;
            registerForm.age.style.border = 'red 1px solid';
            document.getElementById('error-age').innerText = 'Debes ser mayor de 18 años';
        } else {
            registerForm.age.style.border = '#CACACA 1px solid';
            document.getElementById('error-age').innerText = '';
            errors = 0;
        }
    })
    
    registerForm.dni.addEventListener('blur', ()=>{
        if (registerForm.dni.value.length < 7 || registerForm.dni.value.length > 8){
            errors = 1;
            registerForm.dni.style.border = 'red 1px solid';
            document.getElementById('error-dni').innerText = 'Debes ingresar un número de DNI válido';
        } else {
            registerForm.dni.style.border = '#CACACA 1px solid';
            document.getElementById('error-dni').innerText = '';
            errors = 0;
        }
    });
    
    registerForm.email.addEventListener('blur', ()=>{
        let validEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if(registerForm.email.value.length < 1){
            errors = 1;
            registerForm.email.style.border = 'red 1px solid';
            document.getElementById('error-email').innerText = 'Debes ingresar tu email';
        } else if(!validEmail.test(registerForm.email.value)){
            errors = 1;
            registerForm.email.style.border = 'red 1px solid';
            document.getElementById('error-email').innerText = 'Debes ingresar un email válido';
        }else {
            registerForm.email.style.border = '#CACACA 1px solid';
            document.getElementById('error-email').innerText = '';
            errors = 0;
        }
    });
    
    registerForm.password.addEventListener('blur', ()=>{
        if(registerForm.password.value.length < 6){
            errors = 1;
            registerForm.password.style.border = 'red 1px solid';
            document.getElementById('error-password').innerText = 'La contraseña debe tener un mínimo de 6 caracteres';
        } else {
            registerForm.password.style.border = '#CACACA 1px solid';
            document.getElementById('error-password').innerText = '';
            errors = 0;
        }
    });
    
    registerForm.confirmPassword.addEventListener('blur', () => {
        const password = registerForm.password.value;
        const confirmPassword = registerForm.confirmPassword.value;

        if (password !== confirmPassword) {
            errors = 1;
            registerForm.confirmPassword.style.border = 'red 1px solid';
            document.getElementById('error-confirm-password').innerText = 'Las contraseñas no coinciden';
        } else {
            // Limpiar errores si las contraseñas coinciden
            registerForm.confirmPassword.style.border = '#CACACA 1px solid';
            document.getElementById('error-confirm-password').innerText = '';
            errors = 0;
        }
    });
    
    registerForm.img.addEventListener('change', ()=>{
        const validImg =/(.jpg|.jpeg|.png|.gif)$/i;
        if(!validImg.test(registerForm.img.value)) {
            errors = 1;
            registerForm.img.style.border = 'red 1px solid';
            document.getElementById('error-img').innerText = 'El elemento seleccionado no correponde a formato de imagen válido. Las extensiones permitidas son: .jpg, .jpeg, .png, .gif';
        } else {
            registerForm.img.style.border = '#CACACA 1px solid'
            document.getElementById('error-img').innerText = '';
            errors = 0;
        }
    });

    registerForm.addEventListener('submit', (e) => {                    
        if(errors != 0) {
            e.preventDefault();
            console.log(errors);
            alert('Debes completar todo el formulario!');
        }
    });   
    }