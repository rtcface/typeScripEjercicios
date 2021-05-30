interface Player{
    volume :number,
    second :number,
    song   :string,
    details:Details  
}

interface Details {
    author:string,
    year  :number,
}

const player:Player = {
    volume:90,
    second:35,
    song:'month',
    details: {
        author:'ed sheeran',
        year  : 2015
    }  
}

const {volume,second,song,details} = player;
const {author } = details;

//console.log('El volumen actual es:',volume);
//console.log('El segundo actual es:',second);
//console.log('La cancion actual es:',song);
//console.log('El autor es:',author);

const dbz: string[] = ['Goku','Vegeta','Truncks'];
const [ , ,p3] = dbz;


//console.log('Personaje 1:', p1);  
// console.log('Personaje 2:', p2);  
console.log('Personaje 3:', p3);  


