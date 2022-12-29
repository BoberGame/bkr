const videoModule = (wrapper, videoWrapper) => {
  const playClassName = 'playing';

  const htmlElems = {
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

  const player = () => {
    for (const btn of htmlElems.btns) {
      const elem = btn.closest(wrapper);
      const videoItem = elem.querySelector(videoWrapper);

      btn.addEventListener('click', () => {
        if (!btn.classList.contains(playClassName)) {
          launchVideo(videoItem, btn);
          enableControls(videoItem);
        }
      });
      changeState(videoItem, btn);
    }
  };
  player();
};

export default videoModule;
