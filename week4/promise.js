let promise = new Promise(function (reslove, reject) {

    setTimeout(function() {
        reslove('success!');
    },1000);
});
 promise.then(function(value){
    console.log(value);//output: Success!
 }).catch(function(error){
    console.log(error);
 });