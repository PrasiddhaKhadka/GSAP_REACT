// WHAT ARE CALLBACKS?
// a function passed as an argument to another function 

function greet(name,callback){
    console.log("Hello " + name);
    callback()
}

greet('Subash',()=>console.log('Bye bye!'))


function meet(name, callback){
    console.log("Hello " + name);
    const reuslt = callback(10);
    console.log(reuslt)
}
meet('Subash',(value)=>{return value+2})