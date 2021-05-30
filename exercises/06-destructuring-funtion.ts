export interface Product {
    description: string;
    price:number;
}

 const phone: Product ={
    description:'Nokia 360',
    price: 150
}

const tablet: Product ={
    description:'Galaxy A1',
    price: 250
}


export function calculateIPV( products:Product[] ): [number,number] {

    let total = 0;

    products.forEach( ({ price }) => {
        total += price;
    } )
    return [total,total * 0.15];
}
const products = [phone,tablet];
const [total, isv] = calculateIPV(products);

console.log('Total es: ',total)
console.log('ISV es: ',isv)




