//Валидация форм
'use strict';

const validForm = () => {
  //Функции обработки инпутов
  const formNameInput = (event) => {
    const target = event.target;
    target.value = target.value.replace(/[^а-яё\s]/gi, '');
  };
  const formePhoneInput = (event) => {
    const target = event.target;
    target.value = target.value.replace(/[^\+\d]/gi, '');
    if (target.value.charAt(0) === '+' && target.value.length === 13) {
      target.value = target.value.substring(0, target.value.length - 1);
    }
  };
  //Вешаем слушатель по клику на body и внутри вешаем слушатель на нужный инпут с вызовом соответствущей функции
  document.body.addEventListener('click', (event) => {
    const target = event.target;
    if (target.matches('[placeholder="Ваше имя..."]')) {
      target.addEventListener('input', formNameInput);
    } else if (target.matches('[placeholder*="Ваш номер"]')) {
      //Вешаем слушатель на поле плейсхолдер которого содержит подстроку "телефон"
      target.addEventListener('input', formePhoneInput);
    }
    //Удалять слушатели не нужно, повторного навешивания нет. Проверено.
  });
};

export default validForm;
