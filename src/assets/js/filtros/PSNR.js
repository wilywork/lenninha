function PSNR(original, noisy, step) {
    var error;
    var sum = 0;
    var i = 0;
    step = step || 1;

    for (i = 0; i < original.data.length; i += step) {
        error = original.data[i] - noisy.data[i];
        sum += error * error;
    }

    var mse = sum / (original.width * original.height);
    var max = Math.pow(255, 2);
    
    return 10 * Math.log(max / mse);
};