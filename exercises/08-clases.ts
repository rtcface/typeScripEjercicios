class normalPerson{
    /**
     *
     */
    constructor(        
        public nombre : string,
        public address: string
    ) {
    }
}



class Hero extends normalPerson {
    //alterEgo: string;
    //old:number;
    //realName:string;
    constructor(
        public alterEgo: string,
        public old: number,
        public realName: string ) {
            super(realName,'NY, USA');
         }
}

const ironMan = new Hero(
    'IronMan',45,'Tony Stark'
);

console.log(ironMan);