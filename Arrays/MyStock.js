function MyStock(prices) {
  let minPrices = prices[0];

  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    const currentPrice = prices[i];

    minPrices = Math.min(minPrices, currentPrice);

    const potentialProfit = currentPrice - minPrices;

    maxProfit = Math.max(maxProfit, potentialProfit);
  }
  return maxProfit;
}

const prices = [7, 1, 5, 3, 6, 4, 9];

const profit = MyStock(prices);
console.log(profit);
