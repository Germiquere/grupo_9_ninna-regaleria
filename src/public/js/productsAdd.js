window.onload = function () {
  const createForm = document.querySelector("#product-create-form");

  createForm.name.focus();
  let errors = 0;

  createForm.name.addEventListener('blur', (e)=>{
    if (createForm.name.value.trim() == '') {
      errors = 1;
      createForm.name.style.border = 'red 1px solid';
      document.getElementById('error-name').innerText = 'Debe ingresar un nombre';
    } else if (createForm.name.value.length < 5) {
      errors = 1;
      createForm.name.style.border = 'red 1px solid';
      document.getElementById('error-name').innerText = 'El nombre debe tener al menos 5 caracteres';
    } else {
      createForm.name.style.border = '#CACACA 1px solid'
      document.getElementById('error-name').innerText = '';
      errors = 0;
    }
  });
  
  createForm.store.addEventListener('blur', (e)=>{
    if (createForm.store.value.trim() == '') {
      errors = 1;
      createForm.store.style.border = 'red 1px solid';
      document.getElementById('error-store').innerText = 'Debe ingresar la marca';
    } else {
      createForm.store.style.border = '#CACACA 1px solid'
      document.getElementById('error-store').innerText = '';
      errors = 0;
    }
  });

  createForm.grape.addEventListener('blur', (e)=>{
    if (createForm.grape.value.trim() == '') {
      errors = 1;
      createForm.grape.style.border = 'red 1px solid';
      document.getElementById('error-grape').innerText = 'Debe ingresar la variedad';
    } else {
      createForm.grape.style.border = '#CACACA 1px solid'
      document.getElementById('error-grape').innerText = '';
      errors = 0;
    }
  });

  createForm.year.addEventListener('blur', (e)=>{
    const today = new Date();
    const currentYear = today.getFullYear();

    if (createForm.year.value.trim() == '' || createForm.year.value.trim() < 1900 || createForm.year.value.trim() > currentYear) {
      errors = 1;
      createForm.year.style.border = 'red 1px solid';
      document.getElementById('error-year').innerText = `Debes ingresar una fecha entre 1900 y ${currentYear}`;
    } else {
      createForm.year.style.border = '#CACACA 1px solid'
      document.getElementById('error-year').innerText = '';
      errors = 0;
  }
  });

  createForm.stock.addEventListener('blur', (e)=>{
    if (createForm.stock.value.trim() == '' || createForm.stock.value.trim() == 0) {
      errors = 1;
      createForm.stock.style.border = 'red 1px solid';
      document.getElementById('error-stock').innerText = 'Debes ingresar al menos 1 unidad';
    } else {
      createForm.stock.style.border = '#CACACA 1px solid'
      document.getElementById('error-stock').innerText = '';
      errors = 0;
  }
  });

  createForm.description.addEventListener('blur', (e)=>{
    if (createForm.description.value.trim() == '' || createForm.description.value.trim() > 20) {
      errors = 1;
      createForm.description.style.border = 'red 1px solid';
      document.getElementById('error-description').innerText = 'La descripcion debe ser de 20 caracteres como mínimo';
    } else {
      createForm.description.style.border = '#CACACA 1px solid'
      document.getElementById('error-description').innerText = '';
      errors = 0;
  }
  });

  createForm.image.addEventListener('change', ()=>{
    const validImage =/(.jpg|.jpeg|.png|.gif)$/i;
    if(!validImage.test(createForm.image.value)) {
        errors = 1;
        createForm.image.style.border = 'red 1px solid';
        document.getElementById('error-image').innerText = 'Formatos validos: .jpg, .jpeg, .png, .gif';
    } else {
        createForm.image.style.border = '#CACACA 1px solid'
        document.getElementById('error-image').innerText = '';
        errors = 0;
    }
  });
  
  
  createForm.addEventListener('submit', (e)=>{
    if (errors != 0) {
      e.preventDefault();
      console.log(errors);
      alert('Debes completar el formulario para crear un nuevo producto!');
    }
  });

}