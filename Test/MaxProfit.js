const maxProfit = (prices) => {
  let minPrice = prices[0];

  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i];

    //find minimum price

    minPrice = Math.min(minPrice, currentPrice);

    console.log(minPrice);
  }
};

const prices = [7, 1, 5, 10, 2, 3];
const profit = maxProfit(prices);
