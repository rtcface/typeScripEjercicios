
function classDecorator<T extends {new (...args: any[]):{}}>(
    constructor: T
){
    return class extends constructor{
        newProperty:'new property';
        hello:'hello world';
    };
}

@classDecorator
class MySuperClass{
    public myProperty: string = 'String prueba';

    printMethod(){
        console.log('Hello World');
    }
}

const miclase = new MySuperClass();

console.log(MySuperClass);
console.log(miclase.printMethod());