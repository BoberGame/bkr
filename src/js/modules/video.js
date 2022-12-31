const videoModule = (wrapper) => {
  const playClassName = 'playing';
  const videoAttr = '[data-video]';
  const wrapperClassName = '.play__wrapper';
  const buttons = document.querySelectorAll('[data-play]');

  const mediaWidth = 991;
  const mediaQuery = window.matchMedia(`(min-width: ${mediaWidth}px)`);

  const launchVideo = async (element, btn) => {
    try {
      await element.play();
      btn.classList.add(playClassName);
    } catch (err) {
      btn.classList.remove(playClassName);
    }
  };

  const launchVideoMobile = async (element, btn) => {
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

  const videoPlayer = () => {
    document.addEventListener('click', (event) => {
      const btn = event.target.closest('[data-play]');
      if (btn) {
        const wrapper = btn.closest(wrapperClassName);
        const video = wrapper.querySelector(videoAttr);
        if (mediaQuery.matches) {
          console.log(video);
          launchVideo(video, btn);
          changeState(video, btn);
        }
        enableControls(video);
        launchVideoMobile(video, btn);
      }
    });
    // for (const btn of buttons) {
      // const elem = btn.closest(wrapper);
      // const videoItem = elem.querySelector(videoAttr);
      // console.log(elem);
      // console.log(videoItem);

      // btn.addEventListener('click', () => {
      //   if (!btn.classList.contains(playClassName)) {
      //     if (mediaQuery.matches) {
      //       launchVideo(videoItem, btn);
      //     }
      //     enableControls(videoItem);
      //     videoItem.play();
      //   }
      // });
      // changeState(videoItem, btn);
    // }
  };

  videoPlayer();
};

export default videoModule;
