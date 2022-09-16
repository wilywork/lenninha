const config = {
    type: 'line',
    data: {
        labels: [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20,
            21,
            22,
            23,
            24,
            25,
            26,
            27,
            28,
            29,
            30,
            31,
            32,
            33,
            34,
            35,
            36,
            37,
            38,
            39,
            40,
            41,
            42,
            43,
            44,
            45,
            46,
            47,
            48,
            49,
            50,
            51,
            52,
            53,
            54,
            55,
            56,
            57,
            58,
            59,
            60,
            61,
            62,
            63,
            64,
            65,
            66,
            67,
            68,
            69,
            70,
            71,
            72,
            73,
            74,
            75,
            76,
            77,
            78,
            79,
            80,
            81,
            82,
            83,
            84,
            85,
            86,
            87,
            88,
            89,
            90,
            91,
            92,
            93,
            94,
            95,
            96,
            97,
            98,
            99,
            100,
            101,
            102,
            103,
            104,
            105,
            106,
            107,
            108,
            109,
            110,
            111,
            112,
            113,
            114,
            115,
            116,
            117,
            118,
            119,
            120,
            121,
            122,
            123,
            124,
            125,
            126,
            127,
            128,
            129,
            130,
            131,
            132,
            133,
            134,
            135,
            136,
            137,
            138,
            139,
            140,
            141,
            142,
            143,
            144,
            145,
            146,
            147,
            148,
            149,
            150,
            151,
            152,
            153,
            154,
            155,
            156,
            157,
            158,
            159,
            160,
            161,
            162,
            163,
            164,
            165,
            166,
            167,
            168,
            169,
            170,
            171,
            172,
            173,
            174,
            175,
            176,
            177,
            178,
            179,
            180,
            181,
            182,
            183,
            184,
            185,
            186,
            187,
            188,
            189,
            190,
            191,
            192,
            193,
            194,
            195,
            196,
            197,
            198,
            199,
            200,
            201,
            202,
            203,
            204,
            205,
            206,
            207,
            208,
            209,
            210,
            211,
            212,
            213,
            214,
            215,
            216,
            217,
            218,
            219,
            220,
            221,
            222,
            223,
            224,
            225,
            226,
            227,
            228,
            229,
            230,
            231,
            232,
            233,
            234,
            235,
            236,
            237,
            238,
            239,
            240,
            241,
            242,
            243,
            244,
            245,
            246,
            247,
            248,
            249,
            250,
            251,
            252,
            253,
            254,
            255,
            256
        ],
        datasets: [{
            label: 'R',
            backgroundColor: 'red',
            borderColor: 'red',
        }, {
            label: 'G',
            backgroundColor: 'green',
            borderColor: 'green',
        }, {
            label: 'B',
            backgroundColor: 'blue',
            borderColor: 'blue',
        }]
    },
    options: {
        responsive: true,
        tension: 0.5,
        pointRadius: 0,
        borderWidth: 0.5,
    }
};


$(document).ready(async function () {

    await loadImage('./assets/images/imagens_originais/jetplane.png', 'imagem1');
    await loadImage('./assets/images/imagens_originais/lena.png', 'imagem2');
    await loadImage('./assets/images/imagens_originais/image.png', 'imagem3');

    setBytesImage('imagem1', grayscale(getBytesImage('imagem1')));
    setBytesImage('imagem2', grayscale(getBytesImage('imagem2')));
    setBytesImage('imagem3', grayscale(getBytesImage('imagem3')));


    
    // renderChartHistogramTest('chartHistogram1', ruidoGaussianoTest(null, 0, 20), config);
    etapa1_histograma();
    etapa2_ruido();
    etapa3_PSNR();
    etapa4_convulationmask();
})

async function etapa1_histograma() {

    const imageOriginalBytes = getBytesImage('imagem1');
    const imageOriginalBytes2 = getBytesImage('imagem2');
    const imageOriginalBytes3 = getBytesImage('imagem3');

    renderChartHistogram('chartHistogram1', histogram(imageOriginalBytes), config);
    renderChartHistogram('chartHistogram2', histogram(imageOriginalBytes2), config);
    renderChartHistogram('chartHistogram3', histogram(imageOriginalBytes3), config);
}

function etapa2_ruido() {

    const imageOriginalBytes = getBytesImage('imagem1');
    const imageOriginalBytes2 = getBytesImage('imagem2');
    const imageOriginalBytes3 = getBytesImage('imagem3');

    setBytesImage('imagem1Ruido', ruidoGaussiano(imageOriginalBytes, 0, 25));
    setBytesImage('imagem2Ruido', ruidoGaussiano(imageOriginalBytes2, 0, 25));
    setBytesImage('imagem3Ruido', ruidoGaussiano(imageOriginalBytes3, 0, 25));

    setBytesImage('imagem1Ruido2', ruidoGaussiano(imageOriginalBytes, 0, 100));
    setBytesImage('imagem2Ruido2', ruidoGaussiano(imageOriginalBytes2, 0, 100));
    setBytesImage('imagem3Ruido2', ruidoGaussiano(imageOriginalBytes3, 0, 100));


    renderChartHistogram('chartHistogram1Ruido', histogram(getBytesImage('imagem1Ruido')), config);
    renderChartHistogram('chartHistogram2Ruido', histogram(getBytesImage('imagem2Ruido')), config);
    renderChartHistogram('chartHistogram3Ruido', histogram(getBytesImage('imagem3Ruido')), config);

    renderChartHistogram('chartHistogram1Ruido2', histogram(getBytesImage('imagem1Ruido2')), config);
    renderChartHistogram('chartHistogram2Ruido2', histogram(getBytesImage('imagem2Ruido2')), config);
    renderChartHistogram('chartHistogram3Ruido2', histogram(getBytesImage('imagem3Ruido2')), config);
}

function etapa3_PSNR() {
    const imageOriginalBytes = getBytesImage('imagem1');
    const imageOriginalBytes2 = getBytesImage('imagem2');
    const imageOriginalBytes3 = getBytesImage('imagem3');

    const imageOriginalBytesRuido = getBytesImage('imagem1Ruido');
    const imageOriginalBytes2Ruido = getBytesImage('imagem2Ruido');
    const imageOriginalBytes3Ruido = getBytesImage('imagem3Ruido');

    const imageOriginalBytesRuido2 = getBytesImage('imagem1Ruido2');
    const imageOriginalBytes2Ruido2 = getBytesImage('imagem2Ruido2');
    const imageOriginalBytes3Ruido2 = getBytesImage('imagem3Ruido2');

    var resultado = "";

    resultado += "  Jato ruido: " + PSNR(imageOriginalBytes, imageOriginalBytesRuido, 4) + "</br>";
    resultado += "  Lena ruido: " + PSNR(imageOriginalBytes2, imageOriginalBytes2Ruido, 4) + "</br>";
    resultado += "  Abelha ruido: " + PSNR(imageOriginalBytes3, imageOriginalBytes3Ruido, 4) + "</br>";

    resultado += "  Jato muito ruido: " + PSNR(imageOriginalBytes, imageOriginalBytesRuido2, 4) + "</br>";
    resultado += "  Lena muito ruido: " + PSNR(imageOriginalBytes2, imageOriginalBytes2Ruido2, 4) + "</br>";
    resultado += "  Abelha muito ruido: " + PSNR(imageOriginalBytes3, imageOriginalBytes3Ruido2, 4) + "</br>";
    
    $('#resultadoPSNR').html(resultado);
}

function etapa4_convulationmask() {
    const imageOriginalBytesRuido = getBytesImage('imagem1Ruido');
    const imageOriginalBytes2Ruido = getBytesImage('imagem2Ruido');
    const imageOriginalBytes3Ruido = getBytesImage('imagem3Ruido');

    const imageOriginalBytesRuido2 = getBytesImage('imagem1Ruido2');
    const imageOriginalBytes2Ruido2 = getBytesImage('imagem2Ruido2');
    const imageOriginalBytes3Ruido2 = getBytesImage('imagem3Ruido2');

    convulationmask(imageOriginalBytesRuido);
    convulationmask(imageOriginalBytes2Ruido);
    convulationmask(imageOriginalBytes3Ruido);

    convulationmask(imageOriginalBytesRuido2);
    convulationmask(imageOriginalBytes2Ruido2);
    convulationmask(imageOriginalBytes3Ruido2);
}