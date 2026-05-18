function* fibGenerator(count: number = 0): Generator<number, any, number> {
    let memo = []
    let calls = 0
    while (calls < 50) {
        memo.push(count)
        calls++
        yield count
        if (memo.length == 2) {
            count = memo[0] + memo[1]
            memo.shift()
        }
        if (memo.length == 1 && memo[0] == 0) {
            count = 1
        }
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */
