function videoModule() {
  const playClassName = 'playing';
  const wrapperClassName = '.play__wrapper';
  const videoAttr = '[data-video]';
  const playBtnAttr = '[data-play]';

  const mediaWidth = 991;
  const mediaQuery = window.matchMedia(`(min-width: ${mediaWidth}px)`);

  const launchVideo = async (element, btn) => {
    await element.play();
    btn.classList.add(playClassName);
  };

  const changeState = (elem, btn) => {
    elem.addEventListener('play', () => {
      btn.classList.add(playClassName);
    });
    elem.addEventListener('pause', () => {
      btn.classList.remove(playClassName);
    });
  };

  const enableControls = (player) => {
    if (!player.controls) player.controls = true;
  };

  document.addEventListener('click', (event) => {
    const btn = event.target.closest(playBtnAttr);

    if (btn) {
      const wrapper = btn.closest(wrapperClassName);
      const video = wrapper.querySelector(videoAttr);

      launchVideo(video, btn);
      enableControls(video);

      if (mediaQuery.matches) {
        changeState(video, btn);
      }
    }
  });
}

export default videoModule;
