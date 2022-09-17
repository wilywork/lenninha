const ruidoGaussiano = function (sourceImage, mean, variance) {

    var maxvalue = null;
    var minvalue = null;

    for(let m = 0; m < sourceImage.height; m++) {
        for (let n = 0; n < sourceImage.width; n++) {
    
            let result_i = m * sourceImage.width + n;
            let target_i = result_i * 4;
    
            let col = generateGaussian(mean, variance);

            sourceImage.data[target_i]     += col;
            sourceImage.data[target_i + 1] += col;
            sourceImage.data[target_i + 2] += col;
                // sourceImage.data[target_i + 3] = col;
            if (!maxvalue || sourceImage.data[target_i] > maxvalue) {
                maxvalue = sourceImage.data[target_i];
            }
            if (!minvalue || sourceImage.data[target_i] < minvalue) {
                minvalue = sourceImage.data[target_i];
            }
        }
    }

    for(let m = 0; m < sourceImage.height; m++) {
        for (let n = 0; n < sourceImage.width; n++) {
            let result_i = m * sourceImage.width + n;
            let target_i = result_i * 4;
            let result = (sourceImage.data[target_i] + Math.abs(minvalue)) / (Math.abs(minvalue) + maxvalue);

            result = result * 255;
            sourceImage.data[target_i]     = result;
            sourceImage.data[target_i + 1] = result;
            sourceImage.data[target_i + 2] = result;
        }
    }

    return sourceImage;
}

function generateGaussian(mean, std) {
    var _2PI = Math.PI * 2;
    var u1 = Math.random();
    var u2 = Math.random();

    var z0 = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(_2PI * u2);
    var z1 = Math.sqrt(-2.0 * Math.log(u1)) * Math.sin(_2PI * u2);

    return z0 * std + mean;
}
