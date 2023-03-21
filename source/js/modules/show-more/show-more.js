function showMore() {
  const smallTextElement = document.querySelector('.about__wrapper [data-more-text="small"]');
  const button = document.querySelector('button[data-more-button]');
  if (smallTextElement) {
    const maxHeight = getComputedStyle(smallTextElement).getPropertyValue('--max-height');

    if (button) {
      if (maxHeight === 0) {
        smallTextElement.style.maxHeight = '0';
      }

      button.addEventListener('click', function () {
        if (smallTextElement.style.maxHeight === '0px') {
          // Если элемент свернут, то разворачиваем его
          smallTextElement.style.maxHeight = '100%';
          button.textContent = 'Свернуть';
        } else {
          // Если элемент развернут, то сворачиваем его
          smallTextElement.style.maxHeight = '0';
          button.textContent = 'Подробнее';
        }
      });
    }
  }
}

export {showMore};
