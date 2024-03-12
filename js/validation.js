function validation(form){
  function createError(field, text){
    const parent = field.parentNode;
    const errorText = document.createElement('p');
    errorText.classList.add('error-text');
    errorText.textContent = text;
    parent.classList.add('error');
    parent.append(errorText);
  }

  function removeError(field){
    const parent = field.parentNode;

    if (parent.classList.contains('error')){
      parent.querySelector('.error-text').remove();
      parent.classList.remove('error');
    }
  }

  let result = true;
  const fields = form.querySelectorAll('input');

  fields.forEach(field => {
    removeError(field);

    if (field.dataset.required == "true"){
      if(!field.value){
        createError(field, "Обязательное поле");
        result = false;
      }
    }
  });
  return result;
}

document.getElementById('add-form').addEventListener('submit', function(event){
  event.preventDefault();
  
  if (validation(this) == true){
    alert("Форма успешно отправлена");
  }
});