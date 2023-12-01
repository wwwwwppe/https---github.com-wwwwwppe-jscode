type P = Promise<number>

async function addTwoPromises(promise1:P,promise2:P): P{
    console.time("demo")
    console.timeEnd("demo")
    console.timeLog("demo")

    return await promise1 + await promise2
}

