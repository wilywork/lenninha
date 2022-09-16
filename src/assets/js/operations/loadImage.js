const loadImage = function (src, elementId) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = src;

    const canvas = document.getElementById(elementId);
    const ctx = canvas.getContext("2d");

    img.onload = () => {
        ctx.drawImage(img, 0, 0);
        resolve();
    };
  })

}