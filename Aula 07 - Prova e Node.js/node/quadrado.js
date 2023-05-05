function area(largura) {
    return largura * largura;
}

module.exports = {
    area,
    perimetro: function (largura) {
        return 4 * largura;
    }
};
