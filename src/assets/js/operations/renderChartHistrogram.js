const renderChartHistogram = function (elementId, dados, config) {
    console.log(dados);
window.dados = dados;
    config.data.datasets[0].data = dados.r;
    config.data.datasets[1].data = dados.g;
    config.data.datasets[2].data = dados.b;
    
    const chartHistogram = new Chart(
        document.getElementById(elementId),
        config
    );

    return chartHistogram;
}