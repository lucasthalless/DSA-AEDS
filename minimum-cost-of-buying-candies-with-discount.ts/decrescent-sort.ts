function minimumCost(cost: number[]): number {
    const decrescentCost = cost.sort((a,b) => b - a)
    let minCost = 0

    for (let i = 0; i < decrescentCost.length; i = i + 3) {
        minCost = minCost + (decrescentCost[i] ?? 0) + (decrescentCost[i+1] ?? 0)
    }

    return minCost
};
