const videoModule = (wrapper, videoWrapper) => {
  const playClassName = 'playing';

  const elems = {
    btns: document.querySelectorAll('[data-play]'),
    video: document.querySelectorAll('[data-video]'),
  };

  const launchVideo = async (element, btn) => {
    try {
      await element.play();
      btn.classList.add(playClassName);
    } catch (err) {
      btn.classList.remove(playClassName);
    }
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

  const mediaWidth = 991;
  const mediaQuery = window.matchMedia(`(min-width: ${mediaWidth}px)`);

  const player = () => {
    for (const btn of elems.btns) {
      const elem = btn.closest(wrapper);
      const videoItem = elem.querySelector(videoWrapper);

      btn.addEventListener('click', () => {
        if (!btn.classList.contains(playClassName)) {
          if (mediaQuery.matches) {
            launchVideo(videoItem, btn);
            enableControls(videoItem);
          }
          videoItem.play();
        }
      });
      changeState(videoItem, btn);
    }
  };

  player();
};

export default videoModule;
