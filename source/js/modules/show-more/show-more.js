function showMore() {
  const element = document.querySelector('.about__wrapper');
  const button = document.querySelector('button[data-more-button]');
  if (element) {
    const elementStyles = window.getComputedStyle(element);
    const elementPropertyLH = elementStyles.getPropertyValue('line-height');
    const lineHeight = parseInt(elementPropertyLH, 10);
    const linesCount = getComputedStyle(element).getPropertyValue('--visible-lines-count');
    const visibleHeight = linesCount * lineHeight;

    if (button) {
      element.style.maxHeight = `${visibleHeight}px`;
      button.addEventListener('click', function () {
        if (element.style.maxHeight === `${visibleHeight}px`) {
          // Если элемент свернут, то разворачиваем его
          element.style.maxHeight = '100%';
          button.textContent = 'Свернуть';
        } else {
          // Если элемент развернут, то сворачиваем его
          element.style.maxHeight = `${visibleHeight}px`;
          button.textContent = 'Подробнее';
        }
      });
    }
  }
}

export {showMore};
