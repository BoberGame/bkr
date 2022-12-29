function burger(menuClassName) {
  const ACTIVE_CLASS = 'active';
  const button = document.querySelector('.menu-burger');

  if (button) {
    const removeClass = () => {
      document.body.classList.remove('no-scroll');
      button.classList.remove(ACTIVE_CLASS);
      menu.classList.remove(ACTIVE_CLASS);
    };

    const menu = document.querySelector(menuClassName);
    button.addEventListener('click', (event) => {
      event.preventDefault();
      document.body.classList.toggle('no-scroll');
      button.classList.toggle(ACTIVE_CLASS);
      menu.classList.toggle(ACTIVE_CLASS);
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        removeClass();
      }
    });
  }
}

export default burger;
