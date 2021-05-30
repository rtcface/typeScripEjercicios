//let s: string[]  = ['Bash','Counter','Healing'];

//habilidades.push('uno mas');

interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
}


const character: Character = {
    name: 'Strider',
    hp: 100,
    skills:['Bash','Counter','Healing']
}

character.hometown = 'Small Village'

console.table( character );