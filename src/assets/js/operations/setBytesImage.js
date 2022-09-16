const setBytesImage = function (elementId, bytes) {
    const canvas = document.getElementById(elementId);
    const ctx = canvas.getContext("2d");
    ctx.putImageData(bytes, 0, 0);
}