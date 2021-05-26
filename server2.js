const promiseModule = require("./PromiseModule/promiseModule");

//use then/catch
promiseModule.calculatePromise(10)
.then((res) => {  console.log("the data is ", res)})
.catch((err) => {console.error("There was an error")})

console.log("this is going to continue");


test();

async function test(){
    console.log("I am executing test asynchronously")
    var res = await promiseModule.calculatePromise(10);
    // it was waiting here
    console.log("hello here I am");
}

