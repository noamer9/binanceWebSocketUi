const api = require('binance');
let tickerArr = [];
let ticker = {};
let tickerArrTwo = [];
let tickerTwo = {};
const binanceWS = new api.BinanceWS(true); // Argument specifies whether the responses should be beautified, defaults to true

binanceWS.onTicker("BTCUSDT", tickerData => {
    try {

        ticker = {};
        ticker.lastPrice = Number(tickerData.currentClose).toFixed(4);
        ticker.bestBid = Number(tickerData.bestBid).toFixed(4);
        ticker.bidQuantity = Number(tickerData.bestBidQuantity).toFixed(4);
        ticker.bestAsk = Number(tickerData.bestAskPrice).toFixed(4);
        ticker.bestAskQuantity = Number(tickerData.bestAskQuantity).toFixed(4);
        tickerArr.push(ticker);
        printTable(tickerArr);

    }
    catch (e) {
        console.log(e);
    }
});

binanceWS.onTicker("ETHUSDT", tickerData => {
    try {

        tickerTwo = {};
        tickerTwo.lastPrice = Number(tickerData.currentClose).toFixed(4);
        tickerTwo.bestBid = Number(tickerData.bestBid).toFixed(4);
        tickerTwo.bidQuantity = Number(tickerData.bestBidQuantity).toFixed(4);
        tickerTwo.bestAsk = Number(tickerData.bestAskPrice).toFixed(4);
        tickerTwo.bestAskQuantity = Number(tickerData.bestAskQuantity).toFixed(4);
        tickerArrTwo.push(tickerTwo);
        printTableTwo(tickerArrTwo);

    }
    catch (e) {
        console.log(e);
    }
});

const printTable = (tickerArr) => {
    let str = "";
    for (let i = tickerArr.length - 1; i >= 0; i--) {
        str +=
            `<tr class="bg-primary"> 
        <td class="table-secondary" style="color:black";>${i}</td>
        <td class="bg-success bid-price">${tickerArr[i].bestBid}</td>
        <td class="bg-success bid-quantity">${tickerArr[i].bidQuantity}</td>
        <td class="Last-price">${tickerArr[i].lastPrice}</td>
        <td class="bg-danger ask-quantity">${tickerArr[i].bestAskQuantity}</td>
        <td class="bg-danger ask-price">${tickerArr[i].bestAsk}</td>
        </tr>`
    }
    let tableBody = document.getElementById("table-body");
    tableBody.innerHTML = str;
}

const printTableTwo = (tickerArr) => {
    let strTwo = "";
    for (let j = tickerArr.length - 1; j >= 0; j--) {
        strTwo +=
            `<tr class="bg-primary">
        <td class="table-secondary" style="color:black";>${j}</td>
        <td class="bg-success bid-priceTwo">${tickerArr[j].bestBid}</td>
        <td class="bg-success bid-quantityTwo">${tickerArr[j].bidQuantity}</td>
        <td class="Last-priceTwo">${tickerArr[j].lastPrice}</td>
        <td class="bg-danger ask-quantityTwo">${tickerArr[j].bestAskQuantity}</td>
        <td class="bg-danger ask-priceTwo">${tickerArr[j].bestAsk}</td>
        </tr>`
    }
    let tableBodyTwo = document.getElementById("table-body-two");
    tableBodyTwo.innerHTML = strTwo;
}

function buyBTC() {
    let bestAsk = null;
    bestAsk = tickerArr[tickerArr.length - 1].bestAsk;
    alert(`You just bought BTCUSDT at ${tickerArr[tickerArr.length - 1].bestAsk}`);
}

function sellBTC() {
    let bestBid = null;
    bestBid = tickerArr[tickerArr.length - 1].bestBid;
    alert(`You just sold BTCUSDT at ${tickerArr[tickerArr.length - 1].bestBid}`);
}

function buyETH() {
    let bestAsk = null;
    bestAsk = tickerArrTwo[tickerArrTwo.length - 1].bestAsk;
    alert(`You just bought ETHUSDT at ${tickerArrTwo[tickerArrTwo.length - 1].bestAsk}`);
}

function sellETH() {
    let bestBid = null;
    bestBid = tickerArrTwo[tickerArrTwo.length - 1].bestBid;
    alert(`You just sold ETHUSDT at ${tickerArrTwo[tickerArrTwo.length - 1].bestBid}`);
}




// binanceWS.onAggTrade(document.getElementById("symbol").value, aggTradeData => {
//     console.log("aggTradeData ,", aggTradeData);

//     let price = aggTradeData.price;
//     let quantity = aggTradeData.quantity;
//     document.getElementById("Last-price").innerHTML = price;


// });


    // binanceWS.send(JSON.stringify({ method: "close" }));









// binanceWS.onKline('BTCUSTD', '1m', kLineData => {
//     // console.log(kLineData);
// })

// eventType: "aggTrade"
// eventTime: 1589811881604
// symbol: "BNBBTC"
// tradeId: 64453420
// price: "0.00170210"
// quantity: "4.68000000"
// firstTradeId: 78118630
// lastTradeId: 78118630
// time: 1589811881603
// maker: true
// ignored: true

// eventType: "depthUpdate"
// eventTime: 1589811878194
// symbol: "BNBBTC"
// firstUpdateId: 672112052
// lastUpdateId: 672112055
// bidDepthDelta: Array(4)
// 0: {price: "0.00170080", quantity: "10.60000000"}
// 1: {price: "0.00170000", quantity: "31.99000000"}
// 2: {price: "0.00169370", quantity: "3.97000000"}
// 3: {price: "0.00169100", quantity: "1006.98000000"}
// length: 4
// __proto__: Array(0)
// askDepthDelta: Array(0)
// length: 0
// __proto__: Array(0)

// startTime: 1589811840000
// endTime: 1589811899999
// symbol: "BNBBTC"
// interval: "1m"
// firstTradeId: 78118624
// lastTradeId: 78118629
// open: "0.00170200"
// close: "0.00170200"
// high: "0.00170260"
// low: "0.00170200"
// volume: "526.56000000"
// trades: 6
// final: false
// quoteVolume: "0.89620696"
// volumeActive: "0.30000000"
// quoteVolumeActive: "0.00051078"
// ignored: "0"