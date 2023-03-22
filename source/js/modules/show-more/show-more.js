function showMore() {
  const parentElement = document.querySelector('.about__wrapper');
  const button = document.querySelector('button[data-more-button]');
  if (parentElement) {
    if (button) {
      parentElement.classList.add('about__wrapper--roll-up');
      button.addEventListener('click', function () {
        if (parentElement.classList.contains('about__wrapper--roll-up')) {
          parentElement.classList.remove('about__wrapper--roll-up');
          button.textContent = 'Свернуть';
        } else {
          // Если элемент развернут, то сворачиваем его
          parentElement.classList.add('about__wrapper--roll-up');
          button.textContent = 'Подробнее';
        }
      });
    }
  }
}

export {showMore};
