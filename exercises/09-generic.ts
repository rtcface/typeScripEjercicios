


function whatType<T>(argument:T){
    return argument;
}

let amStrig = whatType('hello World');
let amNumber = whatType(100);
let amArray = whatType([1,2,3,5,8,5,4]);
let amExplicit = whatType<number>(10)