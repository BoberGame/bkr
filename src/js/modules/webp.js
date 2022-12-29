export const isWebp = () => {
  const testWebP = (callback) => {
    const webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  };
  testWebP((support) => {
    const html = document.documentElement;
    if (support) html.classList.add('webp');
    else html.classList.add('no-webp');
  });
};
