function startScore(rate, className) {
  const symbols = '★★★★★☆☆☆☆☆';
  const elems = document.querySelectorAll(className);
  const startIndex = 5;
  const endIndex = 10;

  elems.forEach((item) => {
    item.innerHTML = symbols.slice(startIndex - rate, endIndex - rate);
  })
}

export default startScore;
