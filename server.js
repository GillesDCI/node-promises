const fsPromises = require('fs').promises;
const fs = require('fs');
const promiseModule = require("./PromiseModule/promiseModule");

//write a file using the promises library
fsPromises.writeFile("test.txt","Hello test","utf-8","a");


//you immediately get a response. //synchronously
var content = fs.readFileSync('test.txt','utf-8');
console.log("the content synchronously is", content);

//use of then/catch 
fsPromises.readFile("test.txt",'utf-8').then((data) => {
    console.log("the data is" , data)
 }).catch(() => {console.log("something went wrong")});


//use of callback function
fs.readFile('test.txt', 'utf-8', function(err,content){
  if(err){
      return console.log("we have an error")
  }
  console.log("the content is in callback: ", content);
});


fsPromises.appendFile("test.txt","append the data dfqsdfqsfqsfs ").then(() => {
    console.log("Data is added")
});

test();



//asynchronous function that awaits the result
async function test(){
   var res =  await fsPromises.readFile("test.txt",'utf-8');
   console.log("the result of asynchronous function is ", res)
}











