export const paises = [
    { nombre: "Chile" },
    { nombre: "Argentina" },
    { nombre: "Colombia" },
    { nombre: "Peru" },
    { nombre: "Mexico" }
];

export const abonoRetiroTrans = [

    {
        pais: "Chile",
        data: [
            { metodoPago: "transfer", canal: "bancario", abono: "$0", retiro: "$0" }
        ]
    },
    {
        pais: "Argentina",
        data: [
            { metodoPago: "transfer", canal: "bancario", abono: "0.6%", retiro: "0.6%" }
        ]
    },
    {
        pais: "Colombia",
        data: [
            { metodoPago: "transfer", canal: "PSE", abono: "$3 000 COP", retiro: "No aplica" },
            { metodoPago: "transfer", canal: "ACH", abono: "$3 000 COP", retiro: "$3 600 + 0.4% COP" },
            { metodoPago: "creditcard", canal: "TPaga", abono: "$3.5% + IVA COP", retiro: "notAvailable" },
            { metodoPago: "transfer", canal: "bancario", abono: "notAvailable", retiro: "$0 COP" },
        ]
    },
    {
        pais: "Peru",
        data: [
            { metodoPago: "transfer", canal: "bancario", abono: "$0", retiro: "$0" }
        ]
    },
    {
        pais: "Mexico",
        data: [
            { metodoPago: "transfer", canal: "bancario", abono: "$0", retiro: "$0" }
        ]
    }
];

export const compraVenta = [

    {
        pais: "Chile",
        data: [
            { tipoOrden: "instantBuySell", comision: "1,2%", descripcion: "priceForMinute" },
            { tipoOrden: "scheduledPurchase", comision: "1,2%", descripcion: "schedulePurchase" }
        ]
    },
    {
        pais: "Argentina",
        data: [
            { tipoOrden: "instantBuySell", comision: "0,6%", descripcion: "priceForMinute" },
        ]
    },
    {
        pais: "Colombia",
        data: [
            { tipoOrden: "instantBuySell", comision: "1,2%", descripcion: "priceForMinute" },
        ]
    },
    {
        pais: "Peru",
        data: [
            { tipoOrden: "instantBuySell", comision: "1,2%", descripcion: "priceForMinute" },
        ]
    },
    {
        pais: "Mexico",
        data: [
            { tipoOrden: "instantBuySell", comision: "1,2%", descripcion: "priceForMinute" },
        ]
    }
];

export const comisiones = [

    {
        pais: "Chile",
        moneda: "Bitcoin",
        data: [
            { volumen: "< $2 000 USD", taker: "0,80%", maker: "0,40 %" },
            { volumen: "< $20 000 USD	", taker: "0,70 %", maker: "0,35 %" }
        ]
    },
    {
        pais: "Chile",
        moneda: "Bitcoin Cash",
        data: [
            { volumen: "< $2 000 USD", taker: "0,80%", maker: "0,40 %" },
            { volumen: "< $20 000 USD	", taker: "0,70 %", maker: "0,35 %" }
        ]
    },
    {
        pais: "Chile",
        moneda: "Ether",
        data: [
            { volumen: "< $2 000 USD", taker: "0,90%", maker: "0,40 %" },
            { volumen: "< $20 000 USD	", taker: "0,70 %", maker: "0,35 %" }
        ]
    },
    {
        pais: "Chile",
        moneda: "Litecoin",
        data: [
            { volumen: "< $2 000 USD", taker: "0,80%", maker: "0,40 %" },
            { volumen: "< $20 000 USD	", taker: "0,70 %", maker: "0,35 %" }
        ]
    },
    {
        pais: "Chile",
        moneda: "USD coin",
        data: [
            { volumen: "< $2 000 USD", taker: "0,80%", maker: "0,40 %" },
            { volumen: "< $20 000 USD	", taker: "0,70 %", maker: "0,35 %" }
        ]
    },
    {
        pais: "Argentina",
        moneda: "Bitcoin",
        data: [
            { volumen: "< $2 000 USD", taker: "0,80%", maker: "0,40 %" },
            { volumen: "< $20 000 USD	", taker: "0,70 %", maker: "0,35 %" }
        ]
    },
    {
        pais: "Argentina",
        moneda: "Bitcoin Cash",
        data: [
            { volumen: "< $2 000 USD", taker: "0,80%", maker: "0,40 %" },
            { volumen: "< $20 000 USD	", taker: "0,70 %", maker: "0,35 %" }
        ]
    },
    {
        pais: "Argentina",
        moneda: "Ether",
        data: [
            { volumen: "< $2 000 USD", taker: "0,90%", maker: "0,40 %" },
            { volumen: "< $20 000 USD	", taker: "0,70 %", maker: "0,35 %" }
        ]
    },
    {
        pais: "Argentina",
        moneda: "Litecoin",
        data: [
            { volumen: "< $2 000 USD", taker: "0,80%", maker: "0,40 %" },
            { volumen: "< $20 000 USD	", taker: "0,70 %", maker: "0,35 %" }
        ]
    },
    {
        pais: "Argentina",
        moneda: "USD coin",
        data: [
            { volumen: "< $2 000 USD", taker: "0,80%", maker: "0,40 %" },
            { volumen: "< $20 000 USD	", taker: "0,70 %", maker: "0,35 %" }
        ]
    },
    {
        pais: "Colombia",
        moneda: "Bitcoin",
        data: [
            { volumen: "< $2 000 USD", taker: "0,80%", maker: "0,40 %" },
            { volumen: "< $20 000 USD	", taker: "0,70 %", maker: "0,35 %" }
        ]
    },
    {
        pais: "Colombia",
        moneda: "Bitcoin Cash",
        data: [
            { volumen: "< $2 000 USD", taker: "0,80%", maker: "0,40 %" },
            { volumen: "< $20 000 USD	", taker: "0,70 %", maker: "0,35 %" }
        ]
    },
    {
        pais: "Colombia",
        moneda: "Ether",
        data: [
            { volumen: "< $2 000 USD", taker: "0,90%", maker: "0,40 %" },
            { volumen: "< $20 000 USD	", taker: "0,70 %", maker: "0,35 %" }
        ]
    },
    {
        pais: "Colombia",
        moneda: "Litecoin",
        data: [
            { volumen: "< $2 000 USD", taker: "0,80%", maker: "0,40 %" },
            { volumen: "< $20 000 USD	", taker: "0,70 %", maker: "0,35 %" }
        ]
    },
    {
        pais: "Colombia",
        moneda: "USD coin",
        data: [
            { volumen: "< $2 000 USD", taker: "0,80%", maker: "0,40 %" },
            { volumen: "< $20 000 USD	", taker: "0,70 %", maker: "0,35 %" }
        ]
    },
    {
        pais: "Peru",
        moneda: "Bitcoin",
        data: [
            { volumen: "< $2 000 USD", taker: "0,80%", maker: "0,40 %" },
            { volumen: "< $20 000 USD	", taker: "0,70 %", maker: "0,35 %" }
        ]
    },
    {
        pais: "Peru",
        moneda: "Bitcoin Cash",
        data: [
            { volumen: "< $2 000 USD", taker: "0,80%", maker: "0,40 %" },
            { volumen: "< $20 000 USD	", taker: "0,70 %", maker: "0,35 %" }
        ]
    },
    {
        pais: "Peru",
        moneda: "Ether",
        data: [
            { volumen: "< $2 000 USD", taker: "0,90%", maker: "0,40 %" },
            { volumen: "< $20 000 USD	", taker: "0,70 %", maker: "0,35 %" }
        ]
    },
    {
        pais: "Peru",
        moneda: "Litecoin",
        data: [
            { volumen: "< $2 000 USD", taker: "0,80%", maker: "0,40 %" },
            { volumen: "< $20 000 USD	", taker: "0,70 %", maker: "0,35 %" }
        ]
    },
    {
        pais: "Peru",
        moneda: "USD coin",
        data: [
            { volumen: "< $2 000 USD", taker: "0,80%", maker: "0,40 %" },
            { volumen: "< $20 000 USD	", taker: "0,70 %", maker: "0,35 %" }
        ]
    },
    {
        pais: "Mexico",
        moneda: "Bitcoin",
        data: [
            { volumen: "< $2 000 USD", taker: "0,80%", maker: "0,40 %" },
            { volumen: "< $20 000 USD	", taker: "0,70 %", maker: "0,35 %" }
        ]
    },
    {
        pais: "Mexico",
        moneda: "Bitcoin Cash",
        data: [
            { volumen: "< $2 000 USD", taker: "0,80%", maker: "0,40 %" },
            { volumen: "< $20 000 USD	", taker: "0,70 %", maker: "0,35 %" }
        ]
    },
    {
        pais: "Mexico",
        moneda: "Ether",
        data: [
            { volumen: "< $2 000 USD", taker: "0,90%", maker: "0,40 %" },
            { volumen: "< $20 000 USD	", taker: "0,70 %", maker: "0,35 %" }
        ]
    },
    {
        pais: "Mexico",
        moneda: "Litecoin",
        data: [
            { volumen: "< $2 000 USD", taker: "0,80%", maker: "0,40 %" },
            { volumen: "< $20 000 USD	", taker: "0,70 %", maker: "0,35 %" }
        ]
    },
    {
        pais: "Mexico",
        moneda: "USD coin",
        data: [
            { volumen: "< $2 000 USD", taker: "0,80%", maker: "0,40 %" },
            { volumen: "< $20 000 USD	", taker: "0,70 %", maker: "0,35 %" }
        ]
    }

];

export const abonoRetiroCripto = [
    { moneda: "Bitcoin", redes: "Bitcoin Mainne", abono: "0.0 BTC", retiro: "0.00003 BTC" },
    { moneda: "Bitcoin Cash", redes: "Bitcoin Cash Mainnet", abono: "0.0 BCH", retiro: "0.000005 BCH" },
    { moneda: "Ether", redes: "Ethereum Mainnet", abono: "0.0 ETH", retiro: "0.006 ETH" },
    { moneda: "Litecoin", redes: "Litecoin Mainnet", abono: "0.0 LTC", retiro: "0.00003 LTC" },
    { moneda: "USD coin", redes: "Ethereum Mainnet (ERC-20)", abono: "0.0 USDC", retiro: "5.0 USDC" }
];
