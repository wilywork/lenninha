// inicio da função do histograma
const histogram = function (pixels) {
  const matrizVazia = new Array(257).fill(0);

  let histogramaLocal = {
    r: matrizVazia,
    g: matrizVazia,
    b: matrizVazia,
  }

  for (let i = 0; i < pixels.data.length; i += 4) {
    histogramaLocal.r[pixels.data[i]]++
    histogramaLocal.g[pixels.data[i + 1]]++
    histogramaLocal.b[pixels.data[i + 2]]++
  }

  return histogramaLocal
}