type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    nums.forEach(item =>{
        init = fn(init,item)
    })
    return init
};