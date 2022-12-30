function scrollTo(mediaWidth, mediaType = 2) {
  const scrollButtons = document.querySelectorAll('[data-scroll]');

  const getScrollOffset = (item) => {
    const scrollId = item.dataset.scroll;
    const scrollElem = document.getElementById(scrollId);
    if (scrollElem) {
      const scrollOffset = scrollElem.offsetTop;
      return scrollOffset;
    }
  };

  const windowScroll = (event, scrollOffsetTop) => {
    event.preventDefault();
    window.scrollTo({
      top: scrollOffsetTop - 50,
      behavior: 'smooth',
    });
  };

  const getMediaQuery = (width, type) => {
    const typeName = (type === 1) ? 'max' : 'min';
    return window.matchMedia(`(${typeName}-width: ${width}px)`);
  };

  const mediaQuery = mediaWidth ? getMediaQuery(mediaWidth, mediaType) : getMediaQuery(0, mediaType);
  if (scrollButtons.length > 0) {
    scrollButtons.forEach((btn) => {
      const scrollOffsetTop = getScrollOffset(btn);

      if (mediaQuery.matches) {
        btn.addEventListener('click', (event) => {
          windowScroll(event, scrollOffsetTop);
        });
      }
    });
  }
}

export default scrollTo;
