function climbStairs(n: number):number {
    let a = 1 ,b = 1 ,sum;
    for(let i=0;i<n-1;i++){
        sum = a + b
        a = b
        b = sum
    }
    return b
}