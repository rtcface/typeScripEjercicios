import { Product, calculateIPV } from './06-destructuring-funtion';

const shoppingCart: Product[]=[
    {
        description:'Telefono 1',
        price:350
    },
    {
        description:'Telefono 2',
        price:250

    }
];



const [total,ipv] = calculateIPV(shoppingCart);

console.log('El total es: ',total);
console.log('el IPV es: ',ipv);