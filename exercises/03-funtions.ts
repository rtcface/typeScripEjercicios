function add(  a:number,  b:number): number
{
    return a+b; 
}

const result = add(10,15);
const arrowResult = (a , b) => {
    return a+b;
}

function multiply (initialValue:number, otherValue?: number, base:number=2){
    return initialValue * base;
}


console.log(arrowResult);
console.log(multiply(6));

interface CharacterLOR {
    name: string,
    ph: number
    mostrarhp: () => void;
}



function cure ( character: CharacterLOR, cureX: number ): void  {

    character.ph += cureX;
     
}

const newCharacter: CharacterLOR = {
    name: 'SpiderMan',
    ph: 100,
    mostrarhp () {
        console.log('Puntos de vida:',this.ph);
    }
} 

cure(newCharacter,10);
newCharacter.mostrarhp(); 



