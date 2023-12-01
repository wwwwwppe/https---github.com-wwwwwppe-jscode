type Fn = (n: number, i: number) => any;

/**
 * 过滤数组中的元素。
 * @param arr - 要过滤的数组。
 * @param fn - 用于过滤的函数。
 * @returns 过滤后的数组。
 */
function filter(arr: number[], fn: Fn): number[] {
	let brr = [] as number[];
	for (let i = 0; i < arr.length; i++) {
		if(fn(arr[i], i)){
            brr.push(arr[i])
        }
	}
    return brr
}
