function largestAltitude(gain: number[]): number {
    let highest = 0;

    gain.reduce((acc, currGainValue) => {
        currGainValue = currGainValue + acc
        if (currGainValue > highest) highest = currGainValue
        return currGainValue
    }, 0)

    return highest
};
