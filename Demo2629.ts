type F = (x: number) => number;

function compose(functions: F[]): F {
    return function(x: number): number {
        for (let f of functions.reverse()) {
            x = f(x);
        }
        return x;
    };
}

/**
 k const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */