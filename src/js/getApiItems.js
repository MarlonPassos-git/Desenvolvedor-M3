import { showItemsScreen } from './showItemsScreen';

export function getApiItems(totItems, callback) {
    
    const urlProduct = 'http://localhost:5000/products';

    fetch(urlProduct)
    .then(response => response.json())
    .then(async (dados) => {
        const products = []
        const totDados = dados.length;

        await localStorage.setItem('productsList', JSON.stringify(dados));

        showItemsScreen(totItems);
    })



}