
module.exports.calculatePromise = async (x) => {
     return new Promise(function(resolve,reject){
        //let x = 11;
    
         setTimeout(() => {
            
            if(x === 10){
                resolve("value is 10");
            } else {
                reject("value is not 10")
            }
        }, 5000);

    });
}



