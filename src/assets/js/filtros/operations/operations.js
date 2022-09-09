import getImage from './getImage'

// inicio da função do histograma
const histogram = function (image) {
  // pegar os pixels da imagem
  const pixels = this.getImage(image),
    matrixVazia = new Array(257).fill(0);

  let histograma = {
    r: matrizVazia,
    g: matrizVazia,
    b: matrizVazia,
  }

  for (let i = 0; i < pixels.data.length; i += 4) {
    histograma.r[pixels.data[i]]++
    histograma.g[pixels.data[i + 1]]++
    histograma.b[pixels.data[i + 2]]++
  }

  return histograma
}

export default histogram