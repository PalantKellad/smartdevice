import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {initAccordions} from './modules/accordion/init-accordion';
import {initPhoneMask} from './modules/phone-mask/phone-mask';

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    initPhoneMask();
  });
});

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    initAccordions();
  });
});

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)

// Function to count total
// number of lines
function countLines() {
  const element = document.querySelector('.about__wrapper');
  const button = document.querySelector('button[data-more-button]');
  const elementStyles = window.getComputedStyle(element);
  const elementPropertyLH = elementStyles.getPropertyValue('line-height');
  const lineHeight = parseInt(elementPropertyLH, 10);
  const linesCount = getComputedStyle(element).getPropertyValue('--visible-lines-count');
  const visibleHeight = linesCount * lineHeight;
  element.style.maxHeight = `${visibleHeight}px`;
  const expand = () => {
    element.style.maxHeight = '100%';
    button.textContent = 'Свернуть';
  };
  const collapse = () => {
    element.style.maxHeight = `${visibleHeight}px`;
    button.textContent = 'Подробнее';
  };
}
countLines();
