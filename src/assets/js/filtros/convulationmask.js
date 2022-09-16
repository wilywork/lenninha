

const convulationmask = function (pixels) {
    const operator = [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
    ]

    return convolution(pixels, operator)
}