window.onload = function () {
  const createForm = document.querySelector("#product-create-form");

  createForm.name.focus();
  let errors = 0;

  createForm.name.addEventListener('blur', (e)=>{
    if (createForm.name.value == '') {
      errors = 1;
      createForm.name.style.border = 'red 1px solid';
      document.getElementById('error-name').innerText = 'Debe ingresar un nombre';
    }
  });
  
  createForm.store.addEventListener('blur', (e)=>{
    if (createForm.store.value == '') {
      errors = 1;
      createForm.store.style.border = 'red 1px solid';
      document.getElementById('error-store').innerText = 'Debe ingresar la marca';
    }
  });



  createForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    alert('Debes completar todo el formulario!');
  });

}