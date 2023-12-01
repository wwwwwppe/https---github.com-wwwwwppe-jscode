type Fn = (...params: number[]) => number;

function memoize(fn: Fn): Fn {
	let temp: number[][] = [];
	let tem: number[][] = [];

	return function (...args) {
		switch (args.length) {
			case 1:
				let num = temp.find((item) => item[0] === args[0]);
				if (num != null) return num[1];
				let num2 = [args[0], fn(args[0])];
				temp.push(num2);
				return num2[1];
			case 2:
				let demo = tem.find((item) => {
					item[0] === args[0] && item[1] === args[1];
				});
				if (demo != null) return demo[2];
				let demo1 = [args[0], args[1], fn(args[0], args[1])];
				tem.push(demo1);
				return demo1[2];
			default:
				return 0;
		}
	};
}


let callCount = 0; 
 const memoizedFn = memoize(function (a, b) {
	 callCount += 1;
    return a + b;
 })
memoizedFn(2, 3) // 5
memoizedFn(2, 3) // 5
console.log(callCount) // 1


function memoize2(fn:Fn) :Fn{
    let amap = new Map()
    return function(...args){
        let fnNum=JSON.stringify(args)
        if(!amap.has(fnNum)){
            amap.set(fnNum,fn(...args))
            return fnNum
        }else{
            return amap.get(fnNum)
        }
    }
}

