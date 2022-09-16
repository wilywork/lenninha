const getBytesImage = function (elementId) {
    const canvas = document.getElementById(elementId);
    const ctx = canvas.getContext("2d");
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    return imgData;
}