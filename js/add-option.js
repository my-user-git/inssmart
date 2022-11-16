(function () {

  let listOption = [],
    keyList = '';


  function getNewOption() {
    let inputOption = document.querySelector('.section-products__form-input'),
      buttonAdd = document.querySelector('.section-products__form-submit');

      buttonAdd.disabled = true;

    inputOption.addEventListener('input', function () {
      if (inputOption.value != '') {
        buttonAdd.disabled = false;
      } else {
        buttonAdd.disabled = true;
      };
    });
  }

  getNewOption()

})()
