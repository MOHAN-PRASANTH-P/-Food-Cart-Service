export function knapsack(products, budget) {
  const n = products.length;
  const dp = Array(n + 1).fill(0).map(() => Array(budget + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let w = 1; w <= budget; w++) {
      if (products[i - 1].price <= w) {
        dp[i][w] = Math.max(
          products[i - 1].price + dp[i - 1][w - products[i - 1].price],
          dp[i - 1][w]
        );
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  // backtracking to find chosen items
  let res = dp[n][budget];
  let w = budget;
  let selected = [];

  for (let i = n; i > 0 && res > 0; i--) {
    if (res !== dp[i - 1][w]) {
      selected.push(products[i - 1].name);
      res -= products[i - 1].price;
      w -= products[i - 1].price;
    }
  }

  return selected.reverse();
}
