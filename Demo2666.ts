type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type OnceFn = (...args: JSONValue[]) => JSONValue | undefined

function once(fn: Function): OnceFn {
    
	return function (...args) {
		try{
            return fn(...args)
        }
        finally{
            fn = () => {}
        }
	};
}