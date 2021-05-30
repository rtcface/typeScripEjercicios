

interface Passenger {
    name: string,
    son?: string[],
}

const passenger1: Passenger = {
    name:'Ramiro'
}

const passenger2: Passenger = {
    name:'Laura',
    son: ['Emiliano','Cesar']
}

function printSon(
passenger:Passenger
): void {
    const countSon=passenger.son?.length || 0;

    console.log( countSon );
}

printSon(passenger1);