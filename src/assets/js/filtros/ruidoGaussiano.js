const ruidoGaussiano = function (sourceImage, mean, variance) {


    



    // for ( x = 0; x < canvas.width; x++ ) {
    //     for ( y = 0; y < canvas.height; y++ ) {
    //        number = generateGaussian(mean, variance);
   
    //        ctx.fillStyle = "rgba(" + number + "," + number + "," + number + "," + opacity + ")";
    //        ctx.fillRect(x, y, 1, 1);
    //     }
    //  }

    for(let m = 0; m < sourceImage.height; m++) {
        for (let n = 0; n < sourceImage.width; n++) {
    
            let result_i = m * sourceImage.width + n;
            let target_i = result_i * 4;
    
            let col = generateGaussian(mean, variance);

            if (col > 25) {
                sourceImage.data[target_i]     = col;
                sourceImage.data[target_i + 1] = col;
                sourceImage.data[target_i + 2] = col;
                sourceImage.data[target_i + 3] = col;
            }
        }
    }

    return sourceImage;
}


// /** Adds pseudorandom, Gaussian ("normally") distributed values, with
//     	mean 0.0 and the specified standard deviation, to this image or ROI. */
// public void noise(double standardDeviation) {
//     Random rnd=new Random();
//     int v, ran;
//     boolean inRange;
//     for (int y=roiY; y<(roiY+roiHeight); y++) {
//         int i = y * width + roiX;
//         for (int x=roiX; x<(roiX+roiWidth); x++) {
//             inRange = false;
//             do {



//                 ran = (int)Math.round(rnd.nextGaussian()*standardDeviation);


//                 v = (pixels[i] & 0xff) + ran;
//                 inRange = v>=0 && v<=255;
//                 if (inRange) pixels[i] = (byte)v;
//             } while (!inRange);
//             i++;
//         }
//     }
// }


// const ruidoGaussiano = function (pixels, mean, std) {
//     const divider = 16
//     const operator = [
//         1 / divider,
//         2 / divider,
//         1 / divider,
//         2 / divider,
//         4 / divider,
//         2 / divider,
//         1 / divider,
//         2 / divider,
//         1 / divider,
//     ]

//     // var result = [];
//     // for (var i = 0; i < 10000; i++) {
//     //     result.push(generateGaussian(mean, std));
//     // }

//     return convolution(pixels, operator)
// }


// function Noise() {
//     func = 'noise'; // last used function
//     var imgd = contextOrig.getImageData(0, 0, iW, iH);
//     var data = imgd.data;
//     for (var i = 0, n = data.length; i < n; i += 4) {
//        // generating random color coefficients
//        var randColor1 = 0.6 + Math.random() * 0.4;
//        var randColor2 = 0.6 + Math.random() * 0.4;
//        var randColor3 = 0.6 + Math.random() * 0.4;
//         // assigning random colors to our data
//         data[i] = data[i]*p2*randColor1+er; // green
//         data[i+1] = data[i+1]*p2*randColor2+eg; // green
//         data[i+2] = data[i+2]*p3*randColor3+eb; // blue
//     }
//     // put image date back to context
//     context.putImageData(imgd, 0, 0);
// }


// export const Noise: Filter = function (imageData) {
//     var amount = this.noise() * 255,
//       data = imageData.data,
//       nPixels = data.length,
//       half = amount / 2,
//       i;

//     for (i = 0; i < nPixels; i += 4) {
//       data[i + 0] += half - 2 * half * Math.random();
//       data[i + 1] += half - 2 * half * Math.random();
//       data[i + 2] += half - 2 * half * Math.random();
//     }
//   };


function generateGaussian(mean, std) {
    var _2PI = Math.PI * 2;
    var u1 = Math.random();
    var u2 = Math.random();

    var z0 = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(_2PI * u2);
    var z1 = Math.sqrt(-2.0 * Math.log(u1)) * Math.sin(_2PI * u2);

    return z0 * std + mean;
}