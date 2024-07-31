/* # Task

Provide 3 unique implementations of the following function in TypeScript.

- Comment on the complexity or efficiency of each function.

**Input**: `n` - any integer

*Assuming this input will always produce a result lesser than `Number.MAX_SAFE_INTEGER`*.

**Output**: `return` - summation to `n`, i.e. `sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15`. */

/* Iterative Method */

function sum_to_n_a(n: number) {
	let sum = 0;
    for(let i = 1; i <= n; i++) {
        sum += i;
    }
    return console.log("Summary func A: " + sum);
}

sum_to_n_a(5);

/* Mathematics Method */

function sum_to_n_b(n: number) {
	let sum = 0;
    if(n <= 0) {
        return 0;
    } else {
        sum = (n * (n + 1)) / 2;
    }
    return console.log("Summary func B: " + sum);
}

sum_to_n_b(5);

/* Recursive Method */

function sum_to_n_c(n: number): number {
    if (n <= 0) { 
        return 0; 
    } else { 
        return n + sum_to_n_c(n - 1); 
    }
}

console.log("Summary func C: " + sum_to_n_c(5));
