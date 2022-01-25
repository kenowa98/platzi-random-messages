const messages = [
    "Dólar americano - USD",
    "Euro - EUR",
    "Libra esterlina - GBP",
    "Franco suizo - CHF",
    "Yen japonés - JPY",
    "Yuan chino - CNY",
    "Real brasileño - BRL",
    "Rublo ruso - RUB",
    "Peso colombiano - COP"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = { randomMsg };