
type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function chunk(arr: Obj[], size: number): Obj[][] {
    const objArr: Obj[][] = [];
    let i = 0;
    while (i < arr.length) {
        objArr.push(arr.slice(i, i + size));
        i += size;
    }
    return objArr;
}
