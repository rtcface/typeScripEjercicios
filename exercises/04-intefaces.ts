

interface AddressHero {
    street : string,
    country: string,
    town   : string,      
}


interface SuperHero {
    name        : string,
    old         : number,
    address     :  AddressHero,
    showAddress : () => string    
}




const superHero: SuperHero = {
    name: 'Spider-Man',
    old: 25,
    address: {
        street: 'Main St',
        country: 'USA',
        town: 'Ny'
    },
    showAddress() {
        return this.name+' ,'+this.address.town+' ,'+this.address.country;
    }


}

const address = superHero.showAddress();

console.log(address);



