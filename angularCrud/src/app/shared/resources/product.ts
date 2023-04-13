export interface Product {
    id: number;
    product_name: string;
    price: number;
    categorie: string;
    description: string;
}

export const PRODUCTS = [
    {
        id: 1,
        name: 'pão francês',
        price: 2.50,
        categorie: 'Pão',
        description: 'delicioso pão francês quentinho com a casca levemente crocante e o miolo leve e macio'
    },
    {
        id: 2,
        name: 'pão doce',
        price: 3.50,
        categorie: 'Pão',
        description: 'doce de coco com lascas integrais e massa robusta, perfeito'
    }
]