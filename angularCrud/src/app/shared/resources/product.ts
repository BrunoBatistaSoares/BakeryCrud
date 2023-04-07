export interface Product {
    name: string;
    price: number;
    categorie: string;
}

export const PRODUCTS = [
    {
        name: 'pão francês',
        price: 2.50,
        categorie: 'Pão'
    },
    {
        name: 'pão doce',
        price: 3.50,
        categorie: 'Pão'
    }
]