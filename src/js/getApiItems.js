import { createProduct } from './createProduct';
import { showItemsScreen } from './showItemsScreen';

export function getApiItems(totItems) {
    
    const urlProduct = 'http://localhost:5000/products';

    fetch(urlProduct)
    .then(response => response.json())
    .then(dados => {
        console.log(dados)

        const products = dados.map((product, index) => {
            if (index < totItems) {
                return createProduct(product);
            }
        })

        showItemsScreen(products);
    })



}